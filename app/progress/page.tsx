'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, Target, Zap, Award, Trophy } from 'lucide-react';
import { SUBJECTS } from '@/lib/constants';
import { PracticeService } from '@/lib/practiceService';
import { UserProgress, Subject, PracticeSession } from '@/lib/types';

export default function ProgressPage() {
  const [progress, setProgress] = useState<Record<Subject, UserProgress>>(() => 
    PracticeService.getProgress()
  );
  const [recentSessions, setRecentSessions] = useState<PracticeSession[]>(() => 
    PracticeService.getSessionHistory().slice(0, 5)
  );

  const allProgress = Object.values(progress);
  const totalQuestions = allProgress.reduce((sum, p) => sum + p.totalQuestions, 0);
  const totalCorrect = allProgress.reduce((sum, p) => sum + p.correctAnswers, 0);
  const overallAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const maxStreak = Math.max(...allProgress.map(p => p.streak), 0);
  const totalXP = allProgress.reduce((sum, p) => sum + p.experience, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Your Progress
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Track your learning journey across all subjects
        </p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
              <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{totalQuestions}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Questions Answered</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
              <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{overallAccuracy}%</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Overall Accuracy</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-4">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-xl">
              <Zap className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{maxStreak}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Day Streak</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
              <Trophy className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{totalXP}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Total XP</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Progress */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Subject Progress
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subject) => {
            const subjectProgress = progress[subject.id];
            
            if (!subjectProgress) {
              return (
                <Link
                  key={subject.id}
                  href={`/subjects/${subject.id}`}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 card-hover"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`${subject.color} p-3 rounded-xl text-3xl`}>
                      {subject.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">{subject.name}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">No progress yet</p>
                    </div>
                  </div>
                  <button className="w-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 py-2 rounded-lg font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                    Start Learning
                  </button>
                </Link>
              );
            }

            return (
              <Link
                key={subject.id}
                href={`/subjects/${subject.id}`}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`${subject.color} p-3 rounded-xl text-3xl`}>
                      {subject.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">{subject.name}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Level {subjectProgress.level}
                      </p>
                    </div>
                  </div>
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Progress</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {subjectProgress.experience % 1000} / 1000 XP
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className={`${subject.color} h-2 rounded-full transition-all`}
                      style={{ width: `${(subjectProgress.experience % 1000) / 10}%` }}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="text-center">
                      <p className="text-lg font-bold text-slate-900 dark:text-white">
                        {subjectProgress.totalQuestions}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Questions</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-green-600">{subjectProgress.accuracy}%</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Accuracy</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-orange-600">{subjectProgress.streak}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Streak</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Sessions */}
      {recentSessions.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Recent Practice Sessions
          </h2>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 dark:bg-slate-700/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Mode
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Score
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Accuracy
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {recentSessions.map((session) => {
                    const subject = SUBJECTS.find(s => s.id === session.subject);
                    return (
                      <tr key={session.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{subject?.icon}</span>
                            <span className="font-medium text-slate-900 dark:text-white">
                              {subject?.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-slate-600 dark:text-slate-300 capitalize">
                            {session.mode}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">
                            {session.score} pts
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`text-sm font-semibold ${
                            session.accuracy >= 80 ? 'text-green-600' :
                            session.accuracy >= 60 ? 'text-yellow-600' :
                            'text-red-600'
                          }`}>
                            {session.accuracy}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                          {new Date(session.completedAt || session.startedAt).toLocaleDateString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
