'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i, //stagger by i
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView('Skills');
  return (
    <section
      ref={ref}
      className='mb-28 max-w-[50rem] w-[80%] mx-auto scroll-mt-28 text-center sm:mb-10 '
      id='skills'
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2   text-md text-slate-800  dark:text-stone-100 ml-4 mr-4 '>
        {skillsData.map((skill, i) => (
          <motion.li
            className='btn-default rounded-xl px-4 py-2 hover:border-slate-400/[0.4] hover:shadow-sm dark:bg-slate-700/[0.3] dark:border-stone-500/[.2] dark:text-stone-200/[0.7] dark:hover:text-stone-100'
            key={i}
            variants={fadeInAnimationVariant}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={i}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

