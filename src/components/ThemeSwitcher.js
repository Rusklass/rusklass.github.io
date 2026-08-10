"use client";

import { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.css';

const THEMES = [
  'sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('earth');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'earth';
    if (THEMES.includes(savedTheme)) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'earth');
    }
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (!mounted) return <div className={styles.switcherContainer} style={{height: '36px'}} />;

  const activeIndex = THEMES.indexOf(theme);
  
  // Track inner width after borders (4px) and padding (8px) is 248px.
  // 9 dots = 144px. 8 gaps = 104px. Each gap = 13px. Step size = 16 + 13 = 29px.
  const stepSize = 29; 
  const translateX = activeIndex * stepSize;

  return (
    <div className={styles.switcherContainer}>
      <div className={styles.sliderTrack}>
        <div 
          className={styles.sliderThumb} 
          style={{ transform: `translateX(${translateX}px)` }} 
        />
        
        {THEMES.map((t, index) => {
          const planetClass = styles[`planet-${t}`];
          return (
            <div 
              key={t}
              className={`${styles.planetDot} ${planetClass} ${activeIndex === index ? styles.planetDotActive : ''}`}
              onClick={() => handleThemeChange(t)}
              title={t.charAt(0).toUpperCase() + t.slice(1)}
            />
          );
        })}
      </div>
    </div>
  );
}
