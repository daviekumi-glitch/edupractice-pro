export type Subject = 'biology' | 'physics' | 'chemistry' | 'english' | 'mathematics' | 'agriculture';

export type PracticeMode = 'quiz' | 'flashcards' | 'timed-test' | 'mock-exam';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Topic {
  id: string;
  subject: Subject;
  name: string;
  description: string;
  difficulty: DifficultyLevel;
  questionCount: number;
  icon: string;
}

export interface Question {
  id: string;
  topicId: string;
  subject: Subject;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: DifficultyLevel;
  points: number;
}

export interface PracticeSession {
  id: string;
  userId: string;
  topicId: string;
  subject: Subject;
  mode: PracticeMode;
  questions: Question[];
  answers: (number | null)[];
  correctCount: number;
  totalQuestions: number;
  timeSpent: number;
  accuracy: number;
  score: number;
  completed: boolean;
  startedAt: string;
  completedAt?: string;
}

export interface UserProgress {
  userId: string;
  subject: Subject;
  topicsCompleted: number;
  totalQuestions: number;
  correctAnswers: number;
  accuracy: number;
  totalTimeSpent: number;
  streak: number;
  lastPracticeDate: string;
  level: number;
  experience: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  avatar?: string;
  score: number;
  accuracy: number;
  questionsAnswered: number;
  subject?: Subject;
}

export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
  createdAt: string;
  nvidiaApiKey?: string;
  preferredModel?: string;
}
