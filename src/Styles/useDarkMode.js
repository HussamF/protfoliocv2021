import { useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
    localStorage.setItem('theme', theme);
  };
  return [theme, toggleTheme];
};
