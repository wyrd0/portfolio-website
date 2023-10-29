'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About</SectionHeading>
      {/* TODO */}
      <p className='italic font-bold dark:text-stone-50 '></p>
      <p className='mb-2 text-slate-600 dark:text-stone-300/[0.6]'>
        I've always been compelled by a variety of interests. Over the years,
        following some of these interests has lead me to enjoy great
        experiences, explore new places and encounter and work with some really
        amazing people. I have a B.A. in Psychology, I've managed a co-op style
        imaging resource sharing laboratory and I've helped to develop and
        support data driven SQL and ASP.NET applications in an agile development
        team. I'm grateful for the ways in which these experiences have enriched
        my life. Right now, I'm taking some time to work on a few pet projects
        and develop skills. As always and above all, I'm a student.
      </p>
      <p className=' text-slate-600 dark:text-stone-300/[.6]'></p>
    </motion.section>
  );
}

