'use client';
import SectionHeading from '../section-heading';
import ContactForm from './contact-form';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

const Contact = () => {
  const { ref } = useSectionInView('Contact');
  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-36 w-[min(90%,36rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className='-mt-6 text-slate-500 text-sm dark:text-stone-400'>
        {' '}
        Please contact me through this form or directly at{' '}
        <a href='mailto:wyrdolive@proton.me'>wyrdolive@proton.me</a>.
      </p>

      <ContactForm />
    </motion.section>
  );
};

export default Contact;

