
import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for system preference on initial load
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="android-btn p-2 rounded-full bg-secondary/80 dark:bg-secondary/40 text-foreground"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
}
