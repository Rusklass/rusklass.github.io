"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './GeneticRain.module.css';

/* ==========================================================================
   🧬 RNA MATRIX CONFIGURATION & TWEAKING PARAMETERS
   ========================================================================== */
export const MATRIX_CONFIG = {
  // 1. CHARACTER POOL: Nucleotides used in the falling streams
  BASES: ['A', 'C', 'T', 'G', 'U', 'A', 'C', 'G', 'U', 'A', 'T', 'G', 'C'],

  // 2. FONT SIZE: Actual rendered size of letters in pixels (e.g. 22, 26, 30)
  FONT_SIZE: 24,

  // 3. FONT FAMILY & WEIGHT:
  // Available Matrix fonts:
  // - 'MatrixSansPrint' (Print style)
  // - 'MatrixSans' (Standard clean)
  // - 'MatrixSansScreen' (Pixel screen style)
  // - 'MatrixSansVideo' (Video scanline style)
  // - 'MatrixSansRaster' (Retro raster style)
  FONT_FAMILY: '"MatrixSansPrint", monospace',
  FONT_WEIGHT: 'normal',

  // 4. VERTICAL SPACING: Distance in pixels between characters in the same column
  // (multiplier of FONT_SIZE: 0.85 = tight, 1.0 = normal, 1.2 = spacious)
  VERTICAL_SPACING_FACTOR: 0.85,

  // 5. HORIZONTAL SPACING: Distance between falling columns
  COLUMN_SPACING_FACTOR: 1.2,

  // 6. FALLING SPEED (Pixels per frame, independent of font size):
  // Lower values = slower, calm Matrix movie feel (e.g. 0.6 to 1.6 px/frame)
  FALL_SPEED_MIN: 0.6,
  FALL_SPEED_MAX: 1.5,

  // 7. STREAM LENGTH: Minimum and maximum number of characters in a stream
  STREAM_LENGTH_MIN: 16,
  STREAM_LENGTH_MAX: 32,

  // 8. RANDOM BRIGHT SYMBOL CHANCE: Chance for a random character to glow bright white/gold
  RANDOM_BRIGHT_CHANCE: 0.08,

  // 9. CHARACTER MUTATION RATE: Chance that a character in the stream changes as it falls
  MUTATION_RATE: 0.04,

  // 10. TRAIL OPACITY: Overall transparency of the falling trail (0.1 = subtle, 0.9 = vivid)
  TRAIL_BASE_OPACITY: 0.75,
};

export default function GeneticRain() {
  const canvasRef = useRef(null);
  const [isMatrixTheme, setIsMatrixTheme] = useState(false);

  // Detect and listen to theme changes
  useEffect(() => {
    const checkTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      setIsMatrixTheme(currentTheme === 'matrix-terminal');
    };

    checkTheme();

    const observer = new MutationObserver(() => {
      checkTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMatrixTheme) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initDrops();
    };

    window.addEventListener('resize', handleResize);

    const fontSize = MATRIX_CONFIG.FONT_SIZE;
    const colSpacing = fontSize * MATRIX_CONFIG.COLUMN_SPACING_FACTOR;
    const vSpacing = fontSize * MATRIX_CONFIG.VERTICAL_SPACING_FACTOR;
    let columns = Math.floor(width / colSpacing);
    let drops = [];

    const initDrops = () => {
      columns = Math.floor(width / colSpacing);
      drops = [];
      for (let i = 0; i < columns; i++) {
        const length = Math.floor(
          Math.random() * (MATRIX_CONFIG.STREAM_LENGTH_MAX - MATRIX_CONFIG.STREAM_LENGTH_MIN) +
          MATRIX_CONFIG.STREAM_LENGTH_MIN
        );

        // Generate pre-populated characters and random bright positions
        const chars = [];
        const brights = [];
        for (let j = 0; j < length; j++) {
          chars.push(MATRIX_CONFIG.BASES[Math.floor(Math.random() * MATRIX_CONFIG.BASES.length)]);
          brights.push(Math.random() < MATRIX_CONFIG.RANDOM_BRIGHT_CHANCE);
        }

        drops[i] = {
          y: Math.random() * -height,
          speed: Math.random() * (MATRIX_CONFIG.FALL_SPEED_MAX - MATRIX_CONFIG.FALL_SPEED_MIN) + MATRIX_CONFIG.FALL_SPEED_MIN,
          length,
          chars,
          brights,
        };
      }
    };

    initDrops();

    const render = () => {
      const computedStyle = getComputedStyle(document.documentElement);
      const rainColor = computedStyle.getPropertyValue('--rain-color').trim() || '#00ff66';
      const rainHead = computedStyle.getPropertyValue('--rain-head').trim() || '#ffffff';
      const accentWarning = computedStyle.getPropertyValue('--accent-warning').trim() || '#fbbf24';

      // 100% Clean Frame Clear: No alpha accumulation, no smudges, no vertical stripes
      ctx.clearRect(0, 0, width, height);

      // Direct Matrix font
      ctx.font = `${MATRIX_CONFIG.FONT_WEIGHT} ${fontSize}px ${MATRIX_CONFIG.FONT_FAMILY}`;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const x = i * colSpacing;
        const y = drop.y;

        // Occasional character mutation for iconic Matrix digital feel
        if (Math.random() < MATRIX_CONFIG.MUTATION_RATE && drop.chars.length > 0) {
          const randIdx = Math.floor(Math.random() * drop.chars.length);
          drop.chars[randIdx] = MATRIX_CONFIG.BASES[Math.floor(Math.random() * MATRIX_CONFIG.BASES.length)];
        }

        // Draw leading character (Brightest head of the stream)
        const headChar = drop.chars[0] || 'A';
        ctx.fillStyle = rainHead;
        ctx.shadowColor = rainHead;
        ctx.shadowBlur = 10;
        ctx.fillText(headChar, x, y);
        ctx.shadowBlur = 0;

        // Draw body of the stream with calculated alpha decay and compact vertical spacing
        for (let j = 1; j < drop.length; j++) {
          const bodyY = y - j * vSpacing;
          if (bodyY < -40 || bodyY > height + 40) continue;

          const alpha = (1 - j / drop.length) * MATRIX_CONFIG.TRAIL_BASE_OPACITY;
          const bodyChar = drop.chars[j] || MATRIX_CONFIG.BASES[j % MATRIX_CONFIG.BASES.length];
          const isBright = drop.brights[j];

          if (isBright) {
            // Randomly glowing bright symbol in the stream
            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = accentWarning;
            ctx.shadowBlur = 8;
            ctx.fillText(bodyChar, x, bodyY);
            ctx.shadowBlur = 0;
          } else {
            // Standard phosphor green glowing trail with direct alpha
            ctx.fillStyle = hexToRgba(rainColor, alpha);
            ctx.fillText(bodyChar, x, bodyY);
          }
        }

        // Advance drop by exact pixel speed
        drop.y += drop.speed;

        // Reset drop when it exits the bottom
        if (drop.y - drop.length * vSpacing > height) {
          drop.y = Math.random() * -100;
          drop.speed = Math.random() * (MATRIX_CONFIG.FALL_SPEED_MAX - MATRIX_CONFIG.FALL_SPEED_MIN) + MATRIX_CONFIG.FALL_SPEED_MIN;

          // Refresh stream characters
          for (let j = 0; j < drop.length; j++) {
            drop.chars[j] = MATRIX_CONFIG.BASES[Math.floor(Math.random() * MATRIX_CONFIG.BASES.length)];
            drop.brights[j] = Math.random() < MATRIX_CONFIG.RANDOM_BRIGHT_CHANCE;
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Ensure custom font is ready before starting canvas animation loop
    if (document.fonts) {
      document.fonts.ready.then(() => {
        render();
      });
    } else {
      render();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMatrixTheme]);

  if (!isMatrixTheme) return null;

  return (
    <div className={styles.canvasContainer}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}

function hexToRgba(hex, alpha) {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
  }
  if (c.length !== 6) return `rgba(0, 255, 102, ${alpha})`;
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
