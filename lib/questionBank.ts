import { Question, DifficultyLevel } from './types';

// Sample question bank - in production this would come from database
export const QUESTION_BANK: Question[] = [
  // BIOLOGY Questions
  {
    id: 'bio-1',
    topicId: 'bio-cell',
    subject: 'biology',
    question: 'What is the powerhouse of the cell?',
    options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi Apparatus'],
    correctAnswer: 1,
    explanation: 'Mitochondria are known as the powerhouse of the cell because they generate most of the cell\'s supply of ATP, which is used as a source of chemical energy.',
    difficulty: 'beginner',
    points: 10
  },
  {
    id: 'bio-2',
    topicId: 'bio-cell',
    subject: 'biology',
    question: 'Which organelle is responsible for protein synthesis?',
    options: ['Lysosome', 'Endoplasmic Reticulum', 'Ribosome', 'Peroxisome'],
    correctAnswer: 2,
    explanation: 'Ribosomes are the cellular organelles responsible for protein synthesis. They read messenger RNA and translate the genetic code into proteins.',
    difficulty: 'beginner',
    points: 10
  },
  {
    id: 'bio-3',
    topicId: 'bio-genetics',
    subject: 'biology',
    question: 'What does DNA stand for?',
    options: ['Deoxyribonucleic Acid', 'Diribonucleic Acid', 'Dynamic Nuclear Acid', 'Deoxyribose Nucleotide Acid'],
    correctAnswer: 0,
    explanation: 'DNA stands for Deoxyribonucleic Acid. It is the hereditary material in humans and almost all other organisms.',
    difficulty: 'beginner',
    points: 10
  },
  {
    id: 'bio-4',
    topicId: 'bio-genetics',
    subject: 'biology',
    question: 'How many chromosomes do humans have?',
    options: ['42', '44', '46', '48'],
    correctAnswer: 2,
    explanation: 'Humans have 46 chromosomes, arranged in 23 pairs. One set of 23 chromosomes comes from each parent.',
    difficulty: 'beginner',
    points: 10
  },
  {
    id: 'bio-5',
    topicId: 'bio-ecology',
    subject: 'biology',
    question: 'What is the process by which plants make their own food?',
    options: ['Respiration', 'Photosynthesis', 'Digestion', 'Fermentation'],
    correctAnswer: 1,
    explanation: 'Photosynthesis is the process used by plants to convert light energy into chemical energy stored in glucose. It uses carbon dioxide and water, producing oxygen as a byproduct.',
    difficulty: 'beginner',
    points: 10
  },

  // PHYSICS Questions
  {
    id: 'phy-1',
    topicId: 'phy-mechanics',
    subject: 'physics',
    question: 'What is Newton\'s First Law of Motion?',
    options: ['F = ma', 'An object at rest stays at rest unless acted upon by a force', 'Action and reaction are equal', 'Energy cannot be created or destroyed'],
    correctAnswer: 1,
    explanation: 'Newton\'s First Law states that an object at rest will stay at rest, and an object in motion will stay in motion with constant velocity, unless acted upon by an external force. This is also known as the law of inertia.',
    difficulty: 'beginner',
    points: 10
  },
  {
    id: 'phy-2',
    topicId: 'phy-mechanics',
    subject: 'physics',
    question: 'What is the SI unit of force?',
    options: ['Joule', 'Watt', 'Newton', 'Pascal'],
    correctAnswer: 2,
    explanation: 'The Newton (N) is the SI unit of force. One Newton is the force needed to accelerate a mass of one kilogram at a rate of one meter per second squared.',
    difficulty: 'beginner',
    points: 10
  },
  {
    id: 'phy-3',
    topicId: 'phy-electricity',
    subject: 'physics',
    question: 'What is Ohm\'s Law?',
    options: ['V = IR', 'P = IV', 'E = mc²', 'F = ma'],
    correctAnswer: 0,
    explanation: 'Ohm\'s Law states that voltage (V) equals current (I) times resistance (R). It describes the relationship between voltage, current, and resistance in an electrical circuit.',
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'phy-4',
    topicId: 'phy-thermodynamics',
    subject: 'physics',
    question: 'At what temperature does water boil at sea level?',
    options: ['90°C', '95°C', '100°C', '105°C'],
    correctAnswer: 2,
    explanation: 'Water boils at 100°C (212°F) at sea level under standard atmospheric pressure (1 atm). The boiling point changes with altitude and pressure.',
    difficulty: 'beginner',
    points: 10
  },
  {
    id: 'phy-5',
    topicId: 'phy-waves',
    subject: 'physics',
    question: 'What is the speed of light in a vacuum?',
    options: ['3 × 10⁸ m/s', '3 × 10⁷ m/s', '3 × 10⁶ m/s', '3 × 10⁹ m/s'],
    correctAnswer: 0,
    explanation: 'The speed of light in a vacuum is approximately 3 × 10⁸ meters per second (or about 300,000 kilometers per second). This is a fundamental constant of nature.',
    difficulty: 'intermediate',
    points: 15
  },

  // CHEMISTRY Questions
  {
    id: 'chem-1',
    topicId: 'chem-atomic',
    subject: 'chemistry',
    question: 'What is the atomic number of Carbon?',
    options: ['4', '6', '8', '12'],
    correctAnswer: 1,
    explanation: 'Carbon has an atomic number of 6, meaning it has 6 protons in its nucleus. The atomic mass is 12, which includes protons and neutrons.',
    difficulty: 'beginner',
    points: 10
  },
  {
    id: 'chem-2',
    topicId: 'chem-atomic',
    subject: 'chemistry',
    question: 'Which element is the most abundant in Earth\'s crust?',
    options: ['Silicon', 'Oxygen', 'Iron', 'Aluminum'],
    correctAnswer: 1,
    explanation: 'Oxygen is the most abundant element in Earth\'s crust, making up about 46% by mass. It\'s found in rocks, minerals, and water.',
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'chem-3',
    topicId: 'chem-bonding',
    subject: 'chemistry',
    question: 'What type of bond forms when electrons are shared between atoms?',
    options: ['Ionic Bond', 'Covalent Bond', 'Metallic Bond', 'Hydrogen Bond'],
    correctAnswer: 1,
    explanation: 'A covalent bond forms when two atoms share one or more pairs of electrons. This type of bond typically occurs between non-metal atoms.',
    difficulty: 'beginner',
    points: 10
  },
  {
    id: 'chem-4',
    topicId: 'chem-reactions',
    subject: 'chemistry',
    question: 'What is the pH of a neutral solution?',
    options: ['0', '7', '14', '1'],
    correctAnswer: 1,
    explanation: 'A neutral solution has a pH of 7. Solutions with pH less than 7 are acidic, while those with pH greater than 7 are basic (alkaline).',
    difficulty: 'beginner',
    points: 10
  },
  {
    id: 'chem-5',
    topicId: 'chem-organic',
    subject: 'chemistry',
    question: 'What is the general formula for alkanes?',
    options: ['CnH2n', 'CnH2n+2', 'CnH2n-2', 'CnHn'],
    correctAnswer: 1,
    explanation: 'Alkanes have the general formula CnH2n+2, where n is the number of carbon atoms. They are saturated hydrocarbons with single bonds only.',
    difficulty: 'intermediate',
    points: 15
  },

  // ENGLISH Questions
  {
    id: 'eng-1',
    topicId: 'eng-grammar',
    subject: 'english',
    question: 'Which of the following is a pronoun?',
    options: ['Run', 'Beautiful', 'She', 'Quickly'],
    correctAnswer: 2,
    explanation: '"She" is a pronoun. Pronouns are words that replace nouns, such as he, she, it, they, we, etc.',
    difficulty: 'beginner',
    points: 10
  },
  {
    id: 'eng-2',
    topicId: 'eng-grammar',
    subject: 'english',
    question: 'What is the past tense of "write"?',
    options: ['Writed', 'Written', 'Wrote', 'Writing'],
    correctAnswer: 2,
    explanation: 'The simple past tense of "write" is "wrote". "Written" is the past participle used with helping verbs.',
    difficulty: 'beginner',
    points: 10
  },
  {
    id: 'eng-3',
    topicId: 'eng-vocabulary',
    subject: 'english',
    question: 'What does "ubiquitous" mean?',
    options: ['Rare', 'Present everywhere', 'Dangerous', 'Expensive'],
    correctAnswer: 1,
    explanation: '"Ubiquitous" means present, appearing, or found everywhere. It describes something that is very common or widespread.',
    difficulty: 'advanced',
    points: 20
  },
  {
    id: 'eng-4',
    topicId: 'eng-comprehension',
    subject: 'english',
    question: 'What is the main purpose of a topic sentence?',
    options: ['To conclude a paragraph', 'To introduce the main idea', 'To provide examples', 'To cite sources'],
    correctAnswer: 1,
    explanation: 'A topic sentence introduces the main idea of a paragraph. It typically appears at the beginning and tells the reader what the paragraph will be about.',
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'eng-5',
    topicId: 'eng-literature',
    subject: 'english',
    question: 'What literary device compares two things using "like" or "as"?',
    options: ['Metaphor', 'Simile', 'Personification', 'Alliteration'],
    correctAnswer: 1,
    explanation: 'A simile is a figure of speech that directly compares two different things using "like" or "as". Example: "Her smile was as bright as the sun."',
    difficulty: 'beginner',
    points: 10
  },

  // MATHEMATICS Questions
  {
    id: 'math-1',
    topicId: 'math-algebra',
    subject: 'mathematics',
    question: 'Solve for x: 2x + 5 = 15',
    options: ['5', '7', '10', '20'],
    correctAnswer: 0,
    explanation: 'Subtract 5 from both sides: 2x = 10. Divide both sides by 2: x = 5.',
    difficulty: 'beginner',
    points: 10
  },
  {
    id: 'math-2',
    topicId: 'math-algebra',
    subject: 'mathematics',
    question: 'What is the quadratic formula?',
    options: ['x = -b ± √(b²-4ac) / 2a', 'x = b ± √(b²+4ac) / 2a', 'x = -b / 2a', 'x = √(b²-4ac)'],
    correctAnswer: 0,
    explanation: 'The quadratic formula x = [-b ± √(b²-4ac)] / 2a is used to solve quadratic equations of the form ax² + bx + c = 0.',
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'math-3',
    topicId: 'math-geometry',
    subject: 'mathematics',
    question: 'What is the sum of angles in a triangle?',
    options: ['90°', '180°', '270°', '360°'],
    correctAnswer: 1,
    explanation: 'The sum of all interior angles in any triangle always equals 180 degrees. This is a fundamental property of triangles in Euclidean geometry.',
    difficulty: 'beginner',
    points: 10
  },
  {
    id: 'math-4',
    topicId: 'math-trigonometry',
    subject: 'mathematics',
    question: 'What is the value of sin(90°)?',
    options: ['0', '0.5', '1', '√2/2'],
    correctAnswer: 2,
    explanation: 'sin(90°) = 1. At 90 degrees, the sine function reaches its maximum value of 1.',
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'math-5',
    topicId: 'math-calculus',
    subject: 'mathematics',
    question: 'What is the derivative of x²?',
    options: ['x', '2x', 'x³', '2'],
    correctAnswer: 1,
    explanation: 'Using the power rule (d/dx[xⁿ] = nxⁿ⁻¹), the derivative of x² is 2x¹ = 2x.',
    difficulty: 'advanced',
    points: 20
  },

  // AGRICULTURE Questions
  {
    id: 'agr-1',
    topicId: 'agr-crops',
    subject: 'agriculture',
    question: 'What are the three primary nutrients plants need?',
    options: ['NPK (Nitrogen, Phosphorus, Potassium)', 'ABC (Aluminum, Boron, Copper)', 'XYZ (Xenon, Yttrium, Zinc)', 'HIJ (Hydrogen, Iodine, Iron)'],
    correctAnswer: 0,
    explanation: 'NPK stands for Nitrogen, Phosphorus, and Potassium. These are the three primary macronutrients essential for plant growth and are found in most fertilizers.',
    difficulty: 'beginner',
    points: 10
  },
  {
    id: 'agr-2',
    topicId: 'agr-soil',
    subject: 'agriculture',
    question: 'What is the ideal pH range for most crops?',
    options: ['3-4', '5-6', '6-7', '8-9'],
    correctAnswer: 2,
    explanation: 'Most crops grow best in soil with a pH between 6 and 7, which is slightly acidic to neutral. This range allows optimal nutrient availability.',
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'agr-3',
    topicId: 'agr-livestock',
    subject: 'agriculture',
    question: 'What is the term for animal husbandry focused on breeding?',
    options: ['Veterinary', 'Genetics', 'Animal Breeding', 'Zoology'],
    correctAnswer: 2,
    explanation: 'Animal breeding is the practice of selectively mating animals to produce offspring with desirable traits for agriculture.',
    difficulty: 'beginner',
    points: 10
  },
  {
    id: 'agr-4',
    topicId: 'agr-pests',
    subject: 'agriculture',
    question: 'What is IPM in agriculture?',
    options: ['Internal Plant Management', 'Integrated Pest Management', 'Intensive Planting Method', 'Irrigation and Pest Monitoring'],
    correctAnswer: 1,
    explanation: 'IPM stands for Integrated Pest Management, a sustainable approach to managing pests by combining biological, cultural, physical, and chemical tools.',
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'agr-5',
    topicId: 'agr-irrigation',
    subject: 'agriculture',
    question: 'Which irrigation method is most water-efficient?',
    options: ['Flood irrigation', 'Sprinkler irrigation', 'Drip irrigation', 'Surface irrigation'],
    correctAnswer: 2,
    explanation: 'Drip irrigation is the most water-efficient method, delivering water directly to plant roots and minimizing evaporation and runoff losses.',
    difficulty: 'intermediate',
    points: 15
  }
];

export function getQuestionsByTopic(topicId: string, limit?: number): Question[] {
  const questions = QUESTION_BANK.filter(q => q.topicId === topicId);
  if (limit) {
    return questions.slice(0, limit);
  }
  return questions;
}

export function getQuestionsBySubject(subject: string, limit?: number): Question[] {
  const questions = QUESTION_BANK.filter(q => q.subject === subject);
  if (limit) {
    return questions.slice(0, limit);
  }
  return questions;
}

export function getRandomQuestions(topicId: string, count: number): Question[] {
  const questions = getQuestionsByTopic(topicId);
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
