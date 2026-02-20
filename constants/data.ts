import { ClassLevel, Subject } from '../types';

// Niveaux de classe disponibles
export const CLASS_LEVELS: ClassLevel[] = [
  { 
    id: 'cp1', 
    name: 'CP1', 
    description: 'Cours préparatoire 1ère année', 
    color: '#FF6B6B' 
  },
  { 
    id: 'cp2', 
    name: 'CP2', 
    description: 'Cours préparatoire 2ème année', 
    color: '#FFA06B' 
  },
  { 
    id: 'ce1', 
    name: 'CE1', 
    description: 'Cours élémentaire 1ère année', 
    color: '#FFD93D' 
  },
  { 
    id: 'ce2', 
    name: 'CE2', 
    description: 'Cours élémentaire 2ème année', 
    color: '#6BCF7F' 
  },
  { 
    id: 'cm1', 
    name: 'CM1', 
    description: 'Cours moyen 1ère année', 
    color: '#4A90E2' 
  },
  { 
    id: 'cm2', 
    name: 'CM2', 
    description: 'Cours moyen 2ème année', 
    color: '#9D6BCF' 
  },
];

// Matières disponibles
export const SUBJECTS: Subject[] = [
  { 
    id: 'francais', 
    name: 'Français', 
    icon: 'book', 
    color: '#FF6B6B', 
    lessonCount: 12 
  },
  { 
    id: 'mathematiques', 
    name: 'Mathématiques', 
    icon: 'calculator', 
    color: '#4A90E2', 
    lessonCount: 15 
  },
  { 
    id: 'sciences', 
    name: 'Sciences', 
    icon: 'flask', 
    color: '#6BCF7F', 
    lessonCount: 10 
  },
  { 
    id: 'histoire', 
    name: 'Histoire', 
    icon: 'time', 
    color: '#FFA06B', 
    lessonCount: 8 
  },
  { 
    id: 'geographie', 
    name: 'Géographie', 
    icon: 'map', 
    color: '#FFD93D', 
    lessonCount: 8 
  },
  { 
    id: 'emc', 
    name: 'EMC', 
    icon: 'people', 
    color: '#9D6BCF', 
    lessonCount: 6 
  },
];

// Messages d'accueil du chatbot selon le niveau
export const WELCOME_MESSAGES = {
  cp1: "Bonjour ! Je suis là pour t'aider avec tes devoirs de CP1. Qu'aimerais-tu apprendre aujourd'hui ?",
  cp2: "Salut ! Prêt à apprendre de nouvelles choses en CP2 ? Comment puis-je t'aider ?",
  ce1: "Bonjour ! Je suis ton assistant pour le CE1. Pose-moi tes questions !",
  ce2: "Coucou ! Bienvenue en CE2. Comment puis-je t'aider dans tes études ?",
  cm1: "Bonjour ! Je suis là pour t'accompagner en CM1. Quelle matière veux-tu travailler ?",
  cm2: "Salut ! Dernière année de primaire, bravo ! Comment puis-je t'aider en CM2 ?",
  default: "Bonjour ! Je suis ton assistant éducatif. Comment puis-je t'aider aujourd'hui ?",
};

// Suggestions de questions fréquentes
export const SUGGESTED_QUESTIONS = [
  "Explique-moi les fractions",
  "Comment conjuguer le verbe être ?",
  "C'est quoi la photosynthèse ?",
  "Aide-moi avec mes devoirs",
  "Raconte-moi l'histoire de France",
  "Comment calculer une aire ?",
];

// Configuration de l'API (à remplir avec vos vraies clés)
export const API_CONFIG = {
  AI_API_URL: process.env.EXPO_PUBLIC_AI_API_URL || '',
  AI_API_KEY: process.env.EXPO_PUBLIC_AI_API_KEY || '',
};

// Couleurs du thème
export const COLORS = {
  primary: '#4A90E2',
  secondary: '#6BCF7F',
  accent: '#FF6B6B',
  background: '#FFFFFF',
  backgroundSecondary: '#F8F9FA',
  text: '#333333',
  textSecondary: '#666666',
  border: '#E0E0E0',
  success: '#6BCF7F',
  warning: '#FFD93D',
  error: '#FF6B6B',
};