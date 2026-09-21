'use client';

import { Trophy, Medal, Award, TrendingUp } from 'lucide-react';

export default function LeaderboardPage() {
  // Mock leaderboard data - in production this would come from backend
  const leaderboard = [
    { rank: 1, username: 'AlexMaster', avatar: '👨‍🎓', score: 15420, accuracy: 94, questionsAnswered: 1250 },
    { rank: 2, username: 'ScienceQueen', avatar: '👩‍🔬', score: 14890, accuracy: 92, questionsAnswered: 1180 },
    { rank: 3, username: 'MathWizard', avatar: '🧙‍♂️', score: 14350, accuracy: 91, questionsAnswered: 1150 },
    { rank: 4, username: 'BioNinja', avatar: '🥷', score: 13780, accuracy: 89, questionsAnswered: 1080 },
    { rank: 5, username: 'ChemExpert', avatar: '⚗️', score: 13240, accuracy: 90, questionsAnswered: 1020 },
    { rank: 6, username: 'PhysicsGenius', avatar: '⚛️', score: 12890, accuracy: 88, questionsAnswered: 980 },
    { rank: 7, username: 'EnglishPro', avatar: '📚', score: 12340, accuracy: 87, questionsAnswered: 940 },
    { rank: 8, username: 'AgriMaster', avatar: '🌾', score: 11890, accuracy: 86, questionsAnswered: 900 },
    { rank: 9, username: 'StudyKing', avatar: '👑', score: 11450, accuracy: 85, questionsAnswered: 870 },
    { rank: 10, username: 'BrainPower', avatar: '🧠', score: 10980, accuracy: 84, questionsAnswered: 850 },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-slate-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-amber-600" />;
    return <Award className="w-5 h-5 text-slate-400" />;
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
    if (rank === 2) return 'bg-gradient-to-r from-slate-300 to-slate-400 text-slate-800';
    if (rank === 3) return 'bg-gradient-to-r from-amber-500 to-amber-600 text-white';
    return 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-block animate-pulse-border">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full">
            <Trophy className="w-12 h-12 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Global Leaderboard
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Compete with learners worldwide and climb to the top!
        </p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* 2nd Place */}
        {leaderboard[1] && (
          <div className="md:order-1 order-2">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border-2 border-slate-300 dark:border-slate-600 text-center">
              <div className="text-6xl mb-3">{leaderboard[1].avatar}</div>
              <Medal className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-1">
                {leaderboard[1].username}
              </h3>
              <p className="text-3xl font-bold text-slate-700 dark:text-slate-300 mb-2">
                {leaderboard[1].score}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {leaderboard[1].accuracy}% accuracy
              </p>
            </div>
          </div>
        )}

        {/* 1st Place */}
        {leaderboard[0] && (
          <div className="md:order-2 order-1">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-2xl border-4 border-yellow-300 text-center relative overflow-hidden transform md:-translate-y-4">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-300/20 to-transparent" />
              <div className="relative z-10">
                <div className="text-7xl mb-3">{leaderboard[0].avatar}</div>
                <Trophy className="w-10 h-10 text-white mx-auto mb-2 animate-pulse" />
                <h3 className="font-bold text-2xl text-white mb-1">
                  {leaderboard[0].username}
                </h3>
                <p className="text-4xl font-bold text-white mb-2">
                  {leaderboard[0].score}
                </p>
                <p className="text-sm text-white/90">
                  {leaderboard[0].accuracy}% accuracy
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 3rd Place */}
        {leaderboard[2] && (
          <div className="md:order-3 order-3">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border-2 border-amber-500 dark:border-amber-600 text-center">
              <div className="text-6xl mb-3">{leaderboard[2].avatar}</div>
              <Medal className="w-8 h-8 text-amber-600 mx-auto mb-2" />
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-1">
                {leaderboard[2].username}
              </h3>
              <p className="text-3xl font-bold text-slate-700 dark:text-slate-300 mb-2">
                {leaderboard[2].score}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {leaderboard[2].accuracy}% accuracy
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Full Leaderboard Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600">
          <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
            <TrendingUp className="w-6 h-6" />
            <span>Top 10 Learners</span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Accuracy
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Questions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {leaderboard.map((entry) => (
                <tr 
                  key={entry.rank}
                  className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      {getRankIcon(entry.rank)}
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${getRankBadge(entry.rank)}`}>
                        #{entry.rank}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{entry.avatar}</span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {entry.username}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {entry.score.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${entry.accuracy}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        {entry.accuracy}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {entry.questionsAnswered.toLocaleString()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 text-center">
        <p className="text-slate-600 dark:text-slate-300">
          <span className="font-semibold">Keep practicing to climb the ranks!</span> Your position updates in real-time as you complete more quizzes.
        </p>
      </div>
    </div>
  );
}
