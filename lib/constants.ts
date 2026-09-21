import { Topic, Subject } from './types';

export const SUBJECTS: { id: Subject; name: string; icon: string; color: string; description: string }[] = [
  {
    id: 'biology',
    name: 'Biology',
    icon: '🧬',
    color: 'bg-green-500',
    description: 'Study of living organisms and life processes'
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: '⚛️',
    color: 'bg-blue-500',
    description: 'Science of matter, energy, and their interactions'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: '⚗️',
    color: 'bg-purple-500',
    description: 'Study of substances and their properties'
  },
  {
    id: 'english',
    name: 'English',
    icon: '📚',
    color: 'bg-rose-500',
    description: 'Language, literature, and communication skills'
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '🔢',
    color: 'bg-yellow-500',
    description: 'Numbers, equations, and logical reasoning'
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: '🌾',
    color: 'bg-amber-600',
    description: 'Farming, crops, and agricultural practices'
  }
];

export const TOPICS: Record<Subject, Topic[]> = {
  biology: [
    { id: 'bio-cell', subject: 'biology', name: 'Cell Biology', description: 'Structure and function of cells', difficulty: 'beginner', questionCount: 50, icon: '🧫' },
    { id: 'bio-genetics', subject: 'biology', name: 'Genetics', description: 'Heredity and DNA', difficulty: 'intermediate', questionCount: 45, icon: '🧬' },
    { id: 'bio-evolution', subject: 'biology', name: 'Evolution', description: 'Natural selection and adaptation', difficulty: 'intermediate', questionCount: 40, icon: '🦎' },
    { id: 'bio-ecology', subject: 'biology', name: 'Ecology', description: 'Ecosystems and environments', difficulty: 'beginner', questionCount: 38, icon: '🌿' },
    { id: 'bio-anatomy', subject: 'biology', name: 'Human Anatomy', description: 'Body systems and organs', difficulty: 'advanced', questionCount: 55, icon: '🫀' },
    { id: 'bio-microbiology', subject: 'biology', name: 'Microbiology', description: 'Bacteria, viruses, and microorganisms', difficulty: 'advanced', questionCount: 42, icon: '🦠' }
  ],
  physics: [
    { id: 'phy-mechanics', subject: 'physics', name: 'Mechanics', description: 'Motion, forces, and energy', difficulty: 'beginner', questionCount: 48, icon: '⚙️' },
    { id: 'phy-electricity', subject: 'physics', name: 'Electricity & Magnetism', description: 'Circuits and electromagnetic fields', difficulty: 'intermediate', questionCount: 52, icon: '⚡' },
    { id: 'phy-thermodynamics', subject: 'physics', name: 'Thermodynamics', description: 'Heat, temperature, and energy transfer', difficulty: 'intermediate', questionCount: 35, icon: '🌡️' },
    { id: 'phy-waves', subject: 'physics', name: 'Waves & Optics', description: 'Light, sound, and wave properties', difficulty: 'intermediate', questionCount: 40, icon: '🌊' },
    { id: 'phy-modern', subject: 'physics', name: 'Modern Physics', description: 'Quantum mechanics and relativity', difficulty: 'expert', questionCount: 38, icon: '🔬' },
    { id: 'phy-nuclear', subject: 'physics', name: 'Nuclear Physics', description: 'Atomic nuclei and radioactivity', difficulty: 'advanced', questionCount: 32, icon: '☢️' }
  ],
  chemistry: [
    { id: 'chem-atomic', subject: 'chemistry', name: 'Atomic Structure', description: 'Atoms, electrons, and periodic table', difficulty: 'beginner', questionCount: 44, icon: '⚛️' },
    { id: 'chem-bonding', subject: 'chemistry', name: 'Chemical Bonding', description: 'Ionic, covalent, and metallic bonds', difficulty: 'intermediate', questionCount: 46, icon: '🔗' },
    { id: 'chem-reactions', subject: 'chemistry', name: 'Chemical Reactions', description: 'Types and rates of reactions', difficulty: 'intermediate', questionCount: 50, icon: '⚗️' },
    { id: 'chem-organic', subject: 'chemistry', name: 'Organic Chemistry', description: 'Carbon compounds and hydrocarbons', difficulty: 'advanced', questionCount: 58, icon: '🧪' },
    { id: 'chem-equilibrium', subject: 'chemistry', name: 'Equilibrium', description: 'Chemical equilibrium and Le Chatelier', difficulty: 'advanced', questionCount: 36, icon: '⚖️' },
    { id: 'chem-acids', subject: 'chemistry', name: 'Acids & Bases', description: 'pH, titration, and acid-base reactions', difficulty: 'intermediate', questionCount: 42, icon: '🧴' }
  ],
  english: [
    { id: 'eng-grammar', subject: 'english', name: 'Grammar', description: 'Parts of speech and sentence structure', difficulty: 'beginner', questionCount: 60, icon: '✏️' },
    { id: 'eng-vocabulary', subject: 'english', name: 'Vocabulary', description: 'Word meanings and usage', difficulty: 'beginner', questionCount: 75, icon: '📖' },
    { id: 'eng-comprehension', subject: 'english', name: 'Reading Comprehension', description: 'Understanding passages and texts', difficulty: 'intermediate', questionCount: 45, icon: '📰' },
    { id: 'eng-writing', subject: 'english', name: 'Writing Skills', description: 'Essays, composition, and style', difficulty: 'intermediate', questionCount: 40, icon: '✍️' },
    { id: 'eng-literature', subject: 'english', name: 'Literature', description: 'Poetry, prose, and literary analysis', difficulty: 'advanced', questionCount: 50, icon: '📚' },
    { id: 'eng-speaking', subject: 'english', name: 'Speaking & Listening', description: 'Communication and comprehension', difficulty: 'beginner', questionCount: 35, icon: '🗣️' }
  ],
  mathematics: [
    { id: 'math-algebra', subject: 'mathematics', name: 'Algebra', description: 'Equations, functions, and variables', difficulty: 'beginner', questionCount: 65, icon: '➕' },
    { id: 'math-geometry', subject: 'mathematics', name: 'Geometry', description: 'Shapes, angles, and spatial reasoning', difficulty: 'intermediate', questionCount: 55, icon: '📐' },
    { id: 'math-trigonometry', subject: 'mathematics', name: 'Trigonometry', description: 'Triangles and trigonometric functions', difficulty: 'intermediate', questionCount: 48, icon: '📊' },
    { id: 'math-calculus', subject: 'mathematics', name: 'Calculus', description: 'Differentiation and integration', difficulty: 'advanced', questionCount: 52, icon: '∫' },
    { id: 'math-statistics', subject: 'mathematics', name: 'Statistics', description: 'Data analysis and probability', difficulty: 'intermediate', questionCount: 46, icon: '📈' },
    { id: 'math-numbertheory', subject: 'mathematics', name: 'Number Theory', description: 'Integers, primes, and divisibility', difficulty: 'expert', questionCount: 38, icon: '🔢' }
  ],
  agriculture: [
    { id: 'agr-crops', subject: 'agriculture', name: 'Crop Production', description: 'Growing and harvesting crops', difficulty: 'beginner', questionCount: 50, icon: '🌽' },
    { id: 'agr-soil', subject: 'agriculture', name: 'Soil Science', description: 'Soil types, fertility, and management', difficulty: 'intermediate', questionCount: 42, icon: '🪴' },
    { id: 'agr-livestock', subject: 'agriculture', name: 'Livestock Management', description: 'Animal husbandry and care', difficulty: 'intermediate', questionCount: 45, icon: '🐄' },
    { id: 'agr-pests', subject: 'agriculture', name: 'Pest Control', description: 'Pest management and prevention', difficulty: 'intermediate', questionCount: 38, icon: '🐛' },
    { id: 'agr-irrigation', subject: 'agriculture', name: 'Irrigation', description: 'Water management for crops', difficulty: 'beginner', questionCount: 32, icon: '💧' },
    { id: 'agr-technology', subject: 'agriculture', name: 'Agricultural Technology', description: 'Modern farming techniques', difficulty: 'advanced', questionCount: 40, icon: '🚜' }
  ]
};

export const PRACTICE_MODES = [
  { id: 'quiz', name: 'Quick Quiz', description: '10 random questions', icon: '🎯', duration: 600 },
  { id: 'flashcards', name: 'Flashcards', description: 'Learn with cards', icon: '🎴', duration: null },
  { id: 'timed-test', name: 'Timed Test', description: '20 questions, 15 minutes', icon: '⏱️', duration: 900 },
  { id: 'mock-exam', name: 'Mock Exam', description: '50 questions, 1 hour', icon: '📝', duration: 3600 }
];
