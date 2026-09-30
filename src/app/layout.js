import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import GeneticRain from "../components/GeneticRain";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ruslan Klassen | Bioinformatician",
  description: "Computational biology and multi-omics research across CNS neurotrauma, cell-free RNA fragmentomics, and scientific software.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} data-theme="bauhaus-light">
      <body>
        <GeneticRain />
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            <div style={{ flex: 1 }}>
              {children}
            </div>
            <footer style={{
              marginTop: '4rem',
              paddingTop: '2rem',
              paddingBottom: '2rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              fontFamily: 'var(--font-mono-code)',
              fontSize: '0.8rem',
              color: 'var(--text-muted)'
            }}>
              <div>
                &copy; {new Date().getFullYear()} Ruslan Klassen
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://pdt.klassen.ing" target="_blank" rel="noopener noreferrer">PrimerDesignTool</a>
                <span>•</span>
                <a href="https://github.com/Rusklass" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
