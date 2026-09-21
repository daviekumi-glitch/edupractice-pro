'use client';

import Link from 'next/link';
import { SUBJECTS, TOPICS } from '@/lib/constants';
import { ArrowRight, BookOpen, Award } from 'lucide-react';
import { PracticeService } from '@/lib/practiceService';

export default function SubjectsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Choose Your Subject
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Select a subject to explore topics and start practicing
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SUBJECTS.map((subject) => {
          const topics = TOPICS[subject.id];
          const progress = PracticeService.getSubjectProgress(subject.id);
          const totalQuestions = topics.reduce((sum, topic) => sum + topic.questionCount, 0);

          return (
            <Link
              key={subject.id}
              href={`/subjects/${subject.id}`}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 card-hover"
            >
              {/* Header */}
              <div className={`${subject.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 text-8xl opacity-10">
                  {subject.icon}
                </div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{subject.icon}</div>
                  <h2 className="text-2xl font-bold mb-2">{subject.name}</h2>
                  <p className="text-white/90 text-sm">{subject.description}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                    <BookOpen className="w-4 h-4" />
                    <span>{topics.length} Topics</span>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    {totalQuestions} Questions
                  </div>
                </div>

                {progress ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Your Progress</span>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="font-semibold text-slate-900 dark:text-white">
                          Level {progress.level}
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className={`${subject.color} h-2 rounded-full transition-all`}
                        style={{ 
                          width: `${Math.min((progress.experience % 1000) / 10, 100)}%` 
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>{progress.totalQuestions} completed</span>
                      <span>{progress.accuracy}% accuracy</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
                    <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                      Start practicing to track progress
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    View Topics
                  </span>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
