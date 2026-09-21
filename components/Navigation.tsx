'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Home, BookOpen, TrendingUp, Trophy, Settings, Menu, X, 
  Sparkles, Target, Brain
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/subjects', label: 'Subjects', icon: BookOpen },
  { href: '/progress', label: 'Progress', icon: TrendingUp },
  { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop & Mobile Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-border/50"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg"
              >
                <Brain className="w-6 h-6 text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg font-bold gradient-text">EduPractice</span>
                <span className="text-xs text-text-muted">Pro Edition</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                
                return (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 relative',
                        isActive 
                          ? 'text-primary bg-primary/10' 
                          : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-primary/10 rounded-xl border border-primary/20"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* User Profile / CTA */}
            <div className="hidden md:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Upgrade to Premium</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-text-primary hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : '100%'
        }}
        transition={{ type: 'spring', damping: 20 }}
        className="md:hidden fixed inset-0 z-40 bg-background pt-20"
      >
        <div className="container-custom py-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link 
                key={item.href} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300',
                    isActive 
                      ? 'text-primary bg-primary/10 border border-primary/20' 
                      : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-lg">{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>Upgrade to Premium</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
