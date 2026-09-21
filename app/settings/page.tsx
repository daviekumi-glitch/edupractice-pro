'use client';

import { useState } from 'react';
import { Settings as SettingsIcon, Key, Sparkles, RotateCcw, AlertTriangle } from 'lucide-react';
import { PracticeService } from '@/lib/practiceService';

export default function SettingsPage() {
  const [apiKey, setApiKey] = useState('');
  const [selectedModel, setSelectedModel] = useState('meta/llama-3.1-70b-instruct');
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const availableModels = [
    { id: 'meta/llama-3.1-70b-instruct', name: 'Llama 3.1 70B Instruct (Recommended)', description: 'Best for educational content' },
    { id: 'meta/llama-3.1-405b-instruct', name: 'Llama 3.1 405B Instruct', description: 'Most capable model' },
    { id: 'mistralai/mixtral-8x7b-instruct-v0.1', name: 'Mixtral 8x7B', description: 'Fast and efficient' },
    { id: 'microsoft/phi-3-medium-128k-instruct', name: 'Phi-3 Medium', description: 'Compact and powerful' },
  ];

  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('nvidia_api_key', apiKey);
      localStorage.setItem('nvidia_model', selectedModel);
      alert('API settings saved successfully!');
    }
  };

  const handleResetProgress = () => {
    if (showResetConfirm) {
      PracticeService.resetProgress();
      setShowResetConfirm(false);
      alert('All progress has been reset!');
      window.location.reload();
    } else {
      setShowResetConfirm(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-block bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl">
          <SettingsIcon className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Settings
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Configure your learning experience
        </p>
      </div>

      {/* AI Settings */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-3 mb-6">
          <Sparkles className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            AI Question Generation
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Optional:</strong> Connect your NVIDIA API key to enable AI-powered question generation. 
              Get your free API key at <a href="https://build.nvidia.com/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">build.nvidia.com</a>
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              <div className="flex items-center space-x-2">
                <Key className="w-4 h-4" />
                <span>NVIDIA API Key</span>
              </div>
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="nvapi-xxxxxxxxxxxxxxxxxxxxx"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400"
            />
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Your API key is stored locally and never sent to our servers
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Select AI Model
            </label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-white"
            >
              {availableModels.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name}
                </option>
              ))}
            </select>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {availableModels.find(m => m.id === selectedModel)?.description}
            </p>
          </div>

          <button
            onClick={handleSaveApiKey}
            disabled={!apiKey.trim()}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save API Settings
          </button>
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Account & Data
        </h2>

        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                Storage
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                All your progress is saved locally in your browser. No account required!
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                Privacy
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Your data never leaves your device. All processing happens locally.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-red-200 dark:border-red-800">
        <div className="flex items-center space-x-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Danger Zone
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
              Reset All Progress
            </h3>
            <p className="text-sm text-red-700 dark:text-red-300 mb-4">
              This will permanently delete all your progress, session history, and statistics. This action cannot be undone!
            </p>
            
            {!showResetConfirm ? (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="flex items-center space-x-2 bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset Progress</span>
              </button>
            ) : (
              <div className="space-y-3">
                <p className="font-semibold text-red-800 dark:text-red-200">
                  Are you absolutely sure? This cannot be undone!
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={handleResetProgress}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Yes, Reset Everything
                  </button>
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-2 rounded-lg font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 text-center">
        <h3 className="font-bold text-slate-900 dark:text-white mb-2">
          EduPractice Pro v1.0.0
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Master 6 subjects with AI-powered learning. Built with Next.js 15 & Tailwind CSS.
        </p>
      </div>
    </div>
  );
}
