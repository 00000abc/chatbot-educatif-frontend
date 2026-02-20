import AsyncStorage from '@react-native-async-storage/async-storage';

// Configuration de l'API
import { Platform } from 'react-native';

const API_BASE_URL = 'https://chatbot-api-yhhw.onrender.com/api';

// Clés de stockage
const ACCESS_TOKEN_KEY = '@auth_access_token';
const REFRESH_TOKEN_KEY = '@auth_refresh_token';
const USER_DATA_KEY = '@auth_user_data';

export interface RegisterData {
  username: string;
  email?: string;
  password: string;
  phone?: string;
  class_level?: string;
}

export interface LoginResponse {
  message: string;
  user: {
    id: number;
    username: string;
    email: string;
    profile?: {
      phone?: string;
      class_level?: string;
      avatar?: string;
    };
  };
  tokens: {
    access: string;
    refresh: string;
  };
}

class AuthService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  /**
   * Inscription d'un nouvel utilisateur
   */
  async register(data: RegisterData): Promise<LoginResponse> {
    try {
      console.log('📝 Inscription:', data.username);

      const response = await fetch(`${this.baseUrl}/auth/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de l\'inscription');
      }

      // Sauvegarder les tokens et les données utilisateur
      await this.saveAuthData(result.tokens.access, result.tokens.refresh, result.user);

      console.log('✅ Inscription réussie');
      return result;
    } catch (error: any) {
      console.error('❌ Erreur inscription:', error);
      throw error;
    }
  }

  /**
   * Connexion d'un utilisateur
   */
  async login(username: string, password: string): Promise<LoginResponse> {
    try {
      console.log('🔐 Connexion:', username);

      const response = await fetch(`${this.baseUrl}/auth/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Identifiants incorrects');
      }

      // Sauvegarder les tokens et les données utilisateur
      await this.saveAuthData(result.tokens.access, result.tokens.refresh, result.user);

      console.log('✅ Connexion réussie');
      return result;
    } catch (error: any) {
      console.error('❌ Erreur connexion:', error);
      throw error;
    }
  }

  /**
   * Déconnexion
   */
  async logout(): Promise<void> {
    try {
      const refreshToken = await this.getRefreshToken();

      if (refreshToken) {
        // Essayer de blacklister le token sur le serveur
        try {
          const accessToken = await this.getAccessToken();
          await fetch(`${this.baseUrl}/auth/logout/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ refresh_token: refreshToken }),
          });
        } catch (e) {
          console.log('⚠️ Erreur lors de la déconnexion sur le serveur:', e);
        }
      }

      // Supprimer les données locales
      await this.clearAuthData();
      console.log('👋 Déconnexion réussie');
    } catch (error) {
      console.error('❌ Erreur déconnexion:', error);
      throw error;
    }
  }

  /**
   * Récupérer le profil de l'utilisateur connecté
   */
  async getProfile(): Promise<any> {
    try {
      const token = await this.getAccessToken();

      if (!token) {
        throw new Error('Non authentifié');
      }

      const response = await fetch(`${this.baseUrl}/auth/profile/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération du profil');
      }

      return await response.json();
    } catch (error) {
      console.error('❌ Erreur récupération profil:', error);
      throw error;
    }
  }

  /**
   * Vérifier si l'utilisateur est connecté
   */
  async isAuthenticated(): Promise<boolean> {
    const token = await this.getAccessToken();
    return !!token;
  }

  /**
   * Récupérer le token d'accès
   */
  async getAccessToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
    } catch (error) {
      console.error('❌ Erreur récupération token:', error);
      return null;
    }
  }

  /**
   * Récupérer le refresh token
   */
  async getRefreshToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
    } catch (error) {
      console.error('❌ Erreur récupération refresh token:', error);
      return null;
    }
  }

  /**
   * Récupérer les données utilisateur
   */
  async getUserData(): Promise<any | null> {
    try {
      const data = await AsyncStorage.getItem(USER_DATA_KEY);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('❌ Erreur récupération user data:', error);
      return null;
    }
  }

  /**
   * Sauvegarder les données d'authentification
   */
  private async saveAuthData(accessToken: string, refreshToken: string, userData: any): Promise<void> {
    try {
      await AsyncStorage.multiSet([
        [ACCESS_TOKEN_KEY, accessToken],
        [REFRESH_TOKEN_KEY, refreshToken],
        [USER_DATA_KEY, JSON.stringify(userData)],
      ]);
    } catch (error) {
      console.error('❌ Erreur sauvegarde auth data:', error);
      throw error;
    }
  }

  /**
   * Supprimer toutes les données d'authentification
   */
  private async clearAuthData(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([
        ACCESS_TOKEN_KEY,
        REFRESH_TOKEN_KEY,
        USER_DATA_KEY,
      ]);
    } catch (error) {
      console.error('❌ Erreur suppression auth data:', error);
      throw error;
    }
  }
}

export const authService = new AuthService();