import React from 'react';
import { motion } from 'framer-motion';
import CSS from 'csstype';
import { flightPathArray, perched1, takeoff } from './munin-svg-groups';
import { useTheme } from '@/context/theme-context';

export const greetingPositionStyle: CSS.Properties = {
  width: '2rem',
  position: 'absolute',
  bottom: '-1.8rem',
  left: '-.1rem',
};
const shoulderPositionStyle: CSS.Properties = {
  width: '2rem',
  position: 'absolute',
  bottom: '7rem',
  // right: 'calc(50% - 3.1rem)', //make this variable.  container width + 2rem (bird width)/ 2 - value
  right: 'calc(50% - 4.1rem)', //for now, 50%
};
type MuninnStyleProps = {
  stroke?: string;
  fill?: string;
  from: 'greeting' | 'shoulder';
};

// export const MuninnFly2 = ({
//   stroke = '#475569',
//   fill = '#475569',
//   from = 'greeting',
// }) => {
//   //{ rotate = 0, moveUp = 12.5, moveRight = 17 }
//   const style =
//     from === 'greeting' ? greetingPositionStyle : shoulderPositionStyle;

//   return (
//     <svg
//       fill='none'
//       overflow='visible'
//       viewBox='12 12 24 36'
//       // className={styles['muninn-fly2-svg']}
//       // style={{
//       //   width: '3.8rem',
//       //   transform: `translate(50%) rotate(${rotate}deg)`,
//       //   position: 'absolute',
//       //   bottom: `${moveUp}rem`,
//       //   right: `calc(50% - ${moveRight}rem)`,
//       // }}
//       style={style}
//     >
//       <path
//         fill={fill}
//         stroke={stroke}
//         d='M30.5 30.4c.8-2 .7-4.1.8-4.2l.5-.1 2 1.4h-1.3c-.2 0-.3.1-.7.6l-.7 3-.7 1.2c-1.8.4-2.9 1.7-3.7.6-.2-.3 1 .7 2.8-1 0 0-1 .9-2.1 0 1 .5 2-.5 2.4-.8-1.1-1-.3-2.1-2-2.6.6-.3 1 .4 1.5 1 .5.8 1 1.4 1.2.9Z'
//       />
//       <path
//         fill={fill}
//         stroke={stroke}
//         strokeWidth='.3'
//         d='M31.7 26h.1m0 0 2 1.6m-2-1.5-.5.1c0 .1 0 2.2-.8 4.2-.2.5-.7-.1-1.2-.8-.4-.7-.9-1.4-1.6-1 1.8.4 1 1.5 2 2.5-.3.3-1.3 1.3-2.3.7 1.2 1 2.1 0 2 .1-1.6 1.7-3 .7-2.7 1 .8 1.1 2-.2 3.7-.6l.7-1.1.7-3c.4-.6.5-.7.7-.7h1.3m0 0'
//       />
//       <path
//         fill={fill}
//         stroke={stroke}
//         strokeWidth='.3'
//         d='M39.2 15.5c-.5 1.8-1.1 1.3-4.7 3.8-2.9-.6-7.3-.4-8.3-3 .7-.7-3.6-3.7-3.7-3.8-.4-1.2 1.8-.8 1.3-1.2-1-.8.3-1 0-1.2-.8-.5.1-.6-.3-1-.3-.2-.8-.3-.8-.9 0-.5 2.3.5 2.4.2 0-.4-3.1-2-2-2.3 1-.2 4.5 2.3 4.6 2 0-.3-3.7-3.3-3-3.9.6-.6 6 4.7 6.2 4.3.3-.3-4.4-4.7-3.8-6.9.2-.5 6 7.5 6.3 7.4.2-.3-4.5-6-3.4-6.3 1-.4 5.9 8 6.2 8 .4 0-2-2.8-1.3-3.3.4-.3 3.3 3.1 3 6 0 .4 1.8.3 1.3 2.1Z'
//       />
//       <path
//         fill={fill}
//         stroke={stroke}
//         strokeWidth='.3'
//         d='M44.4 18.5c.2.6 1.7 1 2.9 2.7-.7.3-3.9-.7-4.3-.4-1.2 1-2.5 1.2-5 3-.5.2-1.8 1.7-2.4 2.3-.6.6-.9 1.4-1.8 2.4a7 7 0 0 1-3 1l-2.5.4-3 .9c-.2.4-2.8 3.9-3.7 4.6-.2-.1.6-1.2 0-.6-.9.9-2 1.6-2.2 1.6-.2 0 .2-.7 0-.6-2.2 1.6-2.2 1.8-2.8 1.3-.1-.2.3-.7 0-.9-.4.7-.5.9-.7.7-.1-.1 0-.3.2-.5.3-.3-1.2.3-1.4.3-.3 0-.3-.4-.2-.6l2-2c-.8 0-2 1.4-2.8 1.3-.4 0 .1-.8 1-1.3l-1.3-.4a67 67 0 0 0 9.4-5.6c.7-1 2.4-2.3 3.5-3.4 1.2-1.1 4.8-5.8 7.8-7 2.4-.9 6.3-1.3 8-1 .5.1.6.1 1 .4.2.2 1.2.9 1.3 1.4Z'
//       />
//       <path
//         fill={fill}
//         stroke={stroke}
//         d='M30.2 28.8c0-.2.5-.5.7-.7l-.2 1.4c-.2 0-1.2 1-3 2.7-2 1.6-2.3 1.7-2.8 1.5l-.2-.4h-.4c-.6.2-.8-.2-1-.4 0 0 0-.1 0 0 .2.1.5.3.8.2l.2-.3c.8.2 2.7-.5 2.5-.7-.8 0-2.2.2-2.3.1-.4-.2-.6-.7-.6-.7s.6.6 1 .3c.2-.2 2-.2 2.1-.3.1 0 0-1.4.5-1.8.7-.8-.8-1.7-.4-1.4.8.4 1.2.7.5 2-.1.2 0 1 .2.9l2.4-2.4Z'
//       />
//       <path
//         stroke={stroke}
//         strokeWidth='.3'
//         d='M24.7 33.3h-.4c-.6.2-.9-.3-1-.4-.2-.2.3.4.8.2l.2-.3c.8.2 2.7-.5 2.5-.7-.8 0-2.2.2-2.3.1-.4-.2-.6-.7-.6-.7s.6.6 1 .3c.2-.2 2-.2 2.1-.3.1 0 0-1.4.5-1.8.7-.8-.8-1.7-.4-1.4.8.4 1.2.7.5 2-.1.2 0 1 .2.9l2.4-2.4c0-.2.5-.5.7-.7l-.2 1.4c-.2 0-1.2 1-3 2.7-2 1.6-2.3 1.7-2.8 1.5l-.2-.4Zm0 0 1.5-.3c.2 0 0 .4-.5.4-.4 0-.5.3-1-.1Z'
//       />
//       <path
//         fill={fill}
//         stroke={stroke}
//         strokeWidth='.3'
//         d='M34.7 18.5c1.4 1 .4 0 2 .9l.6 1.2c.3.8-1.4.5-2.1.2-.5-.3-1.8-.6-3.3.1-.7.3-1.1 1.4-2.3 2-5 2.3-3.8.7-4.2.9-2.3 1.1-2.3-.7-2.6-.7-.3 0 .5.7-1 .2-.4-.1-.2-.4-.3-.8-1-.4-.2-.7-.3-.7-1.6-.3-1.1-.8-1.5-1.1-.1 0-.3 0-.7-.4 0-.2-1 .2-1-.8-.2-.4-.3-.3-.5-.5-.1-.2 1.1-.7.6-.6-1.2.2-2.6-.7-2.8-.7-2.7 0-2.7-1.1-2.8-1.6-.2-1-1.1-.2-2.5-1.3-.2-.2 1.4-.3 1.4-.6 0-.1-1.2-.2-1.3-.1-1 0-2.9-.7-2.7-1.1-1-.4-3.2-.9-3.2-1.2 0-.3 2 0 1.4-.2C4.6 11 .9 10.3.9 10c.1-.6 7.9 1.6 7.9 1-.1-.6-5.2-1.1-8.6-4.8-.5-.6 8.8 4.7 9.6 4 .1-.2-7.2-3-8-6.5-.3-.8 2.7 3.5 6.8 5C9 8.8 4.8 6.4 4 3.8c-.3-.9 2.4 3.8 8.8 6.7 3.4 1.5 15.5 4.1 16.4 4.4.6.1 4.2 2.7 5.5 3.6Z'
//       />
//     </svg>
//   );
// };
// export const MuninnFly1 = ({
//   stroke = '#475569',
//   fill = '#475569',
//   from = 'greeting',
// }) => {
//   // rotate = -15, moveUp = 10.2, moveRight = 12 }
//   const style =
//     from === 'greeting' ? greetingPositionStyle : shoulderPositionStyle;
//   return (
//     <svg
//       fill='none'
//       overflow='visible'
//       viewBox='12 12 24 36'
//       // className={styles['muninn-fly1-svg']}
//       // style={{
//       //   width: '3.8rem',
//       //   transform: `translate(50%) rotate(${rotate}deg)`,
//       //   position: 'absolute',
//       //   bottom: `${moveUp}rem`,
//       //   right: `calc(50% - ${moveRight}rem)`,
//       // }}
//       style={style}
//     >
//       <path
//         fill={fill}
//         d='M28.5 29.4c.8-2 .7-4.1.8-4.2l.5-.1 2 1.4h-1.3c-.2 0-.3.1-.7.6l-.7 3-.7 1.2c-1.8.4-2.9 1.7-3.7.6-.2-.3 1 .7 2.8-1 0 0-1 .9-2.1 0 1 .5 2-.5 2.4-.8-1.1-1-.3-2.1-2-2.6.6-.3 1 .4 1.5 1 .5.8 1 1.4 1.2.9Z'
//       />
//       <path
//         stroke={stroke}
//         strokeWidth='.3'
//         d='M29.7 25h.1m0 0 2 1.6m-2-1.5-.5.1c0 .1 0 2.2-.8 4.2-.2.5-.7-.1-1.2-.8-.4-.7-.9-1.4-1.6-1 1.8.4 1 1.5 2 2.5-.3.3-1.3 1.3-2.3.7 1.2 1 2.1 0 2 .1-1.6 1.7-3 .7-2.7 1 .8 1.1 2-.2 3.7-.6l.7-1.1.7-3c.4-.6.5-.7.7-.7h1.3m0 0'
//       />
//       <path
//         fill={fill}
//         stroke={stroke}
//         strokeWidth='.3'
//         d='M34.7 17c1.1 1.5.3 1.7.2 6-2.2 2-4.6 5.7-7.3 5-.2-1-5.1.7-5.3.6-1.2-.3.5-1.8-.2-1.7-1.2.3-.7-.8-1-.7-.8.4-.4-.5-1-.3-.3 0-.6.4-1 0-.5-.2 1.6-1.5 1.4-1.8-.2-.2-3.4 1.3-3 .4.4-1 4.6-2.4 4.4-2.6-.2-.3-4.9 1-5 .1-.1-.8 7.3-2 7.2-2.5 0-.3-6.4.8-7.8-1-.3-.4 9.6-.4 9.6-.7 0-.3-7.4 0-7-1 .3-1 10 0 10-.3.3-.3-3.3 0-3.3-.8 0-.5 4.4-.8 6.5 1 .4.4 1.4-1.1 2.6.3Z'
//       />
//       <path
//         fill={fill}
//         stroke={stroke}
//         strokeWidth='.3'
//         d='M42.4 17.5c.2.6 1.7 1 2.9 2.7-.7.3-3.9-.7-4.3-.4-1.2 1-2.5 1.2-5 3-.5.2-1.8 1.7-2.4 2.3-.6.6-.9 1.4-1.8 2.4a7 7 0 0 1-3 1l-2.5.4-3 .9c-.2.4-2.8 3.9-3.7 4.6-.2-.1.6-1.2 0-.6-.9.9-2 1.6-2.2 1.6-.2 0 .2-.7 0-.6-2.2 1.6-2.2 1.8-2.8 1.3-.1-.2.3-.7 0-.9-.4.7-.5.9-.7.7-.1-.1 0-.3.2-.5.3-.3-1.2.3-1.4.3-.3 0-.3-.4-.2-.6l2-2c-.8 0-2 1.4-2.8 1.3-.4 0 .1-.8 1-1.3l-1.3-.4a67 67 0 0 0 9.4-5.6c.7-1 2.4-2.3 3.5-3.4 1.2-1.1 4.8-5.8 7.8-7 2.4-.9 6.3-1.3 8-1 .5.1.6.1 1 .4.2.2 1.2.9 1.3 1.4Z'
//       />
//       <path
//         fill={fill}
//         // stroke={stroke}
//         d='M28.2 27.8c0-.2.5-.5.7-.7l-.2 1.4c-.2 0-1.2 1-3 2.7-2 1.6-2.3 1.7-2.8 1.5l-.2-.4h-.4c-.6.2-.8-.2-1-.4 0 0 0-.1 0 0 .2.1.5.3.8.2l.2-.3c.8.2 2.7-.5 2.5-.7-.8 0-2.2.2-2.3.1-.4-.2-.6-.7-.6-.7s.6.6 1 .3c.2-.2 2-.2 2.1-.3.1 0 0-1.4.5-1.8.7-.8-.8-1.7-.4-1.4.8.4 1.2.7.5 2-.1.2 0 1 .2.9l2.4-2.4Z'
//       />
//       <path
//         fill={fill}
//         // stroke={stroke}
//         strokeWidth='.3'
//         d='M22.7 32.3h-.4c-.6.2-.9-.3-1-.4-.2-.2.3.4.8.2l.2-.3c.8.2 2.7-.5 2.5-.7-.8 0-2.2.2-2.3.1-.4-.2-.6-.7-.6-.7s.6.6 1 .3c.2-.2 2-.2 2.1-.3.1 0 0-1.4.5-1.8.7-.8-.8-1.7-.4-1.4.8.4 1.2.7.5 2-.1.2 0 1 .2.9l2.4-2.4c0-.2.5-.5.7-.7l-.2 1.4c-.2 0-1.2 1-3 2.7-2 1.6-2.3 1.7-2.8 1.5l-.2-.4Zm0 0 1.5-.3c.2 0 0 .4-.5.4-.4 0-.5.3-1-.1Z'
//       />
//       <path
//         fill={fill}
//         stroke={stroke}
//         strokeWidth='.3'
//         d='M37.7 16.2c1.6.2.3-.3 2-.1.2 0 .6.3 1.2.8.7.5-1 1-1.8 1-.6 0-1.9.3-2.8 1.6-.5.7-.4 1.8-1.3 2.9-3.3 4.3-3 2.3-3.3 2.6-1.6 2-2.4.4-2.6.6-.3.1.7.4-.8.6-.4 0-.4-.2-.7-.6-1 .1-.5-.4-.6-.4-1.5.4-1.3-.2-1.8-.4-.1 0-.3.2-.8 0-.1-.1-.8.7-1.2-.3l-.7-.2c-.2-.1.7-1.1.2-.8-.9.7-2.6.6-2.7.7-2.5 1-3 .1-3.2-.2-.7-.8-1.2.3-2.9-.1-.3-.1 1.1-.9 1-1.1l-1.2.4c-.9.5-2.9.7-3 .3-1 .1-3.2.6-3.3.4-.2-.3 1.8-.9 1-.9-1 0-4.7 1-4.8.7-.2-.6 7.8-2.1 7.5-2.6-.4-.6-5.1 1.3-9.8-.5-.7-.3 10 .3 10.3-.8 0-.1-7.7.7-10-2.1-.6-.6 4 1.9 8.3 1.4.4 0-4.4-.3-6.3-2.3-.7-.7 3.8 2.3 10.9 2 3.6-.2 15.7-3.2 16.6-3.4.6-.2 5 .6 6.6.8Z'
//       />
//     </svg>
//   );
// };

// export const MuninnTakeOff = (
//   { stroke = '#475569', fill = '#475569', from = 'greeting' },
//   { rotate = 0, moveUp = 12.5, moveRight = 17 }
// ) => {
//   const style =
//     from === 'greeting' ? greetingPositionStyle : shoulderPositionStyle;

//   return (
//     <motion.svg
//       // initial='perched'
//       // animate='takeoff'
//       // exit={{ opacity: 0, translateX: 0, translateY: 0, rotate: 0 }}
//       // transition={{
//       //   type: 'tween',
//       //   duration: 0.25,
//       // }}
//       fill='none'
//       overflow='visible'
//       viewBox='12 12 24 36'
//       // width={24}
//       // height={36}
//       // className={styles['muninn-takeoff-svg']}
//       // style={{
//       //   width: '3.8rem',
//       //   transform: 'translate(50%)',
//       //   position: 'absolute',
//       //   bottom: '7rem',
//       //   right: 'calc(50% - 7rem)',
//       // }}
//       style={greetingPositionStyle}
//     >
//       <path
//         fill={fill}
//         stroke={stroke}
//         d='M28.4 34.9c-.8-2-2.4-3.4-2.4-3.5l.2-.4 2.4-.5h.1l-1 1v.9l1.7 2.6.3 1.3c-1 1.5-.7 3.2-2.1 3-.3 0 1.2-.2 1.2-2.6 0 0 0 1.2-1.5 1.4 1.1-.3 1.1-1.7 1.1-2.2-1.4.1-1.7-1.3-3.2-.3.2-.7 1-.6 1.8-.4.8.1 1.6.2 1.4-.3Z'
//       />
//       <path
//         stroke='#475569'
//         strokeWidth='.3'
//         d='m26.2 31 2.5-.5m-2.5.5-.2.4c0 .1 1.6 1.5 2.4 3.5.2.5-.6.4-1.4.3-.8-.2-1.6-.3-1.8.4 1.5-1 1.8.4 3.2.3 0 .5 0 1.9-1.1 2.2 1.5-.2 1.5-1.5 1.5-1.4 0 2.4-1.5 2.7-1.2 2.7 1.4.1 1.2-1.6 2-3.1 0-.7 0-1-.2-1.3l-1.6-2.6c-.2-.6-.1-.8 0-.9l.8-1m0 0h.1m0 0'
//       />
//       <path
//         fill={fill}
//         stroke={stroke}
//         strokeWidth='.3'
//         d='M39.6 13c0 2-.7 1.7-3.2 5.5-6.3 4.3-7.2 6.8-8.7 4.3.4-.9-3.4-8-3.5-8.1-.7-1.2 1.4-1.4.8-1.7-1-.6 0-1.2-.2-1.3-.9-.3-.1-.7-.6-1-.3-.1-.7-.1-.9-.7-.1-.5 2.1-.1 2.1-.5s-3.2-1.3-2.3-1.8c.8-.6 4.6 1 4.6.8 0-.4-4-2.5-3.7-3.4.4-.8 6.5 3.2 6.6 2.8.2-.4-5-3.8-5-6.3 0-.6 7.2 6.3 7.3 6 .1-.2-5.4-5-4.5-5.7.8-.7 7.2 6.9 7.4 6.7.3-.1-2.4-2.4-2-3 .3-.5 3.7 2.3 4.1 5.4.1.5 1.7-.1 1.7 2Z'
//       />
//       <path
//         fill={fill}
//         // stroke={stroke}
//         d='M42.4 19.5c.2.6 1.7 1 2.9 2.7-.7.3-3.9-.7-4.3-.4-1.2 1-2.5 1.2-5 3-.5.2-1.8 1.7-2.4 2.3-.6.6-.9 1.4-1.8 2.4a7 7 0 0 1-3 1l-2.5.4s-1 .9-1 2l2.5 3.2c1.6 2 1.6 2.3 1.5 2.8l-.5.2v.4c.1.6-.3.8-.5 1 .1-.2.3-.5.3-.9 0-.1-.4 0-.3-.1.3-.9-.4-2.8-.6-2.5v2.2c-.3.4-.7.6-.7.6s.6-.6.3-1c-.2-.2 0-2-.2-2.1 0-.1-1.4-.2-1.8-.6-.7-.7-1.7.7-1.4.3.5-.8.9-1.1 2-.4.3.2 1 0 1-.2l-2.3-2.5-.7-.7c-.3-.3-.3-1.4-.5-.8-.3.4-2.9 3.9-3.8 4.6-.2-.1.6-1.2 0-.6-.9.9-2 1.6-2.2 1.6-.2 0 .2-.7 0-.6-2.2 1.6-2.2 1.8-2.8 1.3-.1-.2.3-.7 0-.9-.4.7-.5.9-.7.7-.1-.1 0-.3.2-.5.3-.3-1.2.3-1.4.3-.3 0-.3-.4-.2-.6l2-2c-.8 0-2 1.4-2.8 1.3-.4 0 .1-.8 1-1.3l-1.3-.4a67 67 0 0 0 9.4-5.6c.7-1 2.4-2.3 3.5-3.4 1.2-1.1 4.8-5.8 7.8-7 2.4-.9 6.3-1.3 8-1 .5.1.6.1 1 .4.2.2 1.2.9 1.3 1.4Z'
//       />
//       <path
//         fill={fill}
//         stroke={stroke}
//         strokeWidth='.3'
//         d='M28.8 39v.5c.1.6-.4.8-.5 1-.2.1.4-.3.3-.9 0-.1-.4 0-.3-.1.3-.9-.4-2.8-.6-2.5v2.2c-.3.4-.7.6-.7.6s.6-.6.3-1c-.2-.2 0-2-.2-2.1 0-.1-1.4-.2-1.8-.6-.7-.7-1.7.7-1.4.3.5-.8.9-1.1 2-.4.3.2 1 0 1-.2l-2.3-2.5-.7-.7c-.3-.3-.3-1.4-.5-.8-.3.4-2.9 3.9-3.8 4.6-.2-.1.6-1.2 0-.6-.9.9-2 1.6-2.2 1.6-.2 0 .2-.7 0-.6-2.2 1.6-2.2 1.8-2.8 1.3-.1-.2.3-.7 0-.9-.4.7-.5.9-.7.7-.1-.1 0-.3.2-.5.3-.3-1.2.3-1.4.3-.3 0-.3-.4-.2-.6l2-2c-.8 0-2 1.4-2.8 1.3-.4 0 .1-.8 1-1.3l-1.3-.4a67 67 0 0 0 9.4-5.6c.7-1 2.4-2.3 3.5-3.4 1.2-1.1 4.8-5.8 7.8-7 2.4-.9 6.3-1.3 8-1 .5.1.6.1 1 .4.2.2 1.2.9 1.3 1.4.2.6 1.7 1 2.9 2.7-.7.3-3.9-.7-4.3-.4-1.2 1-2.5 1.2-5 3-.5.2-1.8 1.7-2.4 2.3-.6.6-.9 1.4-1.8 2.4a7 7 0 0 1-3 1l-2.5.4s-1 .9-1 2l2.5 3.2c1.6 2 1.6 2.3 1.5 2.8l-.5.2Zm0 0-.2-1.5c0-.1.4.2.4.6 0 .4.3.5-.2 1Z'
//       />
//       <path
//         fill={fill}
//         stroke={stroke}
//         strokeWidth='.3'
//         d='M34.5 18.4c1.3 1 .4 0 1.8 1l.6 1.2c.3.9-1.4.5-2.1 0-.5-.3-1.7-.7-3.3 0-.7.2-1.2 1.2-2.5 1.7-5 2-3.8.4-4.2.6-2.4 1-2.2-.8-2.5-.8-.3 0 .4.6-1 0-.4 0-.3-.3-.3-.8-.9-.4-.2-.6-.3-.7-1.5-.4-1-.8-1.4-1.2 0 0-.3 0-.6-.4 0-.2-1 0-.9-1l-.5-.5c-.1-.2 1.2-.6.6-.5-1.1.1-2.5-.8-2.7-.9-2.7-.2-2.6-1.3-2.7-1.8-.1-1-1-.3-2.3-1.5-.2-.2 1.4-.2 1.4-.5l-1.3-.2c-1 0-2.8-.9-2.7-1.3-1-.4-3-1.1-3-1.4 0-.3 2 .2 1.3-.1-1-.6-4.5-1.7-4.5-2 .2-.6 7.8 2.2 7.8 1.7 0-.7-5-1.6-8.2-5.5-.5-.6 8.5 5.3 9.3 4.6.1 0-7-3.3-7.6-7-.1-.8 2.5 3.7 6.5 5.5.4.2-3.6-2.5-4.2-5.2-.3-1 2 4 8.2 7.3 3.3 1.8 15.2 5.3 16 5.6.7.2 4 3.1 5.3 4.1Z'
//       />
//     </motion.svg>
//   );
// };

// export const MuninnPerched = ({
//   stroke = '#475569',
//   fill = '#475569',
//   from = 'greeting',
// }) => {
//   const style =
//     from === 'greeting' ? greetingPositionStyle : shoulderPositionStyle;

//   return (
//     <svg fill='none' viewBox='0 0 24 36' style={style}>
//       <path
//         fill={fill}
//         d='M24.5 2.9c-1.5-1.3-3.4-1-4.3-1-.6 0-1.8-.9-2.8-.9-1.9 0-3.9 1-4.6 1.5-.8.7-1.6 1.6-3.4 5.3-.5 1-1 1.8-2.8 2.8-1.5 1.5-2 3.2-2.5 4.3-1.2 2.8-.9 9-.9 9.2 0 .4.3.6.4.4-.1.4.8 1.8.2 2.4-.6.6-2.5 2.5-2.5 3.4 0 .8 1.2-.2 1.3-.3-.3.3-1.9 3.1-1.6 3.1.3 0 2.2.6 2.2.3s0 .3.3.3l1-.3c0 .1 0 .3.2 0 .4-.3.4-.3.4-.6s.2.3.3.6c.7 0 2.3 0 3-.3 1-.3 1.9-1.5 2.2-1.5.3 0 .5-5 .6-5 1.9.8 3.2-.6 3.1-.3-.6 3.4.3 3.4.3 3.7 0 .3 0 3.1-.3 3.1l-.6 1s-.2 0-.3.2c-.3.5-.3.6-.3 1 0-.5.3-.7.6-.7s.3 1 .3 1.3c0 .3 0-1.5 1-1.3 1 .3 1.2.6 1.2.8v.2-.7l-1-.9c-.2-.2.3-.3 0-.6s0-3.7 0-3.7.3-2 1-4c.7-2.3 1-5.8 1-6.8.2-.1.2-.2.2-.3.2.1.6-.3 1-1 .4-.8 0-4.6-.7-6.1-.6-1.5-.6-3.2 0-4 1-1.3 2.2-2.8 2.8-3.1.5-.3 2.8-1.2 4-1.5Z'
//       />
//       <path
//         stroke={stroke}
//         strokeWidth='.45'
//         d='M9.7 13.3c0 .4-.3 5 0 6 .3.8-1.3 3.3-1.9 4.5-.2.4-3.4 1.3-3.4.3 0-.3-.5.1-.8.4m13.8-6c.2.2.6-.2 1-.8.4-1 0-4.7-.7-6.2-.6-1.5-.6-3.2 0-4 1-1.3 2.2-2.8 2.8-3.1.5-.3 2.8-1.2 4-1.5-1.5-1.3-3.4-1-4.3-1-.6 0-1.8-.9-2.8-.9-1.9 0-3.9 1-4.6 1.5-.8.7-1.6 1.6-3.4 5.3-.5 1-1 1.8-2.8 2.8-1.5 1.5-2 3.2-2.5 4.3-1.2 2.8-.9 9-.9 9.2 0 .4.3.6.4.4m13.8-6c-.2 0-.3 4.4-1.2 7.2-.7 2-1 4-1 4s-.3 3.4 0 3.7c.3.3-.2.4 0 .6.3.3.8.6 1 1v.6s.3-.7-1.3-1c-1-.2-.9 1.6-.9 1.3 0-.3 0-1.3-.3-1.3s-.5.2-.6.7c0-.4 0-.5.3-1 .1-.3.3-.3.3-.3l.6-.9c.3 0 .3-2.8.3-3 0-.4-1-.4-.3-3.8 0-.3-1.2 1-3 .3-.2 0-.4 5-.7 5-.3 0-1.2 1.2-2.2 1.5-.7.2-2.3.3-3 .3-.1-.3-.3-.9-.3-.6 0 .3 0 .3-.4.6-.2.3-.3.1-.3 0l-.9.3c-.3 0-.3-.6-.3-.3s-1.9-.3-2.2-.3c-.3 0 1.3-2.8 1.6-3m14.8-11.5c0 .6-2.5 2.8-3 3.4-.7.6-.7 0-.7-.3s-4 3-4.6 3c-.7 0 0-.2 0-.9A44 44 0 0 0 2.6 30m0 0c.3-.3-1.3 1.2-1.3.3 0-1 1.9-2.8 2.5-3.4.6-.6-.3-2-.2-2.4'
//       />
//       <path
//         fill={fill}
//         stroke={stroke}
//         strokeWidth='.45'
//         d='M10.6 33.1c-.3-.3-.3-.6-.3-1.2l-.4.3h-.2c.1.3 0 1.5-.2 2.1-.2.6.5.6.5.3s.6-.3 1-.3c.2 0 .5 1 .5 1.6 0 .6.3-1.3.3-1.6 0-.3-.9-.9-1.2-1.2Z'
//       />
//     </svg>
//   );
// };

export type MuninnAspectsProps = {
  position?: 'greeting' | 'shoulder';
  // currentAspect?: (typeof muninnFlightPath)[number];
  animationIndex: number;
  moveUp?: number;
  moveRight?: number;
  rotate?: number;
  // flightPhaseIndex?: number;
};

// const Muninn = (props: MuninnAspectsProps) => {
//   const { animationIndex } = props;
//   return (
//     <div className=''>
//       {/* <MuninnPerched from='greeting' /> */}
//       <motion.ul
//       // variants={{
//       //   hidden: {
//       //     // transition: { staggerChildren: 0.5, type: 'tween', duration: 1.25 },
//       //     opacity: 0,
//       //     // translateY: '-2rem',
//       //     // translateX: '2rem',
//       //   },
//       //   visible: {
//       //     transition: { staggerChildren: 0.5, type: 'tween', delay: 3 },
//       //     // translateY: ['-2rem', '-4rem', '-50rem', '-60rem'],
//       //     translateX: ['2rem', '10rem', '30rem', '50rem'],
//       //   },
//       // }}
//       // // initial='visible'
//       // animate='visible'
//       >
//         {muninnFlightPath.map((aspect, i) => (
//           <motion.li
//             key={i}
//             // variants={{
//             //   hidden: { opacity: 0 },
//             //   visible: { opacity: 1 },
//             // }}
//             // initial='hidden'
//             // animate='visible'
//             // exit='hidden'
//           >
//             {/* {currentAspect?.toString() === aspect?.toString() && aspect} */}
//             {animationIndex === i && aspect}
//           </motion.li>
//         ))}
//       </motion.ul>
//     </div>

//     // <motion.ul
//     //     variants={{
//     //       visible: { transition: { staggerChildren: 0.5, type: 'tween' } },
//     //     }}
//     //   >
//     //     {muninnData.aspects.map((aspect, i) => (
//     //       <motion.li
//     //         key={aspect.order}
//     //         variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
//     //         initial='hidden'
//     //         animate='visible'
//     //         exit='hidden'
//     //       >
//     //         {aspect.component}
//     //       </motion.li>
//     //     ))}
//     //   </motion.ul>
//   );
// };

// export const muninnFlightPath: React.ReactNode[] = [
//   <MuninnPerched from='greeting' stroke={stroke} fill={fill} />,
//   <MuninnTakeOff from='greeting' stroke={stroke} fill={fill} />,
//   <MuninnFly1 from='greeting' stroke={stroke} fill={fill} />,
//   <MuninnFly2 from='greeting' stroke={stroke} fill={fill} />,
//   <MuninnFly1 from='greeting' stroke={stroke} fill={fill} />,
//   // rotate={-1} moveUp={14.5} moveRight={22}
//   <MuninnFly2 from='greeting' stroke={stroke} fill={fill} />,
//   // moveUp={16} moveRight={26}
//   <MuninnFly1 from='greeting' stroke={stroke} fill={fill} />,
//   <MuninnFly2 from='greeting' stroke={stroke} fill={fill} />,
//   <MuninnFly1 from='greeting' stroke={stroke} fill={fill} />,
//   <MuninnFly2 from='greeting' stroke={stroke} fill={fill} />,
// ];

export const MuninnPerched = (props: MuninnAspectsProps) => {
  const { position } = props;
  const style =
    position === 'greeting' ? greetingPositionStyle : shoulderPositionStyle;

  const { theme } = useTheme();
  const stroke = theme === 'dark' ? '#334155' : '#475569';
  const fill = theme === 'dark' ? '#334155' : '#475569';
  return (
    <svg fill='none' viewBox='0 0 24 36' overflow='visible' style={style}>
      <g>
        {perched1.map((path, i) => (
          <path
            key={i}
            fill={fill}
            stroke={stroke}
            strokeWidth='.45'
            d={path}
          ></path>
        ))}
      </g>
    </svg>
  );
};
const MuninnFlightPhase = ({ animationIndex }: MuninnAspectsProps) => {
  const { theme } = useTheme();
  const stroke = theme === 'dark' ? '#334155' : '#475569';
  const fill = theme === 'dark' ? '#334155' : '#475569';

  console.log('animationIndex', animationIndex); ////

  return (
    <motion.g
    // initial={{ opacity: 1 }}
    // animate={{ opacity: 1, x: 10, transition: { duration: 5 } }}
    >
      {animationIndex !== undefined &&
        flightPathArray[animationIndex].map((path, j) => (
          <motion.path
            key={j}
            fill={fill}
            stroke={stroke}
            strokeWidth='.45'
            d={path}
            layoutId='flight-path'
          ></motion.path>
        ))}
    </motion.g>
  );
};

const Muninn = (props: MuninnAspectsProps) => {
  const { animationIndex, position } = props;

  const style =
    position === 'greeting' ? greetingPositionStyle : shoulderPositionStyle;

  return (
    <motion.svg
      fill='none'
      viewBox='0 0 24 36'
      overflow='visible'
      style={style}
      key={animationIndex}
      layoutId='muninn-svg'
      layout
      // exit={{ y: 10 }}
      // transition={{ type: 'linear', delay: 15 }}
    >
      <MuninnFlightPhase animationIndex={animationIndex} />{' '}
    </motion.svg>
  );
};

export default Muninn;

