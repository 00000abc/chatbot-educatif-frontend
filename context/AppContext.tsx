import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ClassLevelId, UserProgress } from "../types";

interface AppContextType {
  userProgress: UserProgress;
  currentClassLevel: ClassLevelId | null;
  setCurrentClassLevel: (level: ClassLevelId) => void;
  markLessonComplete: (subject: string, lessonId: string) => void;
  isLessonCompleted: (subject: string, lessonId: string) => boolean;
  updateQuizScore: (lessonId: string, score: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentClassLevel, setCurrentClassLevel] = useState<ClassLevelId | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    classLevel: 'cp1',
    completedLessons: {},
    quizScores: {},
  });

  const markLessonComplete = (subject: string, lessonId: string) => {
    setUserProgress((prev) => {
      const completedLessons = { ...prev.completedLessons };
      if (!completedLessons[subject]) {
        completedLessons[subject] = [];
      }
      if (!completedLessons[subject].includes(lessonId)) {
        completedLessons[subject] = [...completedLessons[subject], lessonId];
      }
      return { ...prev, completedLessons };
    });
  };

  const isLessonCompleted = (subject: string, lessonId: string): boolean => {
    return userProgress.completedLessons[subject]?.includes(lessonId) || false;
  };

  const updateQuizScore = (lessonId: string, score: number) => {
    setUserProgress((prev) => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [lessonId]: score,
      },
    }));
  };

  return (
    <AppContext.Provider
      value={{
        userProgress,
        currentClassLevel,
        setCurrentClassLevel,
        markLessonComplete,
        isLessonCompleted,
        updateQuizScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};