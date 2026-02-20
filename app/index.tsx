import { useAuth } from "../context/AuthContext";
import { apiService } from "../services/apiService";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
//import FluidGradientLogo from '../components/FluidGradientLogo';
import FluidBlobLogo from '../components/FluidBlobLogo';

import { MarkdownMessage } from '../components/MarkdownMessage';

import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatScreen() {
  const { user, logout } = useAuth();
  const [conversationId, setConversationId] = useState<number | undefined>(undefined);
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleSend = async () => {
    if (inputText.trim() === '' || isLoading) return;

    const userMessageText = inputText.trim();
    const newMessage: Message = {
      id: Date.now().toString(),
      text: userMessageText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await apiService.sendMessage({
        message: userMessageText,
        conversation_id: conversationId,
        class_level: user?.profile?.class_level,
      });

      if (!conversationId) {
        setConversationId(response.conversation_id);
      }

      const aiMessage: Message = {
        id: response.message_id.toString(),
        text: response.response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      console.error('Erreur:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: error.message || 'Erreur de connexion au serveur',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageContainer,
        item.isUser ? styles.userMessageContainer : styles.aiMessageContainer,
      ]}
    >
      {!item.isUser && (
        <View style={styles.aiAvatarSmall}>
          <Ionicons name="sparkles" size={16} color="#8B5CF6" />
        </View>
      )}
      
      <View
        style={[
          styles.messageBubble,
          item.isUser ? styles.userMessage : styles.aiMessage,
        ]}
      >
        {item.isUser ? (
          <Text style={styles.userMessageText}>{item.text}</Text>
        ) : (
          <MarkdownMessage content={item.text} />
        )}
        <Text style={[
          styles.timestamp,
          item.isUser ? styles.userTimestamp : styles.aiTimestamp
        ]}>
          {item.timestamp.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </View>
      
      {item.isUser && (
        <View style={styles.userAvatarSmall}>
          <Ionicons name="person" size={16} color="#F59E0B" />
        </View>
      )}
    </View>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyStateContainer}>
      <View style={styles.logoContainer}>
          <FluidBlobLogo size={120} iconSize={60} />
      </View>
      
      <Text style={styles.welcomeTitle}>Bonjour</Text>
      {/*<Text style={styles.welcomeSubtitle}>
        Je suis ton assistant éducatif
      </Text>*/}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header avec logout intégré pour le web */}
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.avatarButton} onPress={() => setShowUserInfo(!showUserInfo)}>
            <LinearGradient
              colors={['#8B5CF6', '#6366F1']}
              style={styles.aiAvatar}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
            </LinearGradient>
            
          </TouchableOpacity>

          {/* Infos utilisateur */}
          {showUserInfo && user && (
            <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>{user.username}</Text>
              {user.profile?.class_level && (
                <Text style={styles.userLevel}>
                 {user.profile.class_level.toUpperCase()}
                </Text>
              )}
            </View>
          )}

          <View style={styles.headerCenter} />

          <View style={styles.headerCenter} />

          <View style={styles.headerRight}>
            <TouchableOpacity
              style={styles.coursButton}
              onPress={() => router.push('/courses' as any)}
            >
              <Ionicons name="school-outline" size={20} color="#8B5CF6" />
              <Text style={styles.coursButtonText}>Cours</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={logout} style={styles.logoutButton}>
              <Ionicons name="log-out-outline" size={24} color="#666" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Messages List ou Empty State */}
      {messages.length === 0 ? (
        renderEmptyState()
      ) : (
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messagesList}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* Input Area */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        style={styles.inputKeyboardView}
      >
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Écris ton message..."
              placeholderTextColor="#9CA3AF"
              multiline
              maxLength={500}
            />
            <TouchableOpacity 
              style={[
                styles.sendButton,
                inputText.trim() && styles.sendButtonActive
              ]} 
              onPress={handleSend}
              disabled={!inputText.trim()}
            >
              <LinearGradient
                colors={inputText.trim() ? ['#8B5CF6', '#6366F1'] : ['#E5E7EB', '#E5E7EB']}
                style={styles.sendButtonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Ionicons name="send" size={20} color="#FFFFFF" />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  // Wrapper du header pour le centrage web
  headerWrapper: {
    ...Platform.select({
      web: {
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
      },
    }),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    ...Platform.select({
      web: {
        maxWidth: 800,
        width: '100%',
        borderBottomWidth: 0, // la bordure est sur le wrapper
      },
    }),
  },
  avatarButton: {
    padding: 10,
  },
  aiAvatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    flex: 1,
    marginLeft: 12,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  coursButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    gap: 6,
  },
  coursButtonText: {
    fontSize: 14,
    color: '#8B5CF6',
    fontWeight: '600',
  },
  logoutButton: {
    padding: 8,
  },

  // Empty State
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    ...Platform.select({
      web: {
        maxWidth: 600,
        width: '100%',
        alignSelf: 'center',
      },
    }),
  },
  logoContainer: {
    marginBottom: 30,
  },
  logoGradient: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 18,
    color: '#6B7280',
    marginBottom: 12,
  },

  // Messages
  messagesList: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    ...Platform.select({
      web: {
        maxWidth: 800,
        width: '100%',
        alignSelf: 'center',
      },
    }),
  },
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 6,
    alignItems: 'flex-end',
  },
  userMessageContainer: {
    justifyContent: 'flex-end',
  },
  aiMessageContainer: {
    justifyContent: 'flex-start',
  },
  aiAvatarSmall: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 4,
  },
  userAvatarSmall: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FEF3C7',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    marginBottom: 4,
  },
  messageBubble: {
  maxWidth: '75%',
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderRadius: 20,
  flexShrink: 1,                // Permet à la bulle de rétrécir si nécessaire
  ...Platform.select({
    web: {
      wordBreak: 'break-word',  // Casse les mots longs sur le web
      overflowWrap: 'break-word',
    },
  }),
},
  userMessage: {
    backgroundColor: '#8B5CF6',
    borderBottomRightRadius: 4,
  },
  aiMessage: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  userMessageText: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 21,
  },
  timestamp: {
    fontSize: 10,
    marginTop: 6,
  },
  userTimestamp: {
    color: '#E9D5FF',
    textAlign: 'right',
  },
  aiTimestamp: {
    color: '#9CA3AF',
  },

  // Input
  inputKeyboardView: {
    ...Platform.select({
      web: {
        width: '100%',
        alignItems: 'center',
      },
    }),
  },
  inputContainer: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    ...Platform.select({
      web: {
        maxWidth: 800,
        width: '100%',
      },
    }),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#F9FAFB',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
    maxHeight: 100,
    paddingVertical: 8,
  },
  sendButton: {
    marginLeft: 8,
    marginBottom: 4,
  },
  sendButtonActive: {},
  sendButtonGradient: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfoContainer: {
  marginLeft: 12,
  backgroundColor: '#F3F4F6',
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: '#E5E7EB',
},
userName: {
  fontSize: 14,
  fontWeight: '600',
  color: '#111827',
},
userLevel: {
  fontSize: 11,
  color: '#6B7280',
  marginTop: 2,
  fontWeight: '500',
},

});
