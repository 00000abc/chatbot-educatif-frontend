import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { subjectsByLevel, defaultSubjects, Subject } from '../../../data/courses';

export default function ClassLevelScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const classLevelId = params.id as string; // ex: 'cp1', '6eme', 'seconde'
  const classLevelDisplay = classLevelId?.toUpperCase() || '';

  // Récupérer les matières du niveau, ou utiliser les matières par défaut
  const subjects: Subject[] = subjectsByLevel[classLevelId] || defaultSubjects;

  const renderSubject = ({ item }: { item: Subject }) => (
    <TouchableOpacity
      style={styles.subjectCard}
      onPress={() => router.push(`/courses/${classLevelId}/${item.id}` as any)}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <Ionicons name={item.icon} size={30} color="#FFFFFF" />
      </View>
      <View style={styles.subjectInfo}>
        <Text style={styles.subjectName}>{item.name}</Text>
        <Text style={styles.lessonCount}>{item.lessonCount} leçons</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#666" style={styles.chevron} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{classLevelDisplay}</Text>
          <View style={{ width: 24 }} />
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Matières disponibles</Text>
        <FlatList
          data={subjects}
          renderItem={renderSubject}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          numColumns={Platform.OS === 'web' ? 3 : 2}
          columnWrapperStyle={Platform.OS === 'web' ? styles.rowWeb : styles.row}
          showsVerticalScrollIndicator={false}
        />
      </View>
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
        maxWidth: 1000,
        width: '100%',
        borderBottomWidth: 0,
      },
    }),
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    ...Platform.select({
      web: {
        maxWidth: 1000,
        width: '100%',
        alignSelf: 'center',
      },
    }),
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between', // pour 2 colonnes sur mobile
  },
  rowWeb: {
    justifyContent: 'flex-start', // aligne les cartes à gauche
    // L'espacement est géré par les marges des cartes
  },
  subjectCard: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 15,
    marginHorizontal: 5, // espace horizontal commun (mobile et web)
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    minHeight: 150,
    ...Platform.select({
      web: {
        marginHorizontal: 8, // un peu plus d'espace sur web
        // Pas de largeur fixe : FlatList avec numColumns s'en charge
        maxWidth: 300, // optionnel : limite la taille max
      },
    }),
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  subjectInfo: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  subjectName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  lessonCount: {
    fontSize: 12,
    color: '#666',
  },
  chevron: {
    ...Platform.select({
      web: { display: 'none' }, // caché sur web (design épuré)
    }),
  },
});