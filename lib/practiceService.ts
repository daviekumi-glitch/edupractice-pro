import { PracticeSession, PracticeMode, UserProgress, Subject } from './types';
import { getRandomQuestions } from './questionBank';

const STORAGE_KEYS = {
  SESSIONS: 'edupractice_sessions',
  PROGRESS: 'edupractice_progress',
  CURRENT_SESSION: 'edupractice_current_session'
};

export class PracticeService {
  static createSession(
    topicId: string,
    subject: Subject,
    mode: PracticeMode,
    questionCount: number
  ): PracticeSession {
    const questions = getRandomQuestions(topicId, questionCount);
    
    const session: PracticeSession = {
      id: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId: 'guest',
      topicId,
      subject,
      mode,
      questions,
      answers: new Array(questions.length).fill(null),
      correctCount: 0,
      totalQuestions: questions.length,
      timeSpent: 0,
      accuracy: 0,
      score: 0,
      completed: false,
      startedAt: new Date().toISOString()
    };

    this.saveCurrentSession(session);
    return session;
  }

  static saveCurrentSession(session: PracticeSession): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.CURRENT_SESSION, JSON.stringify(session));
    }
  }

  static getCurrentSession(): PracticeSession | null {
    if (typeof window === 'undefined') return null;
    const data = localStorage.getItem(STORAGE_KEYS.CURRENT_SESSION);
    return data ? JSON.parse(data) : null;
  }

  static clearCurrentSession(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION);
    }
  }

  static submitAnswer(session: PracticeSession, questionIndex: number, answer: number): PracticeSession {
    const updated = { ...session };
    updated.answers[questionIndex] = answer;
    
    // Calculate results
    updated.correctCount = updated.answers.reduce((count: number, ans, idx) => {
      if (ans === null) return count;
      return ans === updated.questions[idx].correctAnswer ? count + 1 : count;
    }, 0 as number);
    
    updated.accuracy = updated.totalQuestions > 0 
      ? Math.round((updated.correctCount / updated.totalQuestions) * 100) 
      : 0;
    
    updated.score = updated.correctCount * 10;
    
    this.saveCurrentSession(updated);
    return updated;
  }

  static completeSession(session: PracticeSession): PracticeSession {
    const completed: PracticeSession = {
      ...session,
      completed: true,
      completedAt: new Date().toISOString()
    };
    
    this.saveSessionHistory(completed);
    this.updateProgress(completed);
    this.clearCurrentSession();
    
    return completed;
  }

  private static saveSessionHistory(session: PracticeSession): void {
    if (typeof window === 'undefined') return;
    
    const existing = this.getSessionHistory();
    existing.unshift(session);
    
    // Keep only last 50 sessions
    const limited = existing.slice(0, 50);
    localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(limited));
  }

  static getSessionHistory(): PracticeSession[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEYS.SESSIONS);
    return data ? JSON.parse(data) : [];
  }

  private static updateProgress(session: PracticeSession): void {
    if (typeof window === 'undefined') return;
    
    const progress = this.getProgress();
    const subjectProgress = progress[session.subject] || {
      userId: 'guest',
      subject: session.subject,
      topicsCompleted: 0,
      totalQuestions: 0,
      correctAnswers: 0,
      accuracy: 0,
      totalTimeSpent: 0,
      streak: 0,
      lastPracticeDate: '',
      level: 1,
      experience: 0
    };

    subjectProgress.totalQuestions += session.totalQuestions;
    subjectProgress.correctAnswers += session.correctCount;
    subjectProgress.totalTimeSpent += session.timeSpent;
    subjectProgress.accuracy = Math.round(
      (subjectProgress.correctAnswers / subjectProgress.totalQuestions) * 100
    );
    subjectProgress.experience += session.score;
    subjectProgress.level = Math.floor(subjectProgress.experience / 1000) + 1;
    subjectProgress.lastPracticeDate = new Date().toISOString();

    // Update streak
    const lastDate = new Date(subjectProgress.lastPracticeDate);
    const today = new Date();
    const daysDiff = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysDiff === 0) {
      // Same day, keep streak
    } else if (daysDiff === 1) {
      subjectProgress.streak += 1;
    } else {
      subjectProgress.streak = 1;
    }

    progress[session.subject] = subjectProgress;
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  }

  static getProgress(): Record<string, UserProgress> {
    if (typeof window === 'undefined') return {};
    const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return data ? JSON.parse(data) : {};
  }

  static getSubjectProgress(subject: Subject): UserProgress | null {
    const progress = this.getProgress();
    return progress[subject] || null;
  }

  static resetProgress(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEYS.PROGRESS);
      localStorage.removeItem(STORAGE_KEYS.SESSIONS);
      localStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION);
    }
  }
}
