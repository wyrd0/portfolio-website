'use client';
import { motion } from 'framer-motion';

// type SectionDividerProps = {
//   horizontal?: 'true' | 'false';
// };
export const VerticalSectionDivider = () => {
  return (
    <motion.div
      className='section-divider'
      initial={{ opacity: 0, rotate: -90 }}
      whileInView={{ opacity: 0.5, rotate: 0 }}
      transition={{ duration: 1.25 }}
    ></motion.div>
  );
};

export const HorizontalSectionDivider = () => {
  return (
    <motion.div
      className='section-divider'
      initial={{ opacity: 0, rotate: 0 }}
      whileInView={{ opacity: 0.5, rotate: 90 }}
      animate={{ opacity: 0.5, rotate: 0 }}
      transition={{ duration: 1.25 }}
    ></motion.div>
  );
};

