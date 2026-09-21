'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Zap, Target, TrendingUp, Award, BookOpen, Brain,
  Sparkles, Trophy, Clock, Users, CheckCircle, Star
} from 'lucide-react';
import { useEffect, useState } from 'react';

const subjects = [
  { name: 'Biology', icon: '🧬', color: 'from-green-500 to-emerald-600', questions: 500 },
  { name: 'Physics', icon: '⚛️', color: 'from-blue-500 to-cyan-600', questions: 450 },
  { name: 'Chemistry', icon: '⚗️', color: 'from-purple-500 to-pink-600', questions: 480 },
  { name: 'Mathematics', icon: '📐', color: 'from-indigo-500 to-blue-600', questions: 520 },
  { name: 'English', icon: '📚', color: 'from-orange-500 to-red-600', questions: 400 },
  { name: 'Agriculture', icon: '🌾', color: 'from-lime-500 to-green-600', questions: 350 },
];

const features = [
  { icon: Brain, title: 'AI-Powered Learning', desc: 'Adaptive questions based on your performance' },
  { icon: Target, title: 'Personalized Goals', desc: 'Set and track your academic targets' },
  { icon: TrendingUp, title: 'Progress Analytics', desc: 'Detailed insights into your improvement' },
  { icon: Trophy, title: 'Gamification', desc: 'Earn badges and climb the leaderboard' },
];

const stats = [
  { value: '10K+', label: 'Active Students', icon: Users },
  { value: '2,700+', label: 'Practice Questions', icon: BookOpen },
  { value: '95%', label: 'Success Rate', icon: CheckCircle },
  { value: '4.9/5', label: 'Student Rating', icon: Star },
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-radial bg-grid-pattern py-20 md:py-32">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Premium Learning Platform</span>
              </motion.div>
              
              <h1 className="text-display font-bold leading-tight">
                Master Your{' '}
                <span className="gradient-text">Academic Goals</span>
                {' '}with AI-Powered Practice
              </h1>
              
              <p className="text-body text-text-secondary max-w-xl">
                Practice thousands of questions across Biology, Physics, Chemistry, Mathematics, 
                English, and Agriculture. Track your progress, compete with peers, and achieve excellence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/subjects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Start Practicing
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                
                <Link href="/progress">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary"
                  >
                    View Demo
                    <Zap className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Animated Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative hidden md:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {features.slice(0, 4).map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="card-glass p-6 space-y-3"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-text-primary">{feature.title}</h3>
                      <p className="text-sm text-text-muted">{feature.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 right-20 w-20 h-20 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"
        />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="card-premium text-center space-y-3"
                >
                  <Icon className="w-8 h-8 mx-auto text-primary" />
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20">
        <div className="container-custom space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-heading gradient-text">Explore All Subjects</h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              Choose from our comprehensive question bank covering 6 major subjects
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <Link href={`/subjects/${subject.name.toLowerCase()}`}>
                  <div className="card-glass group cursor-pointer overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${subject.color}`} />
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-4xl">{subject.icon}</span>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          className="w-10 h-10 bg-surface-light rounded-full flex items-center justify-center"
                        >
                          <ArrowRight className="w-5 h-5 text-primary" />
                        </motion.div>
                      </div>
                      <h3 className="text-xl font-bold text-text-primary">{subject.name}</h3>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-text-muted">{subject.questions}+ Questions</span>
                        <span className="badge badge-primary">Start Practice</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card-glass max-w-4xl mx-auto text-center p-12 space-y-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto animate-pulse-glow">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-heading">Ready to Excel in Your Studies?</h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              Join thousands of students who are achieving their academic goals with EduPractice Pro
            </p>
            <Link href="/subjects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                Get Started for Free
                <Sparkles className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
