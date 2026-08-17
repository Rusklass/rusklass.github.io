"use client";

import { useState, useMemo } from 'react';
import styles from './CodonLab.module.css';

const GENETIC_CODE = {
  'UUU': { aa: 'Phe', s: 'F', type: 'hydrophobic' }, 'UUC': { aa: 'Phe', s: 'F', type: 'hydrophobic' },
  'UUA': { aa: 'Leu', s: 'L', type: 'hydrophobic' }, 'UUG': { aa: 'Leu', s: 'L', type: 'hydrophobic' },
  'CUU': { aa: 'Leu', s: 'L', type: 'hydrophobic' }, 'CUC': { aa: 'Leu', s: 'L', type: 'hydrophobic' },
  'CUA': { aa: 'Leu', s: 'L', type: 'hydrophobic' }, 'CUG': { aa: 'Leu', s: 'L', type: 'hydrophobic' },
  'AUU': { aa: 'Ile', s: 'I', type: 'hydrophobic' }, 'AUC': { aa: 'Ile', s: 'I', type: 'hydrophobic' },
  'AUA': { aa: 'Ile', s: 'I', type: 'hydrophobic' }, 'AUG': { aa: 'Met', s: 'M', type: 'start' },
  'GUU': { aa: 'Val', s: 'V', type: 'hydrophobic' }, 'GUC': { aa: 'Val', s: 'V', type: 'hydrophobic' },
  'GUA': { aa: 'Val', s: 'V', type: 'hydrophobic' }, 'GUG': { aa: 'Val', s: 'V', type: 'hydrophobic' },
  'UCU': { aa: 'Ser', s: 'S', type: 'polar' }, 'UCC': { aa: 'Ser', s: 'S', type: 'polar' },
  'UCA': { aa: 'Ser', s: 'S', type: 'polar' }, 'UCG': { aa: 'Ser', s: 'S', type: 'polar' },
  'CCU': { aa: 'Pro', s: 'P', type: 'hydrophobic' }, 'CCC': { aa: 'Pro', s: 'P', type: 'hydrophobic' },
  'CCA': { aa: 'Pro', s: 'P', type: 'hydrophobic' }, 'CCG': { aa: 'Pro', s: 'P', type: 'hydrophobic' },
  'ACU': { aa: 'Thr', s: 'T', type: 'polar' }, 'ACC': { aa: 'Thr', s: 'T', type: 'polar' },
  'ACA': { aa: 'Thr', s: 'T', type: 'polar' }, 'ACG': { aa: 'Thr', s: 'T', type: 'polar' },
  'GCU': { aa: 'Ala', s: 'A', type: 'hydrophobic' }, 'GCC': { aa: 'Ala', s: 'A', type: 'hydrophobic' },
  'GCA': { aa: 'Ala', s: 'A', type: 'hydrophobic' }, 'GCG': { aa: 'Ala', s: 'A', type: 'hydrophobic' },
  'UAU': { aa: 'Tyr', s: 'Y', type: 'polar' }, 'UAC': { aa: 'Tyr', s: 'Y', type: 'polar' },
  'UAA': { aa: 'STOP', s: '*', type: 'stop' }, 'UAG': { aa: 'STOP', s: '*', type: 'stop' },
  'CAU': { aa: 'His', s: 'H', type: 'basic' }, 'CAC': { aa: 'His', s: 'H', type: 'basic' },
  'CAA': { aa: 'Gln', s: 'Q', type: 'polar' }, 'CAG': { aa: 'Gln', s: 'Q', type: 'polar' },
  'AAU': { aa: 'Asn', s: 'N', type: 'polar' }, 'AAC': { aa: 'Asn', s: 'N', type: 'polar' },
  'AAA': { aa: 'Lys', s: 'K', type: 'basic' }, 'AAG': { aa: 'Lys', s: 'K', type: 'basic' },
  'GAU': { aa: 'Asp', s: 'D', type: 'acidic' }, 'GAC': { aa: 'Asp', s: 'D', type: 'acidic' },
  'GAA': { aa: 'Glu', s: 'E', type: 'acidic' }, 'GAG': { aa: 'Glu', s: 'E', type: 'acidic' },
  'UGU': { aa: 'Cys', s: 'C', type: 'polar' }, 'UGC': { aa: 'Cys', s: 'C', type: 'polar' },
  'UGA': { aa: 'STOP', s: '*', type: 'stop' }, 'UGG': { aa: 'Trp', s: 'W', type: 'hydrophobic' },
  'CGU': { aa: 'Arg', s: 'R', type: 'basic' }, 'CGC': { aa: 'Arg', s: 'R', type: 'basic' },
  'CGA': { aa: 'Arg', s: 'R', type: 'basic' }, 'CGG': { aa: 'Arg', s: 'R', type: 'basic' },
  'AGU': { aa: 'Ser', s: 'S', type: 'polar' }, 'AGC': { aa: 'Ser', s: 'S', type: 'polar' },
  'AGA': { aa: 'Arg', s: 'R', type: 'basic' }, 'AGG': { aa: 'Arg', s: 'R', type: 'basic' },
  'GGU': { aa: 'Gly', s: 'G', type: 'hydrophobic' }, 'GGC': { aa: 'Gly', s: 'G', type: 'hydrophobic' },
  'GGA': { aa: 'Gly', s: 'G', type: 'hydrophobic' }, 'GGG': { aa: 'Gly', s: 'G', type: 'hydrophobic' },
};

const PRESETS = [
  {
    id: 'mir20a',
    label: 'miR-20a Hub Target (SCI)',
    seq: 'TAAAGTGCTTATAGTGCAGGTAG',
  },
  {
    id: 'mbp',
    label: 'Oligodendrocyte MBP (Exon 1)',
    seq: 'ATGGCATCACAGAAGAGACCCTCACAGCGACACGGATCC',
  },
  {
    id: 'tuba1a',
    label: 'Microtubule Alpha-Tubulin',
    seq: 'ATGCGTGAGTGCATCTCCATCCACGTGGGCCAGGCTGGT',
  },
];

export default function CodonLab() {
  const [activePreset, setActivePreset] = useState('mir20a');
  const [rawSequence, setRawSequence] = useState(PRESETS[0].seq);
  const [copiedKey, setCopiedKey] = useState(null);

  // Clean DNA/RNA input
  const cleanSeq = useMemo(() => {
    return rawSequence.toUpperCase().replace(/[^ATCGU]/g, '');
  }, [rawSequence]);

  // Transcribe to mRNA
  const mrnaSeq = useMemo(() => {
    return cleanSeq.replace(/T/g, 'U');
  }, [cleanSeq]);

  // Reverse Complement (DNA)
  const revCompSeq = useMemo(() => {
    const compMap = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C', 'U': 'A' };
    return cleanSeq
      .split('')
      .reverse()
      .map(char => compMap[char] || char)
      .join('');
  }, [cleanSeq]);

  // Translate into Peptides
  const peptideTranslation = useMemo(() => {
    const peptides = [];
    for (let i = 0; i + 2 < mrnaSeq.length; i += 3) {
      const codon = mrnaSeq.substring(i, i + 3);
      const match = GENETIC_CODE[codon] || { aa: '???', s: '?', type: 'polar' };
      peptides.push({ codon, ...match });
    }
    return peptides;
  }, [mrnaSeq]);

  // Biocomputational Metrics
  const metrics = useMemo(() => {
    const len = cleanSeq.length;
    if (len === 0) return { len: 0, gc: 0, tm: 0, mw: 0 };

    const gCount = (cleanSeq.match(/G/g) || []).length;
    const cCount = (cleanSeq.match(/C/g) || []).length;
    const aCount = (cleanSeq.match(/A/g) || []).length;
    const tCount = (cleanSeq.match(/[TU]/g) || []).length;

    const gcPercent = Math.round(((gCount + cCount) / len) * 100);

    // Simple nearest-neighbor/Wallace rule approximation for Tm
    let tm = 0;
    if (len < 14) {
      tm = (wA + xT) * 2 + (yG + zC) * 4;
    } else {
      tm = Math.round(64.9 + 41 * (gCount + cCount - 16.4) / len);
    }

    // Molecular Weight approx (ssDNA ~ 330 Da per nt, ssRNA ~ 340 Da)
    const mwKda = ((len * 330) / 1000).toFixed(2);

    return {
      len,
      gc: gcPercent,
      tm: Math.max(0, tm),
      mw: mwKda,
    };
  }, [cleanSeq]);

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSelectPreset = (preset) => {
    setActivePreset(preset.id);
    setRawSequence(preset.seq);
  };

  return (
    <div className={styles.labContainer} id="sequence-lab">
      <div className={styles.labHeader}>
        <div className={styles.labTitleGroup}>
          <div>
            <h3 className={styles.labTitle}>Interactive Sequence &amp; Codon Lab</h3>
            <p className={styles.labSubtitle}>
              Live DNA/RNA transcription, translation, and thermodynamic analysis
            </p>
          </div>
        </div>

        <a 
          href="https://pdt.olik.fans" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.pdtBadge}
        >
          Powered by PrimerDesignTool (PDT) &rarr;
        </a>
      </div>

      {/* Preset selector */}
      <div className={styles.presetBar}>
        <span className={styles.presetLabel}>Select Preset:</span>
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            className={`${styles.presetBtn} ${activePreset === preset.id ? styles.presetBtnActive : ''}`}
            onClick={() => handleSelectPreset(preset)}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Input Sequence Textarea */}
      <div className={styles.inputArea}>
        <textarea
          className={styles.seqTextarea}
          value={rawSequence}
          onChange={(e) => {
            setRawSequence(e.target.value);
            setActivePreset('custom');
          }}
          placeholder="Paste or type 5' -> 3' nucleotide sequence (A, T, C, G, U)..."
          rows={3}
          spellCheck={false}
        />
        <div className={styles.inputMeta}>
          <span>Format: 5&apos; &rarr; 3&apos; Sense Strand</span>
          <span>{cleanSeq.length} Nucleotides</span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>Length</div>
          <div className={styles.metricValue}>{metrics.len} <span style={{fontSize: '0.8rem', fontWeight: 400}}>nt</span></div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>GC Content</div>
          <div className={styles.metricValue}>{metrics.gc}%</div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>Estimated Tm</div>
          <div className={styles.metricValue}>{metrics.tm}°C</div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>Mass</div>
          <div className={styles.metricValue}>{metrics.mw} <span style={{fontSize: '0.8rem', fontWeight: 400}}>kDa</span></div>
        </div>
      </div>

      {/* Transcribed mRNA & Reverse Complement */}
      <div className={styles.resultsSection}>
        <div className={styles.resultBox}>
          <div className={styles.resultBoxHeader}>
            <span className={styles.resultBoxTitle}>5&apos; &rarr; 3&apos; Transcribed mRNA</span>
            <button 
              className={styles.copyBtn}
              onClick={() => handleCopy('mrna', mrnaSeq)}
            >
              {copiedKey === 'mrna' ? 'Copied' : 'Copy mRNA'}
            </button>
          </div>
          <div className={styles.sequenceDisplay}>{mrnaSeq || '—'}</div>
        </div>

        <div className={styles.resultBox}>
          <div className={styles.resultBoxHeader}>
            <span className={styles.resultBoxTitle}>5&apos; &rarr; 3&apos; Reverse Complement</span>
            <button 
              className={styles.copyBtn}
              onClick={() => handleCopy('revcomp', revCompSeq)}
            >
              {copiedKey === 'revcomp' ? 'Copied' : 'Copy RevComp'}
            </button>
          </div>
          <div className={styles.sequenceDisplay}>{revCompSeq || '—'}</div>
        </div>

        {/* Polypeptide Translation */}
        <div className={styles.resultBox}>
          <div className={styles.resultBoxHeader}>
            <span className={styles.resultBoxTitle}>Polypeptide Translation ({peptideTranslation.length} Residues)</span>
            <button 
              className={styles.copyBtn}
              onClick={() => handleCopy('peptide', peptideTranslation.map(p => p.s).join(''))}
            >
              {copiedKey === 'peptide' ? 'Copied' : 'Copy Peptide'}
            </button>
          </div>
          
          <div className={styles.peptideRibbon}>
            {peptideTranslation.length > 0 ? (
              peptideTranslation.map((item, idx) => {
                let typeClass = styles.aaPolar;
                if (item.type === 'start') typeClass = styles.aaStart;
                else if (item.type === 'stop') typeClass = styles.aaStop;
                else if (item.type === 'hydrophobic') typeClass = styles.aaHydrophobic;
                else if (item.type === 'basic') typeClass = styles.aaBasic;
                else if (item.type === 'acidic') typeClass = styles.aaAcidic;

                return (
                  <span 
                    key={idx} 
                    className={`${styles.peptidePill} ${typeClass}`}
                    title={`Codon: ${item.codon} -> ${item.aa} (${item.type})`}
                  >
                    <strong>{item.s}</strong> <span style={{opacity: 0.7, fontSize: '0.7rem'}}>{item.aa}</span>
                  </span>
                );
              })
            ) : (
              <span style={{color: 'var(--text-muted)'}}>Enter at least 3 nucleotides for translation...</span>
            )}
          </div>
        </div>
      </div>

      {/* PDT Link Banner */}
      <div className={styles.pdtFooterCta}>
        <div className={styles.pdtCtaText}>
          Need full thermodynamic optimization, two-tailed primer models, and secondary hairpin structures?
        </div>
        <a 
          href="https://pdt.olik.fans" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.pdtLaunchBtn}
        >
          Open PrimerDesignTool (PDT) &rarr;
        </a>
      </div>
    </div>
  );
}
