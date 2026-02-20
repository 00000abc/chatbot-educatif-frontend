import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BURKINA_LESSONS from '../../../../data/lessons';

export default function LessonDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [isCompleted, setIsCompleted] = useState(false);

  const classLevel = (params.id as string)?.toLowerCase() || '';
  const subject = (params.subject as string) || '';
  const lessonId = params.lesson as string;
  
  const classLevelDisplay = classLevel.toUpperCase();
  const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1);

  // Récupérer la leçon depuis la base de données
  const lesson = BURKINA_LESSONS[classLevel]?.[subject]?.find(l => l.id === lessonId);

  const handleComplete = () => {
    setIsCompleted(true);
    // TODO: Sauvegarder la progression dans AsyncStorage ou backend
  };

  if (!lesson) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle-outline" size={80} color="#FF6B6B" />
          <Text style={styles.errorTitle}>Leçon introuvable</Text>
          <Text style={styles.errorText}>
            Cette leçon n'existe pas ou n'est pas encore disponible.
          </Text>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>Retour</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.headerBackButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerSubtitle}>
            {classLevelDisplay} - {subjectName}
          </Text>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {lesson.title}
          </Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {/* Lesson Title */}
        <View style={styles.titleSection}>
          <Text style={styles.lessonTitle}>{lesson.title}</Text>
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Ionicons name="time-outline" size={18} color="#666" />
              <Text style={styles.metaText}>{lesson.duration}</Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="list-outline" size={18} color="#666" />
              <Text style={styles.metaText}>
                {lesson.objectives.length} objectifs
              </Text>
            </View>
          </View>
        </View>

        {/* Lesson Content */}
        <View style={styles.lessonContent}>
          {/* Objectifs */}
          <Text style={styles.sectionTitle}>📌 Objectifs de la leçon</Text>
          <View style={styles.objectivesList}>
            {lesson.objectives.map((objective, index) => (
              <View key={index} style={styles.objectiveItem}>
                <Ionicons name="checkmark-circle-outline" size={20} color="#4A90E2" />
                <Text style={styles.objectiveText}>{objective}</Text>
              </View>
            ))}
          </View>

          {/* Introduction */}
          {lesson.content.introduction && (
            <>
              <Text style={styles.sectionTitle}>📖 Introduction</Text>
              <View style={styles.textContent}>
                <Text style={styles.paragraph}>{lesson.content.introduction}</Text>
              </View>
            </>
          )}

          {/* Sections du contenu */}
          {lesson.content.sections.map((section, index) => (
            <View key={index} style={styles.contentSection}>
              <Text style={styles.subheading}>
                {index + 1}. {section.title}
              </Text>
              <Text style={styles.paragraph}>{section.content}</Text>
            </View>
          ))}

          {/* Exemples */}
          {lesson.content.examples && lesson.content.examples.length > 0 && (
            <View style={styles.exampleBox}>
              <View style={styles.exampleHeader}>
                <Ionicons name="bulb-outline" size={20} color="#FFA500" />
                <Text style={styles.exampleTitle}>Exemples</Text>
              </View>
              {lesson.content.examples.map((example, index) => (
                <Text key={index} style={styles.exampleText}>
                  • {example}
                </Text>
              ))}
            </View>
          )}

          {/* Exercices */}
          {lesson.content.exercises && lesson.content.exercises.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>✏️ Exercices</Text>
              {lesson.content.exercises.map((exercise, index) => (
                <View key={index} style={styles.exerciseBox}>
                  <Text style={styles.exerciseNumber}>Exercice {index + 1}</Text>
                  <Text style={styles.exerciseText}>{exercise}</Text>
                </View>
              ))}
            </>
          )}

          {/* Info box */}
          <View style={styles.infoBox}>
            <Ionicons name="information-circle" size={24} color="#4A90E2" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoTitle}>Conseil</Text>
              <Text style={styles.infoText}>
                N'hésite pas à relire cette leçon plusieurs fois pour bien comprendre.
                Tu peux aussi demander de l'aide à l'assistant IA !
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        {!isCompleted ? (
          <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
            <Ionicons name="checkmark" size={24} color="#FFFFFF" />
            <Text style={styles.completeButtonText}>Marquer comme terminé</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.completedIndicator}>
            <Ionicons name="checkmark-circle" size={24} color="#6BCF7F" />
            <Text style={styles.completedText}>Leçon terminée ! Bravo ! 🎉</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerBackButton: {
    padding: 5,
  },
  headerTextContainer: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
  headerSubtitle: {
    fontSize: 11,
    color: '#666',
    marginBottom: 2,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  titleSection: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  lessonTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 20,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  metaText: {
    fontSize: 14,
    color: '#666',
  },
  lessonContent: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    marginTop: 20,
  },
  objectivesList: {
    marginBottom: 20,
  },
  objectiveItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 10,
  },
  objectiveText: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  textContent: {
    marginBottom: 20,
  },
  contentSection: {
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 15,
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  exampleBox: {
    backgroundColor: '#FFF9E6',
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#FFA500',
    marginBottom: 20,
  },
  exampleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  exampleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  exampleText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    marginBottom: 5,
  },
  exerciseBox: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4A90E2',
  },
  exerciseNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A90E2',
    marginBottom: 8,
  },
  exerciseText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#E8F4FD',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    gap: 12,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  completeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 10,
    gap: 10,
  },
  completeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  completedIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    gap: 10,
  },
  completedText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6BCF7F',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginTop: 20,
    marginBottom: 10,
  },
  errorText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 30,
  },
  backButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});