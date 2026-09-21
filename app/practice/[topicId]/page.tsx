'use client';

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, Clock, Trophy, ArrowRight } from 'lucide-react';
import { TOPICS } from '@/lib/constants';
import { PracticeService } from '@/lib/practiceService';
import { PracticeSession } from '@/lib/types';
import { useRouter } from 'next/navigation';

export default function PracticePage({ 
  params 
}: { 
  params: Promise<{ topicId: string }> 
}) {
  const router = useRouter();
  const { topicId } = use(params);
  
  const [session, setSession] = useState<PracticeSession | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  // Find topic
  const topic = Object.values(TOPICS)
    .flat()
    .find(t => t.id === topicId);

  // Initialize session
  useEffect(() => {
    if (!topic) return;

    const existingSession = PracticeService.getCurrentSession();
    if (existingSession && existingSession.topicId === topicId) {
      setSession(existingSession);
      // Find first unanswered question
      const firstUnanswered = existingSession.answers.findIndex(a => a === null);
      setCurrentQuestionIndex(firstUnanswered >= 0 ? firstUnanswered : 0);
    } else {
      const newSession = PracticeService.createSession(topicId, topic.subject, 'quiz', 10);
      setSession(newSession);
    }
  }, [topicId, topic]);

  // Timer
  useEffect(() => {
    if (!session || showCompletion) return;
    
    const interval = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [session, showCompletion]);

  if (!topic) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Topic not found</h1>
        <Link href="/subjects" className="text-blue-600 hover:underline mt-4 inline-block">
          Back to Subjects
        </Link>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600 dark:text-slate-400">Loading...</p>
      </div>
    );
  }

  const currentQuestion = session.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === session.questions.length - 1;
  const progress = ((currentQuestionIndex + 1) / session.questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const updatedSession = PracticeService.submitAnswer(session, currentQuestionIndex, selectedAnswer);
    setSession(updatedSession);
    setShowResult(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const completed = PracticeService.completeSession({
        ...session,
        timeSpent
      });
      setSession(completed);
      setShowCompletion(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Completion Screen
  if (showCompletion) {
    return (
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-6 py-8">
          <div className="inline-block animate-pulse-border">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-full">
              <Trophy className="w-16 h-16 text-white" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Quiz Complete!
          </h1>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">{session.score}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Points</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">{session.accuracy}%</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Accuracy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">{session.correctCount}/{session.totalQuestions}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Correct</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-600">{formatTime(timeSpent)}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Time</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/practice/${topicId}`}
              onClick={() => window.location.reload()}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all"
            >
              <span>Practice Again</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              href={`/subjects/${topic.subject}`}
              className="flex items-center space-x-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-8 py-3 rounded-xl font-semibold border-2 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
            >
              <span>Back to {topic.subject}</span>
            </Link>

            <Link
              href="/progress"
              className="flex items-center space-x-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-8 py-3 rounded-xl font-semibold border-2 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
            >
              <span>View Progress</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Practice Screen
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link
          href={`/subjects/${topic.subject}`}
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit</span>
        </Link>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
            <Clock className="w-4 h-4" />
            <span className="font-mono">{formatTime(timeSpent)}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
          <span>{topic.name}</span>
          <span>Question {currentQuestionIndex + 1} of {session.questions.length}</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
        <div className="mb-6">
          <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full mb-4">
            {currentQuestion.difficulty} • {currentQuestion.points} points
          </span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            const showCorrect = showResult && isCorrect;
            const showWrong = showResult && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  showCorrect
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-300'
                    : showWrong
                    ? 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-300'
                    : isSelected
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
                    : 'bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 hover:border-blue-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {showCorrect && <Check className="w-5 h-5 text-green-600" />}
                  {showWrong && <X className="w-5 h-5 text-red-600" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-600">
            <p className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
              Explanation:
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Action Button */}
        <div className="mt-6">
          {!showResult ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2"
            >
              <span>{isLastQuestion ? 'Complete Quiz' : 'Next Question'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
