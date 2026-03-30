# AI 生存挑战 | AI Survival Challenge

一款文字策略游戏：选择你的职业，在AI时代做出关键决策，看你能存活多久？

A text-based strategy game: choose your career, make critical decisions in the AI era, and see how long you can survive.

## 🎮 How to Play | 怎么玩

1. Choose a career from 10 options (programmer, designer, accountant, teacher, etc.)
2. Each year, face random events and AI milestones
3. Make decisions that affect your 4 attributes: Safety, Skill, Finance, Network
4. Survive 30 years without your Safety dropping to zero — or get replaced by AI!
5. Share your result poster or link with friends

## 🛠 Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Styling:** CSS Modules
- **Animation:** Motion (Framer Motion)
- **Routing:** React Router (HashRouter)
- **Testing:** Vitest + Testing Library
- **Poster:** html2canvas
- **Deploy:** GitHub Pages

## 🚀 Local Development | 本地开发

```bash
# Clone the repository
git clone <repo-url>
cd ai-survival-game

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Run tests once
npm run test:run

# Type check
npx tsc --noEmit

# Production build
npm run build

# Preview production build
npx serve dist
```

## 📁 Architecture | 架构

```
src/
├── engine/          # Pure TypeScript game logic (no React dependency)
│   ├── types.ts     # Core game types
│   ├── random.ts    # Seeded RNG (mulberry32)
│   ├── attributeCalculator.ts
│   ├── eventResolver.ts
│   └── gameEngine.ts
├── data/            # Game content (careers, events, milestones, titles)
├── i18n/            # Bilingual support (Chinese + English)
├── components/      # Shared UI components
├── pages/           # Route pages (Home, CareerSelect, Game, Result)
├── hooks/           # Game state management
└── utils/           # Share encoder
```

The game engine is a pure TypeScript module with no React dependency, designed for future reuse in WeChat mini-programs.

## 📄 License

MIT
