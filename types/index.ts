// Types pour les messages du chat
export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

// Types pour les niveaux de classe
export type ClassLevelId = 'cp1' | 'cp2' | 'ce1' | 'ce2' | 'cm1' | 'cm2';

export interface ClassLevel {
  id: ClassLevelId;
  name: string;
  description: string;
  color: string;
}

// Types pour les matières
export type SubjectId = 'francais' | 'mathematiques' | 'sciences' | 'histoire' | 'geographie' | 'emc';

export interface Subject {
  id: SubjectId;
  name: string;
  icon: string;
  color: string;
  lessonCount: number;
}

// Types pour les leçons
export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  isCompleted: boolean;
  content?: LessonContent;
}

export interface LessonContent {
  objectives: string[];
  sections: LessonSection[];
  quiz?: Quiz;
}

export interface LessonSection {
  type: 'text' | 'example' | 'exercise';
  title?: string;
  content: string;
}

// Types pour les quiz
export interface Quiz {
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

// Types pour la progression de l'utilisateur
export interface UserProgress {
  classLevel: ClassLevelId;
  completedLessons: {
    [subject: string]: string[]; // subject -> lesson IDs
  };
  quizScores: {
    [lessonId: string]: number;
  };
}

// Types pour l'API IA
export interface AIRequest {
  message: string;
  conversationHistory?: Message[];
  context?: {
    classLevel?: ClassLevelId;
    subject?: SubjectId;
    currentLesson?: string;
  };
}

export interface AIResponse {
  response: string;
  suggestions?: string[];
  relatedLessons?: string[];
}