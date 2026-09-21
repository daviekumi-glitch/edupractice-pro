import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function getScoreColor(percentage: number): string {
  if (percentage >= 80) return 'text-green-400';
  if (percentage >= 60) return 'text-yellow-400';
  return 'text-red-400';
}

export function getScoreGrade(percentage: number): string {
  if (percentage >= 90) return 'A+';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B';
  if (percentage >= 60) return 'C';
  if (percentage >= 50) return 'D';
  return 'F';
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}

export function getSubjectGradient(subject: string): string {
  const gradients: Record<string, string> = {
    biology: 'from-green-500 to-emerald-600',
    physics: 'from-blue-500 to-cyan-600',
    chemistry: 'from-purple-500 to-pink-600',
    mathematics: 'from-indigo-500 to-blue-600',
    english: 'from-orange-500 to-red-600',
    agriculture: 'from-lime-500 to-green-600',
  };
  return gradients[subject.toLowerCase()] || 'from-primary to-secondary';
}
