import { HashRouter, Routes, Route } from 'react-router';
import { LanguageProvider } from './i18n/LanguageContext';
import { GameProvider } from './hooks/GameContext';
import { LanguageToggle } from './components/LanguageToggle/LanguageToggle';
import { HomePage } from './pages/HomePage/HomePage';
import { CareerSelectPage } from './pages/CareerSelectPage/CareerSelectPage';
import { GamePage } from './pages/GamePage/GamePage';
import { ResultPage } from './pages/ResultPage/ResultPage';

export default function App() {
  return (
    <LanguageProvider>
      <GameProvider>
        <HashRouter>
          <LanguageToggle />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/select" element={<CareerSelectPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </HashRouter>
      </GameProvider>
    </LanguageProvider>
  );
}
