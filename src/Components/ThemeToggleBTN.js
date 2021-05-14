import React from 'react';
import sun from '../Imgs/sun.svg';
import moon from '../Imgs/moon.svg';

export const ThemeToggleBTN = ({ theme, toggleTheme }) => {
  return (
    <div onClick={toggleTheme}>
      <img
        src={`${theme === 'light' ? moon : sun}`}
        alt=''
        className='svg-mode'
      />
    </div>
  );
};
