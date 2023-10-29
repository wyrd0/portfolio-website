'use client';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

const Navigation = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <nav className='flex max-w-[100dvw] fixed top-[.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 '>
      <ul className='flex w-[28rem] flex-wrap items-center justify-around gap-y-1 text-[.9rem] py-3 text-slate-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 dark:text-stone-400'>
        {links.map((link) => (
          <motion.li
            className='h-3/4 flex items-center justify-center relative'
            key={link.hash}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={(e) => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
          >
            <Link
              className={clsx(
                'flex w-full items-center justify-center px-2 hover:text-slate-800 dark:hover:text-stone-300 ',
                {
                  'text-slate-900 dark:text-stone-200':
                    activeSection === link.name,
                }
              )}
              href={link.hash}
            >
              {link.name}
              {link.name === activeSection && (
                <motion.span
                  className='rounded-lg  bg-stone-100 shadow-slate-200 shadow-sm absolute -inset-[0.25rem] -z-10 opacity-85 dark:bg-slate-800 dark:opacity-75 dark:shadow-slate-900'
                  layoutId='activeSection'
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className='z-[999] max-w-[100dvw] relative'>
      <motion.div
        className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border bg-stone-50 bg-opacity-60 shadow-md shadow-slate/[.03] backdrop-blur-[.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-lg  dark:bg-slate-800 dark:bg-opacity-75 dark:border-stone-600/[.4]  dark:shadow-slate-900/[.7]'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ delay: 0.5 }}
      ></motion.div>
      <Navigation />
    </header>
  );
};

export default Header;

