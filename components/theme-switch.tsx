'use client';

import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from '@/context/theme-context';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className='fixed bottom-5 right-5 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border  rounded-full btn-default shadow-2xl dark:shadow-slate-950 flex items-center justify-center hover:scale-[1.15] active:scale-105  transition-all'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
