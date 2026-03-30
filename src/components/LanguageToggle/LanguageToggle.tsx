import { useLanguage } from '../../i18n/LanguageContext';
import styles from './LanguageToggle.module.css';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const handleToggle = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <button
      className={styles.button}
      onClick={handleToggle}
      aria-label={language === 'zh' ? 'Switch to English' : '切换为中文'}
      title={language === 'zh' ? 'Switch to English' : '切换为中文'}
    >
      {language === 'zh' ? 'EN' : '中文'}
    </button>
  );
}
