import { HashRouter, Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import { LanguageProvider } from './i18n/LanguageContext';
import { GameProvider } from './hooks/GameContext';
import { LanguageToggle } from './components/LanguageToggle/LanguageToggle';
import { SoundToggle } from './components/SoundToggle/SoundToggle';
import { HomePage } from './pages/HomePage/HomePage';
import { CareerSelectPage } from './pages/CareerSelectPage/CareerSelectPage';
import { GamePage } from './pages/GamePage/GamePage';
import { ResultPage } from './pages/ResultPage/ResultPage';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/select" element={<CareerSelectPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <GameProvider>
        <HashRouter>
          <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 100, display: 'flex', gap: 8 }}>
            <SoundToggle />
            <LanguageToggle />
          </div>
          <AnimatedRoutes />
        </HashRouter>
      </GameProvider>
    </LanguageProvider>
  );
}
