import { authService } from './authService';

import { Platform } from 'react-native';

const API_BASE_URL = 'https://chatbot-api-yhhw.onrender.com/api';

export interface ChatRequest {
  message: string;
  class_level?: string;
  subject?: string;
  conversation_id?: number;
}

export interface ChatResponse {
  response: string;
  conversation_id: number;
  message_id: number;
}

class APIService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  /**
   * Envoyer un message au chatbot
   */
  async sendMessage(data: ChatRequest): Promise<ChatResponse> {
    try {
      // Récupérer le token d'authentification
      const token = await authService.getAccessToken();

      if (!token) {
        throw new Error('Non authentifié. Veuillez vous connecter.');
      }

      console.log('💬 Envoi du message:', data.message.substring(0, 50) + '...');
      
      const response = await fetch(`${this.baseUrl}/chat/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      console.log('📡 Status:', response.status);

      if (!response.ok) {
        if (response.status === 401) {
          // Token expiré, déconnecter l'utilisateur
          await authService.logout();
          throw new Error('Session expirée. Veuillez vous reconnecter.');
        }
        
        const error = await response.json();
        console.error('❌ Erreur API:', error);
        throw new Error(error.error || 'Erreur réseau');
      }

      const result: ChatResponse = await response.json();
      console.log('✅ Réponse reçue du serveur');
      
      return result;
    } catch (error) {
      console.error('❌ Erreur API sendMessage:', error);
      throw error;
    }
  }

  /**
   * Récupérer toutes les conversations de l'utilisateur
   */
  async getConversations(): Promise<any[]> {
    try {
      const token = await authService.getAccessToken();

      if (!token) {
        throw new Error('Non authentifié');
      }

      const response = await fetch(`${this.baseUrl}/conversations/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des conversations');
      }

      return await response.json();
    } catch (error) {
      console.error('❌ Erreur getConversations:', error);
      throw error;
    }
  }

  /**
   * Récupérer une conversation spécifique
   */
  async getConversation(conversationId: number): Promise<any> {
    try {
      const token = await authService.getAccessToken();

      if (!token) {
        throw new Error('Non authentifié');
      }

      const response = await fetch(`${this.baseUrl}/conversation/${conversationId}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Conversation introuvable');
      }

      return await response.json();
    } catch (error) {
      console.error('❌ Erreur getConversation:', error);
      throw error;
    }
  }

  /**
   * Supprimer une conversation
   */
  async deleteConversation(conversationId: number): Promise<void> {
    try {
      const token = await authService.getAccessToken();

      if (!token) {
        throw new Error('Non authentifié');
      }

      const response = await fetch(`${this.baseUrl}/conversation/${conversationId}/delete/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la suppression');
      }
    } catch (error) {
      console.error('❌ Erreur deleteConversation:', error);
      throw error;
    }
  }

  /**
   * Vérifier que l'API fonctionne
   */
  async healthCheck(): Promise<boolean> {
    try {
      console.log('🏥 Health check:', `${this.baseUrl}/health/`);
      
      const response = await fetch(`${this.baseUrl}/health/`);
      const data = await response.json();
      
      console.log('🏥 Health check result:', data);
      
      return data.status === 'ok';
    } catch (error) {
      console.error('❌ Erreur health check:', error);
      return false;
    }
  }
}

export const apiService = new APIService();