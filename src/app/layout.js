import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ruslan Klassen - Profile",
  description: "Academic profile and portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="app-container">
          <Sidebar />
          <main className="main-content" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div style={{ flex: 1 }}>
              {children}
            </div>
            <footer style={{ marginTop: 'auto', paddingTop: '3rem', paddingBottom: '1rem', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
              &copy; Ruslan Klassen {new Date().getFullYear()}
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
