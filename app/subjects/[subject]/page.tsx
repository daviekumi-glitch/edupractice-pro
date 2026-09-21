'use client';

import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Play, Award, TrendingUp } from 'lucide-react';
import { SUBJECTS, TOPICS, PRACTICE_MODES } from '@/lib/constants';
import { Subject } from '@/lib/types';
import { PracticeService } from '@/lib/practiceService';

export default function SubjectDetailPage({ 
  params 
}: { 
  params: Promise<{ subject: string }> 
}) {
  const { subject: subjectId } = use(params);
  
  const subject = SUBJECTS.find(s => s.id === subjectId);
  const topics = TOPICS[subjectId as Subject];
  const progress = subject ? PracticeService.getSubjectProgress(subject.id) : null;

  if (!subject || !topics) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Subject not found
        </h1>
        <Link href="/subjects" className="text-blue-600 hover:underline mt-4 inline-block">
          Back to Subjects
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Link
          href="/subjects"
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Subjects</span>
        </Link>

        <div className={`${subject.color} rounded-2xl p-8 text-white relative overflow-hidden`}>
          <div className="absolute top-0 right-0 text-9xl opacity-10">
            {subject.icon}
          </div>
          <div className="relative z-10">
            <div className="text-6xl mb-4">{subject.icon}</div>
            <h1 className="text-4xl font-bold mb-2">{subject.name}</h1>
            <p className="text-white/90 text-lg">{subject.description}</p>
            
            {progress && (
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                  <p className="text-white/80 text-sm">Level</p>
                  <p className="text-2xl font-bold">{progress.level}</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                  <p className="text-white/80 text-sm">Questions</p>
                  <p className="text-2xl font-bold">{progress.totalQuestions}</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                  <p className="text-white/80 text-sm">Accuracy</p>
                  <p className="text-2xl font-bold">{progress.accuracy}%</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                  <p className="text-white/80 text-sm">Streak</p>
                  <p className="text-2xl font-bold">{progress.streak} days</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Topics ({topics.length})
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/practice/${topic.id}`}
              className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{topic.icon}</div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  topic.difficulty === 'beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                  topic.difficulty === 'intermediate' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                  topic.difficulty === 'advanced' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                  'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                }`}>
                  {topic.difficulty}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {topic.name}
              </h3>
              
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {topic.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {topic.questionCount} questions
                </span>
                <Play className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Practice Modes */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Practice Modes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRACTICE_MODES.map((mode) => (
            <div
              key={mode.id}
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600"
            >
              <div className="text-3xl mb-3">{mode.icon}</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                {mode.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {mode.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
