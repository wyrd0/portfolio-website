import Header from '@/components/header';
import './globals.css';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import { Josefin_Sans } from 'next/font/google';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';

const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false,
});

export const metadata = {
  title: 'Mary Olive | Personal Portfolio',
  description: 'Full-stack developer portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${josefin_sans.className} bg-stone-100 text-slate-700 relative  dark:bg-slate-800 dark:text-stone-400 `}
      >
        <div className='bg-slate-300 absolute top-[56rem] right-[8rem] h-[32rem] w-[32rem] rounded-full blur-[14rem] -z-10 sm:w-[68.75] dark:bg-stone-300 dark:opacity-40 dark:top-[6rem] dark:right-[3rem] dark:h-[10rem]'></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster
              position='bottom-center'
              containerStyle={{
                bottom: 300,
              }}
              toastOptions={{
                success: {
                  style: {
                    // border: 'solid 1px #94a3b8',
                    padding: '16px',
                    backgroundColor: '#f1f5f9',
                    color: '#0f766e',
                  },
                  iconTheme: {
                    primary: '#0f766e',
                    secondary: '#d1fae5',
                  },
                },
                error: {
                  style: {
                    // border: 'solid 1px #f87171',
                    padding: '16px',
                    backgroundColor: '#f1f5f9',
                    color: '#b91c1c',
                  },
                  iconTheme: {
                    primary: '#b91c1c',
                    secondary: '#fee2e2',
                  },
                },
              }}
            />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <div className='bg-slate-300 absolute bottom-[36rem] left-[10rem] h-[32rem] w-[32rem] rounded-full blur-[16rem] -z-10 sm:w-[68.75] dark:bg-stone-500 dark:opacity-50 dark:bottom-[40rem] dark:-left-[10rem] dark:h-[70rem] dark:blur-[32rem]'></div>
      </body>
    </html>
  );
}

