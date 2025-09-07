'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from './Header';

export default function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      {children}
    </ThemeProvider>
  );
}
