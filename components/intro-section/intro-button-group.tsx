import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiDownload } from 'react-icons/hi';
import { useActiveSectionContext } from '@/context/active-section-context';

const IntroButtonGroup = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <motion.div
      className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-md font-medium my-14'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 8 }}
    >
      <Link
        className='group button btn-primary '
        href='#contact'
        onClick={() => {
          setActiveSection('Contact');
          setTimeOfLastClick(Date.now());
        }}
      >
        Contact me{' '}
        <HiOutlineMail className='opacity-70  group-hover:translate-x-1' />
      </Link>
      <a
        href='https://github.com/wyrd0'
        target='_blank'
        className='button btn-default'
      >
        {' '}
        <FaGithub className='my-1' />
      </a>
      <a
        href='https://www.linkedin.com/in/maryolive/'
        target='_blank'
        className='button btn-default'
      >
        {' '}
        <FaLinkedin />
      </a>
      <a className='button btn-default' href='/MBO CV.pdf' target='_blank'>
        {' '}
        CV <HiDownload className='opacity-60 group-hover:translate-x-1' />
      </a>
    </motion.div>
  );
};

export default IntroButtonGroup;

