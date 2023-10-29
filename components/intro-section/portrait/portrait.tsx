import React, { useContext } from 'react';
import SvgContainer from './svgContainer';
import Wyrd from './self';
// import Munnin from './crows/muninn';
// import Huginn from './crows/huginn';
import FlyRight from './crows/fly-right';
import { motion } from 'framer-motion';
import MuninnAnimation from './crows/animation';
import MockingBird from './mocking-bird/mocking-bird';
// import { ThemeContext, useTheme } from '@/context/theme-context';

const Portrait = () => {
  // const {theme} = useTheme;
  return (
    <SvgContainer>
      {/* <Huginn /> */}
      {/* TODO: Theme is not connected on Wyrd */}
      <Wyrd />
      {/* TODO: this is not connected */}
      {/* <FlyRight from='greeting' /> */}
      {/* <MuninnAnimation /> */}
      {/* <div className='relative inherit-w-h'>
        <MockingBird />
      </div> */}
    </SvgContainer>
  );
};

export default Portrait;

