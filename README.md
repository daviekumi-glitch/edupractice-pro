# 🎓 EduPractice Pro

**Master 6 Subjects with AI-Powered Learning**

A comprehensive educational practice platform for Biology, Physics, Chemistry, English, Mathematics, and Agriculture with intelligent quizzes, flashcards, progress tracking, and real-time analytics.

![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 📚 **6 Comprehensive Subjects**
- **Biology** - Cell Biology, Genetics, Evolution, Ecology, Anatomy, Microbiology
- **Physics** - Mechanics, Electricity & Magnetism, Thermodynamics, Waves, Modern Physics, Nuclear Physics
- **Chemistry** - Atomic Structure, Chemical Bonding, Reactions, Organic Chemistry, Equilibrium, Acids & Bases
- **English** - Grammar, Vocabulary, Reading Comprehension, Writing Skills, Literature, Speaking & Listening
- **Mathematics** - Algebra, Geometry, Trigonometry, Calculus, Statistics, Number Theory
- **Agriculture** - Crop Production, Soil Science, Livestock Management, Pest Control, Irrigation, Agricultural Technology

### 🎯 **Practice Modes**
- **Quick Quiz** - 10 random questions for fast practice
- **Flashcards** - Learn with interactive cards
- **Timed Test** - 20 questions in 15 minutes
- **Mock Exam** - 50 questions, 1-hour comprehensive test

### 🤖 **AI-Powered Features**
- Intelligent question generation using NVIDIA NIM
- Adaptive difficulty based on performance
- Personalized learning paths
- Real-time answer explanations

### 📊 **Progress Tracking**
- Detailed analytics per subject
- Overall accuracy and performance metrics
- Daily streak tracking
- Experience points and leveling system
- Session history with full details

### 🏆 **Gamification**
- Global leaderboard
- Achievement badges
- XP and leveling system
- Daily streaks and rewards

### 🎨 **Modern UI**
- Responsive design (mobile, tablet, desktop)
- Dark/Light theme support
- Smooth animations and transitions
- Accessible and user-friendly

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- (Optional) NVIDIA API key for AI features

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/edupractice-pro.git
cd edupractice-pro

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### AI Integration (Optional)

1. Get your free NVIDIA API key from [build.nvidia.com](https://build.nvidia.com/)
2. Go to Settings page in the app
3. Enter your API key and select a model
4. Start generating AI-powered questions!

**Supported Models:**
- Llama 3.1 70B Instruct (Recommended)
- Llama 3.1 405B Instruct
- Mixtral 8x7B Instruct
- Phi-3 Medium 128K

## 📁 Project Structure

```
edupractice-pro/
├── app/                      # Next.js 15 app directory
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Homepage
│   ├── subjects/            # Subject browser and details
│   ├── practice/            # Practice/quiz interface
│   ├── progress/            # Progress dashboard
│   ├── leaderboard/         # Global leaderboard
│   └── settings/            # Settings and AI configuration
├── components/              # Reusable React components
│   └── Navigation.tsx       # App navigation bar
├── lib/                     # Core business logic
│   ├── types.ts            # TypeScript interfaces
│   ├── constants.ts        # Subject and topic data
│   ├── questionBank.ts     # Question database
│   ├── practiceService.ts  # Practice session management
│   └── utils.ts            # Utility functions
└── public/                  # Static assets
```

## 🎯 Core Features Explained

### Practice Sessions
- **Real-time feedback** - Instant answer validation with explanations
- **Progress tracking** - Every session is saved and analyzed
- **Smart scoring** - Points based on difficulty and accuracy
- **Time tracking** - Monitor how long you spend per topic

### Progress Analytics
- **Subject-level insights** - Track progress per subject
- **Overall statistics** - Total questions, accuracy, streaks
- **Experience system** - Earn XP and level up
- **Session history** - Review past quizzes with full details

### Data Storage
- **Local-first** - All data stored in browser localStorage
- **Privacy-focused** - No server, no tracking, no data collection
- **Export-ready** - Easy to implement data export features

## 🛠️ Technology Stack

- **Framework**: Next.js 16.3 (App Router, Turbopack)
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 4.0
- **Icons**: Lucide React
- **Charts**: Recharts (ready for analytics)
- **AI**: NVIDIA NIM API integration
- **Storage**: Browser localStorage (client-side)

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production server
npm run type-check   # Run TypeScript type checking
```

## 🎨 Customization

### Adding New Questions
Edit `lib/questionBank.ts`:

```typescript
{
  id: 'unique-id',
  topicId: 'topic-id',
  subject: 'biology',
  question: 'Your question here?',
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  correctAnswer: 1,
  explanation: 'Detailed explanation here',
  difficulty: 'intermediate',
  points: 15
}
```

### Adding New Topics
Edit `lib/constants.ts`:

```typescript
{
  id: 'new-topic',
  subject: 'biology',
  name: 'Topic Name',
  description: 'Topic description',
  difficulty: 'beginner',
  questionCount: 30,
  icon: '🧪'
}
```

## 🔒 Privacy & Security

- **No user accounts** - Start practicing immediately
- **Local storage only** - Data never leaves your browser
- **API keys stored locally** - Never sent to our servers
- **No tracking** - Completely private learning experience

## 📈 Future Enhancements

- [ ] Supabase backend integration
- [ ] User authentication (email, Google OAuth)
- [ ] Cloud sync across devices
- [ ] More AI-powered features (recommendations, adaptive difficulty)
- [ ] Mobile app (React Native / Expo)
- [ ] Spaced repetition algorithm
- [ ] Study groups and challenges
- [ ] Performance analytics dashboards
- [ ] Export progress reports (PDF)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **NVIDIA** - For the NIM AI platform
- **Next.js Team** - For the amazing framework
- **Tailwind Labs** - For Tailwind CSS
- **Lucide** - For beautiful icons

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ❤️ for learners worldwide**

[⬆ Back to top](#-edupractice-pro)
