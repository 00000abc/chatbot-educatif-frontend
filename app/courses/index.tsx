import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
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

interface ClassLevel {
  id: string;
  name: string;
  description: string;
  color: string;
}

const classLevels: ClassLevel[] = [
  // Primaire
  { id: 'cp1', name: 'CP1', description: 'Cours préparatoire 1ère année', color: '#FF6B6B' },
  { id: 'cp2', name: 'CP2', description: 'Cours préparatoire 2ème année', color: '#FFA06B' },
  { id: 'ce1', name: 'CE1', description: 'Cours élémentaire 1ère année', color: '#FFD93D' },
  { id: 'ce2', name: 'CE2', description: 'Cours élémentaire 2ème année', color: '#6BCF7F' },
  { id: 'cm1', name: 'CM1', description: 'Cours moyen 1ère année', color: '#4A90E2' },
  { id: 'cm2', name: 'CM2', description: 'Cours moyen 2ème année', color: '#9D6BCF' },
  // Collège
  { id: '6eme', name: '6ème', description: 'Sixième - Collège', color: '#5E9BFF' },
  { id: '5eme', name: '5ème', description: 'Cinquième - Collège', color: '#3F7BBD' },
  { id: '4eme', name: '4ème', description: 'Quatrième - Collège', color: '#E67E22' },
  { id: '3eme', name: '3ème', description: 'Troisième - Collège', color: '#D35400' },
  // Lycée
  { id: 'seconde', name: 'Seconde', description: 'Seconde - Lycée', color: '#27AE60' },
  { id: 'premiere', name: 'Première', description: 'Première - Lycée', color: '#16A085' },
  { id: 'terminale', name: 'Terminale', description: 'Terminale - Lycée', color: '#8E44AD' },
];

export default function CoursesScreen() {
  const router = useRouter();

  const renderClassLevel = ({ item }: { item: ClassLevel }) => (
    <TouchableOpacity
      style={[styles.classCard, { borderLeftColor: item.color }]}
      onPress={() => router.push(`/courses/${item.id}`)}
    >
      <View style={styles.classCardContent}>
        <Text style={styles.className}>{item.name}</Text>
        <Text style={styles.classDescription}>{item.description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#666" />
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
          <Text style={styles.headerTitle}>Cours</Text>
          <View style={{ width: 24 }} />
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Choisissez votre niveau</Text>
        <FlatList
          data={classLevels}
          renderItem={renderClassLevel}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    ...Platform.select({
      web: {
        alignItems: 'center', // centre tout horizontalement
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
        borderBottomWidth: 0, // la bordure est sur le wrapper
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
        maxWidth: 800,
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
    ...Platform.select({
      web: {
        width: '100%',
      },
    }),
  },
  classCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    borderLeftWidth: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    ...Platform.select({
      web: {
        maxWidth: 800, // optionnel, mais déjà limité par le parent
      },
    }),
  },
  classCardContent: {
    flex: 1,
  },
  className: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  classDescription: {
    fontSize: 14,
    color: '#666',
  },
});