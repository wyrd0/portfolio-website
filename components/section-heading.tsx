import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};
const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h3 className='text-2xl font-medium capitalize mb-8 text-center dark:text-stone-300/[0.8]'>
      {children}
    </h3>
  );
};

export default SectionHeading;

