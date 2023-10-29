import React from 'react';
import styles from './portrait.module.css';
import { motion } from 'framer-motion';

type SvgContainerProps = {
  children: React.ReactNode;
};
const SvgContainer = ({ children }: SvgContainerProps) => {
  return (
    // <div className={`${styles['svg-container-div']} `}>
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
    // </div>
  );
};

export default SvgContainer;

