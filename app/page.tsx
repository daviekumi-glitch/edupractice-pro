'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Target, TrendingUp, Award, BookOpen, Brain } from 'lucide-react';
import { SUBJECTS } from '@/lib/constants';
import { PracticeService } from '@/lib/practiceService';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [stats, setStats] = useState({
    totalQuestions: 0,
    accuracy: 0,
    streak: 0
  });

  useEffect(() => {
    const progress = PracticeService.getProgress();
    const allProgress = Object.values(progress);
    
    const totalQuestions = allProgress.reduce((sum, p) => sum + p.totalQuestions, 0);
    const totalCorrect = allProgress.reduce((sum, p) => sum + p.correctAnswers, 0);
    const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    const maxStreak = Math.max(...allProgress.map(p => p.streak), 0);

    setStats({ totalQuestions, accuracy, streak: maxStreak });
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-12 pb-8">
        <div className="inline-block animate-fadeIn">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-xl">
            <Brain className="w-16 h-16 text-white" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fadeIn">
          Master 6 Subjects with AI
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto animate-fadeIn">
          Practice Biology, Physics, Chemistry, English, Mathematics, and Agriculture 
          with intelligent quizzes, flashcards, and real-time progress tracking
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/subjects"
            className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
          >
            <BookOpen className="w-5 h-5" />
            <span>Start Practicing</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/progress"
            className="flex items-center space-x-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-xl font-semibold border-2 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all hover:scale-105"
          >
            <TrendingUp className="w-5 h-5" />
            <span>View Progress</span>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 card-hover">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
              <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{stats.totalQuestions}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Questions Answered</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 card-hover">
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
              <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{stats.accuracy}%</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Overall Accuracy</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 card-hover">
          <div className="flex items-center space-x-4">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-xl">
              <Zap className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{stats.streak}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Day Streak</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Choose Your Subject
          </h2>
          <Link
            href="/subjects"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subject, index) => {
            const progress = PracticeService.getSubjectProgress(subject.id);
            
            return (
              <Link
                key={subject.id}
                href={`/subjects/${subject.id}`}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${subject.color} p-3 rounded-xl text-3xl`}>
                    {subject.icon}
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {subject.name}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {subject.description}
                </p>

                {progress && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Progress</span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        Level {progress.level}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className={`${subject.color} h-2 rounded-full transition-all`}
                        style={{ width: `${Math.min((progress.experience % 1000) / 10, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {progress.totalQuestions} questions • {progress.accuracy}% accuracy
                    </p>
                  </div>
                )}

                {!progress && (
                  <div className="pt-2">
                    <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium px-3 py-1 rounded-full">
                      Start Learning
                    </span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-8">
          Why Choose EduPractice Pro?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="bg-white dark:bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white">AI-Powered</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Intelligent question generation tailored to your level
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="bg-white dark:bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white">Personalized</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Adaptive learning paths based on your performance
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="bg-white dark:bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white">Track Progress</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Detailed analytics and progress visualization
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="bg-white dark:bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Award className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white">Achievements</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Earn badges and climb the leaderboard
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
