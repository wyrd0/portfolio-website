'use client';

import { motion } from 'framer-motion';

import { useSectionInView } from '@/lib/hooks';
import Portrait from './portrait/portrait';
import IntroButtonGroup from './intro-button-group';


const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
  },
  animate: (i: number) => ({
    opacity: [0, 1, 0.8],

    transition: {
      delay: 2.1 * i, //stagger by i
      duration: 1,
    },
  }),
};

const introText = [
  <span
    key={0}
    className='font-bold text-lg text-slate-600 dark:text-stone-300/[0.8] '
  >
    Hi, there! I'm Mary.
  </span>,
  <span key={1}> I'm a generalist and a perpetual student.</span>,

  <p key={2}>
    I love experimenting with modes of creative, visual expression.
  </p>,
  <p key={3} className='text-slate-700  dark:text-stone-300/[0.8]  '>
    {' '}
    My <span className='font-semibold font-xl'>current focus</span> is studying{' '}
    <span className='font-semibold'>React (Next.js)</span> and{' '}
    <span className='font-semibold'>CSS</span> and exploring{' '}
    <span className='font-semibold'>SVG Animation</span>.
  </p>,
] as const;

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.75);

  return (
    <section
      ref={ref}
      className='mb-26 max-w-[35rem] text-center sm:mb-10  mt-28 scroll-mt-[100rem]'
      id='home'
    >
      <div className='flex flex-col items-center justify-center my-2 '>
        {/* <div className='relative w-full h-[16rem]'> */}
        <Portrait />
        {/* </div> */}
      </div>

      {/* intro text (staggered) */}
      <div className='mt-6 mb-8 text-slate-600 dark:text-stone-400 text-lg '>
        {introText.map((text, i) => (
          <motion.span
            className=' '
            key={i}
            variants={fadeInAnimationVariant}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={i}
          >
            {text}
          </motion.span>
        ))}
      </div>

      <IntroButtonGroup />
    </section>
  );
};

export default Intro;

