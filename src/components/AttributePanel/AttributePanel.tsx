import { AttributeBar } from '../AttributeBar/AttributeBar';
import { useLanguage } from '../../i18n/LanguageContext';
import { ui } from '../../i18n/translations';
import type { Attributes } from '../../engine/types';
import styles from './AttributePanel.module.css';

interface AttributePanelProps {
  attributes: Attributes;
}

export function AttributePanel({ attributes }: AttributePanelProps) {
  const { t } = useLanguage();

  return (
    <div className={styles.panel}>
      <AttributeBar label={t(ui.stability)} icon="🛡" value={attributes.stability} color="#4299e1" />
      <AttributeBar label={t(ui.skill)} icon="⚡" value={attributes.skill} color="#48bb78" />
      <AttributeBar label={t(ui.finance)} icon="💰" value={attributes.finance} color="#d69e2e" />
      <AttributeBar label={t(ui.network)} icon="🤝" value={attributes.network} color="#805ad5" />
      <AttributeBar label={t(ui.sanity)} icon="🧠" value={attributes.sanity} color="#e53e3e" />
    </div>
  );
}
