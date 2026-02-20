import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BURKINA_LESSONS from "../../../../data/lessons";

export default function SubjectLessonsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const classLevel = (params.id as string)?.toLowerCase() || '';
  const subject = (params.subject as string) || '';

  const classLevelDisplay = classLevel.toUpperCase();
  const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1);

  const lessons = BURKINA_LESSONS[classLevel]?.[subject] || [];
  const completedCount = 0;
  const progressPercentage = lessons.length > 0 ? (completedCount / lessons.length) * 100 : 0;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header avec wrapper pour le centrage web */}
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerSubtitle}>{classLevelDisplay}</Text>
            <Text style={styles.headerTitle}>{subjectName}</Text>
          </View>
          <View style={{ width: 24 }} />
        </View>
      </View>

      {/* Content centré sur web */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {lessons.length > 0 ? (
          <>
            {/* Progression */}
            <View style={styles.progressSection}>
              <Text style={styles.sectionTitle}>Votre progression</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${progressPercentage}%` }]} />
              </View>
              <Text style={styles.progressText}>
                {completedCount} / {lessons.length} leçons complétées
              </Text>
            </View>

            {/* Leçons */}
            <Text style={styles.sectionTitle}>Leçons</Text>
            {lessons.map((lesson, index) => (
              <TouchableOpacity
                key={lesson.id}
                style={styles.lessonCard}
                onPress={() =>
                  router.push(`/courses/${classLevel}/${subject}/${lesson.id}` as any)
                }
              >
                <View style={styles.lessonNumber}>
                  <Text style={styles.lessonNumberText}>{index + 1}</Text>
                </View>
                <View style={styles.lessonInfo}>
                  <Text style={styles.lessonTitle}>{lesson.title}</Text>
                  <Text style={styles.lessonDescription} numberOfLines={2}>
                    {lesson.description}
                  </Text>
                  <View style={styles.lessonMeta}>
                    <Ionicons name="time-outline" size={14} color="#666" />
                    <Text style={styles.lessonDuration}>{lesson.duration}</Text>
                    <Ionicons name="list-outline" size={14} color="#666" style={{ marginLeft: 12 }} />
                    <Text style={styles.lessonDuration}>
                      {lesson.objectives.length} objectifs
                    </Text>
                  </View>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#666" />
              </TouchableOpacity>
            ))}
          </>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="book-outline" size={80} color="#E0E0E0" />
            <Text style={styles.emptyTitle}>Aucune leçon disponible</Text>
            <Text style={styles.emptyText}>
              Les leçons pour cette matière seront bientôt ajoutées.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    ...Platform.select({
      web: {
        alignItems: 'center',
      },
    }),
  },
  headerWrapper: {
    ...Platform.select({
      web: {
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
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
        borderBottomWidth: 0,
      },
    }),
  },
  backButton: {
    padding: 5,
  },
  headerTextContainer: {
    alignItems: 'center',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    width: '100%',
    ...Platform.select({
      web: {
        maxWidth: 800,
        alignSelf: 'center',
      },
    }),
  },
  contentContainer: {
    padding: 20,
  },
  progressSection: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4A90E2',
    borderRadius: 5,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  lessonNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  lessonNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  lessonInfo: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  lessonDescription: {
    fontSize: 13,
    color: '#666',
    marginBottom: 6,
  },
  lessonMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lessonDuration: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#999',
    marginTop: 20,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});