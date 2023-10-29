import React from 'react';
import { FaGithub, FaLinkedin, FaReact, FaRegCopyright } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';
// export default function Footer() {
//   return (
//     <footer className="mb-10 px-4 text-center text-gray-500">
//       <small className="mb-2 block text-xs">
//         &copy; 2030 Mary Olive. All rights reserved.
//       </small>
//       <p className="text-xs">
//         <span className="font-semibold">About this website:</span> built with
//         React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
//         Framer Motion, React Email & Resend, Vercel hosting.
//       </p>
//     </footer>
//   );
// }
const Footer = () => {
  return (
    <footer className='mb-6 dark:text-stone-500 dark:text-opacity-80 mx-12 '>
      <div className='footer'>
        <div className=' made'>
          <p>
            Created with
            <Link className='px-2 font-bold text-lg' href='https://react.dev/'>
              <FaReact className='inline' /> +
            </Link>
            <Link className='px-2 font-bold text-lg' href='https://nextjs.org/'>
              <TbBrandNextjs className='inline opacity-75 -ml-3' /> +
            </Link>
            <Link
              className='px-2 font-bold text-lg'
              href='https://tailwindcss.com/'
              target='_blank'
            >
              {' '}
              <TbBrandTailwind className='inline opacity-75 -ml-4'></TbBrandTailwind>
            </Link>
          </p>
          <p>
            <FaRegCopyright className='inline ' /> 2023 Mary Olive{' '}
          </p>
        </div>

        <div className='contact'>
          <a href='mailto:wyrdolive@proton.me' target='_blank'>
            <HiOutlineMail />
          </a>
          <a href='https://github.com/wyrd0' target='_blank'>
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/maryolive/' target='_blank'>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

