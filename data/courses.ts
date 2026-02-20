import { Ionicons } from '@expo/vector-icons';

export interface Subject {
  id: string;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  lessonCount: number;
}

// Dictionnaire des matières par niveau
export const subjectsByLevel: Record<string, Subject[]> = {
  // Primaire (exemple pour CP1, on peut décliner pour chaque niveau)
  cp1: [
    { id: 'francais', name: 'Français', icon: 'book', color: '#FF6B6B', lessonCount: 4 },
    { id: 'mathematiques', name: 'Mathématiques', icon: 'calculator', color: '#4A90E2', lessonCount: 4 },
    { id: 'sciences', name: 'Sciences', icon: 'flask', color: '#6BCF7F', lessonCount: 2 },
  ],
  // On peut copier pour les autres niveaux primaires, ou utiliser une base commune
  cp2: [
    { id: 'francais', name: 'Français', icon: 'book', color: '#FF6B6B', lessonCount: 4 },
    { id: 'mathematiques', name: 'Mathématiques', icon: 'calculator', color: '#4A90E2', lessonCount: 4 },
    { id: 'sciences', name: 'Sciences', icon: 'flask', color: '#6BCF7F', lessonCount: 0 },
  ], // à remplir
  ce1: [
    { id: 'francais', name: 'Français', icon: 'book', color: '#FF6B6B', lessonCount: 4 },
    { id: 'mathematiques', name: 'Mathématiques', icon: 'calculator', color: '#4A90E2', lessonCount: 4 },
    { id: 'sciences', name: 'Sciences', icon: 'flask', color: '#6BCF7F', lessonCount: 2 },
  ],

  ce2: [
    { id: 'francais', name: 'Français', icon: 'book', color: '#FF6B6B', lessonCount: 4 },
    { id: 'mathematiques', name: 'Mathématiques', icon: 'calculator', color: '#4A90E2', lessonCount: 4 },
    { id: 'sciences', name: 'Sciences', icon: 'flask', color: '#6BCF7F', lessonCount: 2 },
  ],

  cm1: [
    { id: 'francais', name: 'Français', icon: 'book', color: '#FF6B6B', lessonCount: 4 },
    { id: 'mathematiques', name: 'Mathématiques', icon: 'calculator', color: '#4A90E2', lessonCount: 1 },
    { id: 'sciences', name: 'Sciences', icon: 'flask', color: '#6BCF7F', lessonCount: 0 },
  ],

  cm2: [
    { id: 'francais', name: 'Français', icon: 'book', color: '#FF6B6B', lessonCount: 3 },
    { id: 'mathematiques', name: 'Mathématiques', icon: 'calculator', color: '#4A90E2', lessonCount: 4 },
    { id: 'sciences', name: 'Sciences', icon: 'flask', color: '#6BCF7F', lessonCount: 3 },
  ],
  // Collège
  '6eme': [
    { id: 'francais', name: 'Français', icon: 'book', color: '#FF6B6B', lessonCount: 4 },
    { id: 'mathematiques', name: 'Mathématiques', icon: 'calculator', color: '#4A90E2', lessonCount: 4 },
    { id: 'svt', name: 'SVT', icon: 'leaf', color: '#6BCF7F', lessonCount: 2 },
    { id: 'physique_chimie', name: 'Physique Chimie', icon: 'flask', color: '#8E44AD', lessonCount: 2 },
  ],

  '5eme': [
    { id: 'francais', name: 'Français', icon: 'book', color: '#FF6B6B', lessonCount: 4 },
    { id: 'mathematiques', name: 'Mathématiques', icon: 'calculator', color: '#4A90E2', lessonCount: 4 },
    { id: 'svt', name: 'SVT', icon: 'leaf', color: '#6BCF7F', lessonCount: 0 },
    { id: 'physique_chimie', name: 'Physique Chimie', icon: 'flask', color: '#8E44AD', lessonCount: 0 },
  ],

  '4eme': [
    { id: 'francais', name: 'Français', icon: 'book', color: '#FF6B6B', lessonCount: 4 },
    { id: 'mathematiques', name: 'Mathématiques', icon: 'calculator', color: '#4A90E2', lessonCount: 4 },
    { id: 'svt', name: 'SVT', icon: 'leaf', color: '#6BCF7F', lessonCount: 2 },
    { id: 'physique_chimie', name: 'Physique Chimie', icon: 'flask', color: '#8E44AD', lessonCount: 2 },
  ],

  '3eme': [
    { id: 'francais', name: 'Français', icon: 'book', color: '#FF6B6B', lessonCount: 4 },
    { id: 'mathematiques', name: 'Mathématiques', icon: 'calculator', color: '#4A90E2', lessonCount: 4 },
    { id: 'svt', name: 'SVT', icon: 'leaf', color: '#6BCF7F', lessonCount: 2 },
    { id: 'physique_chimie', name: 'Physique Chimie', icon: 'flask', color: '#8E44AD', lessonCount: 2 },
  ],
  // Lycée
  seconde: [
    { id: 'francais', name: 'Français', icon: 'book', color: '#FF6B6B', lessonCount: 4 },
    { id: 'mathematiques', name: 'Mathématiques', icon: 'calculator', color: '#4A90E2', lessonCount: 4 },
    { id: 'physique', name: 'Physique-Chimie', icon: 'flask', color: '#27AE60', lessonCount: 2 },
    { id: 'svt', name: 'SVT', icon: 'leaf', color: '#6BCF7F', lessonCount: 2 },
    { id: 'anglais', name: 'Anglais', icon: 'language', color: '#5E9BFF', lessonCount: 0 },
    { id: 'philosophie', name: 'Philosophie', icon: 'chatbubbles', color: '#8E44AD', lessonCount: 0 },
  ],

  premiere: [
    { id: 'francais', name: 'Français', icon: 'book', color: '#FF6B6B', lessonCount: 0 },
    { id: 'mathematiques', name: 'Mathématiques', icon: 'calculator', color: '#4A90E2', lessonCount: 4 },
    { id: 'physique', name: 'Physique-Chimie', icon: 'flask', color: '#27AE60', lessonCount: 2 },
    { id: 'svt', name: 'SVT', icon: 'leaf', color: '#6BCF7F', lessonCount: 0 },
    { id: 'anglais', name: 'Anglais', icon: 'language', color: '#5E9BFF', lessonCount: 0 },
    { id: 'philosophie', name: 'Philosophie', icon: 'chatbubbles', color: '#8E44AD', lessonCount: 0 },
  ],

  terminale: [
    { id: 'francais', name: 'Français', icon: 'book', color: '#FF6B6B', lessonCount: 0 },
    { id: 'mathematiques', name: 'Mathématiques', icon: 'calculator', color: '#4A90E2', lessonCount: 3 },
    { id: 'physique', name: 'Physique-Chimie', icon: 'flask', color: '#27AE60', lessonCount: 0 },
    { id: 'svt', name: 'SVT', icon: 'leaf', color: '#6BCF7F', lessonCount: 0 },
    { id: 'anglais', name: 'Anglais', icon: 'language', color: '#5E9BFF', lessonCount: 0 },
    { id: 'philosophie', name: 'Philosophie', icon: 'chatbubbles', color: '#8E44AD', lessonCount: 0 },
  ],
  // Ajoute les autres niveaux selon les besoins
};

// Matières par défaut si le niveau n'est pas trouvé
export const defaultSubjects: Subject[] = [
  { id: 'francais', name: 'Français', icon: 'book', color: '#FF6B6B', lessonCount: 10 },
  { id: 'mathematiques', name: 'Mathématiques', icon: 'calculator', color: '#4A90E2', lessonCount: 10 },
  { id: 'sciences', name: 'Sciences', icon: 'flask', color: '#6BCF7F', lessonCount: 8 },
];