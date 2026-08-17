"use client";

import { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.css';

const THEMES = [
  { id: 'swiss-dark', name: 'Swiss Dark', desc: 'Bauhaus Charcoal + Cyan' },
  { id: 'matrix-terminal', name: 'RNA Matrix', desc: 'Obsidian + Phosphor Emerald' },
  { id: 'bauhaus-light', name: 'Bauhaus Light', desc: 'Paper Ink + Cobalt/Red' },
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('bauhaus-light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('ruslan_theme') || 'bauhaus-light';
    const validTheme = THEMES.some(t => t.id === savedTheme) ? savedTheme : 'bauhaus-light';
    setTheme(validTheme);
    document.documentElement.setAttribute('data-theme', validTheme);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('ruslan_theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (!mounted) return <div className={styles.switcherContainer} style={{ height: '120px' }} />;

  return (
    <div className={styles.switcherContainer} aria-label="Visual Theme Switcher">
      <div className={styles.switcherHeader}>
        <span>Visual Theme</span>
        <span style={{ color: 'var(--accent-primary)' }}>{THEMES.find(t => t.id === theme)?.name}</span>
      </div>

      <div className={styles.themeList}>
        {THEMES.map((t) => (
          <button
            key={t.id}
            className={`${styles.themeButton} ${theme === t.id ? styles.themeButtonActive : ''}`}
            onClick={() => handleThemeChange(t.id)}
            title={t.desc}
          >
            <div className={styles.themeButtonInner}>
              <span className={`${styles.colorSwatch} ${styles[`swatch-${t.id}`]}`} />
              <span>{t.name}</span>
            </div>
            {theme === t.id && <span className={styles.activeBadge}>●</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
