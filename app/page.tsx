import About from '@/components/about';
import Contact from '@/components/contact-section/contact';
import Experience from '@/components/experience-section/experience';
import Intro from '@/components/intro-section/intro';
import Projects from '@/components/projects';
import {
  VerticalSectionDivider,
  HorizontalSectionDivider,
} from '@/components/section-divider';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <VerticalSectionDivider />
      <About />
      <HorizontalSectionDivider />
      <Projects />
      <HorizontalSectionDivider />
      <Skills />
      <HorizontalSectionDivider />
      <Experience />
      <HorizontalSectionDivider />
      <Contact />
    </main>
  );
}

