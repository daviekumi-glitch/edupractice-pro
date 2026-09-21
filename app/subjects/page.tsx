'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Target, Clock, Award } from 'lucide-react';
import { SUBJECTS } from '@/lib/constants';

export default function SubjectsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-custom space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-display gradient-text">Choose Your Subject</h1>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Select a subject to start practicing and improve your knowledge
          </p>
        </motion.div>

        {/* Subjects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link href={`/subjects/${subject.id}`}>
                <div className="card-premium group cursor-pointer overflow-hidden h-full">
                  {/* Colored Top Bar */}
                  <div className={`h-2 bg-gradient-to-r ${subject.color}`} />
                  
                  {/* Content */}
                  <div className="p-8 space-y-6">
                    {/* Icon and Title */}
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <div className="text-5xl">{subject.icon}</div>
                        <h2 className="text-2xl font-bold text-text-primary">{subject.name}</h2>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        className={`w-12 h-12 bg-gradient-to-br ${subject.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <ArrowRight className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-text-muted">{subject.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#334155]">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[#94a3b8] text-sm">
                          <BookOpen className="w-4 h-4" />
                          <span>Topics</span>
                        </div>
                        <div className="text-xl font-bold text-[#f1f5f9]">10+</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[#94a3b8] text-sm">
                          <Target className="w-4 h-4" />
                          <span>Questions</span>
                        </div>
                        <div className="text-xl font-bold text-[#f1f5f9]">100+</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-primary font-semibold pt-2"
                    >
                      <span>Start Practicing</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-glass p-8"
        >
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Clock className="w-8 h-8 mx-auto text-primary" />
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-text-muted">Available Anytime</div>
            </div>
            <div className="space-y-2">
              <Target className="w-8 h-8 mx-auto text-primary" />
              <div className="text-3xl font-bold gradient-text">Adaptive</div>
              <div className="text-sm text-text-muted">Personalized Learning</div>
            </div>
            <div className="space-y-2">
              <Award className="w-8 h-8 mx-auto text-primary" />
              <div className="text-3xl font-bold gradient-text">Gamified</div>
              <div className="text-sm text-text-muted">Earn Achievements</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
