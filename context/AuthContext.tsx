import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';
import { useRouter, useSegments } from 'expo-router';
import { Platform } from 'react-native';


interface User {
  id: number;
  username: string;
  email: string;
  profile?: {
    phone?: string;
    class_level?: string;
    avatar?: string;
  };
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const segments = useSegments();

  // Vérifier l'authentification au démarrage
  useEffect(() => {
    checkAuth();
  }, []);

  // Rediriger selon l'état d'authentification
  useEffect(() => {
    if (isLoading) return;

// Fonction helper pour vérifier les routes auth
const isAuthRoute = (segment: string): boolean => {
  return segment === '(auth)' || segment === 'login' || segment === 'register';
};

const inAuthGroup = isAuthRoute(segments[0] as string);
    if (!user && !inAuthGroup) {
      // Utilisateur non connecté et pas sur une page d'auth
      router.replace('/login' as any);
    } else if (user && inAuthGroup) {
      // Utilisateur connecté mais sur une page d'auth
      router.replace('/' as any);
    }
  }, [user, segments, isLoading]);

  const checkAuth = async () => {
    try {
      const isAuth = await authService.isAuthenticated();
      
      if (isAuth) {
        const userData = await authService.getUserData();
        setUser(userData);
        console.log(' Utilisateur authentifié:', userData?.username);
      } else {
        console.log('ℹ Aucun utilisateur connecté');
      }
    } catch (error) {
      console.error(' Erreur vérification auth:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (username: string, password: string) => {
    try {
      console.log(' Tentative de connexion...');
      const response = await authService.login(username, password);
      setUser(response.user);
      console.log('✅ Connexion réussie, redirection...');
      //router.replace('/' as any);
    } catch (error) {
      console.error(' Erreur login:', error);
      throw error;
    }
  };

  const register = async (data: any) => {
  try {
    const response = await authService.register(data);
    // setUser(response.user);  ← COMMENTÉ
    
    if (Platform.OS === 'web') {
      window.location.href = '/login';  // ← CHANGÉ
    } else {
      router.replace('/login');  // ← CHANGÉ
    }
  } catch (error) {
    throw error;
  }
};

  const logout = async () => {
    try {
      console.log(' Déconnexion...');
      await authService.logout();
      setUser(null);
      router.replace('/login' as any);
      console.log(' Déconnexion réussie');
    } catch (error) {
      console.error(' Erreur déconnexion:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}