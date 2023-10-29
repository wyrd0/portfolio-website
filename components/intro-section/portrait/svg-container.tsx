import React from 'react';
import styles from './portrait.module.css';
import { motion } from 'framer-motion';

type SvgContainerProps = {
  children: React.ReactNode;
};
const SvgContainer = ({ children }: SvgContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: 'tween',
        duration: 0.25,
      }}
      className={`${styles['svg-container']} relative`}
    >
      {children}
    </motion.div>
  );
};

export default SvgContainer;

