import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { TbMicroscope } from 'react-icons/tb';
import { CiBeerMugFull } from 'react-icons/ci';
import { SiDotnet } from 'react-icons/si';
import ScheduleDashboard from '@/public/ScheduleDashboard.png';
import retrogradeObserverImg from '@/public/retrogradeObserver_placeholder.png';
import CroningMuseImg from '@/public/croning-muse.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Student',
    location: 'Remote',
    description:
      'Taking Javascript, Typescript, Next.js, React and CSS courses and building portfolio.',
    icon: React.createElement(LuGraduationCap),
    descDate: 'CURRENT',
    date: '2023',
    id: '0_sabatical',
  },
  {
    title: 'Software Developer',
    location: 'Hybrid / Remote',
    description:
      'Worked in an Agile team to build, maintain and support complex, data driven ASP.NET SaaS applications.',
    icon: React.createElement(SiDotnet),

    descDate: '2017 - 2023',
    date: '2023',
    id: '1_vt',
  },
  {
    title: 'Student',
    location: 'Detroit, MI',
    description: 'Graduated from the .NET Bootcamp at Grand Circus.',
    icon: React.createElement(LuGraduationCap),
    date: '2016',
    descDate: '2016',
    id: '2_gc',
  },
  {
    title: 'Host, Donut Maker',
    location: 'Ferndale, MI',
    description:
      'Maintained knowledge of the fast moving Craft Beer industry, participated in team education and facilitated Guest experience and flow;  Interacted with Guests, made Espresso and made Donuts from scratch in a team of 3.',
    icon: React.createElement(CiBeerMugFull),
    descDate: '2015 - 2016',
    date: '2016',
    id: '3_oeb',
  },
  {
    title: 'Confocal Imaging Specialist',
    location: 'Detroit, MI',
    description:
      'Assessed cell surface markers using Confocal Microscopy and provided consultation on sample preparation, analysis and imaging.',
    icon: React.createElement(TbMicroscope),
    descDate: '2013 - 2016',
    date: '2016',
    id: '4_prb',
  },
  {
    title: 'Core Facility Manager',
    location: 'Detroit, MI',
    description:
      'Provided technical training and support for research students and faculty for a variety of microscopy, imaging and analysis applications; Managed equipment and software upgrades and maintenance for > 10 microscopes and workstations; Prepared research, image analysis and original artwork for publication.',
    icon: React.createElement(TbMicroscope),
    descDate: '2005 - 2013',
    date: '2013',
    id: '5_micr',
  },
  {
    title: 'Research Assistant',
    location: 'Detroit, MI',
    description:
      'Prepared and performed analysis on histological tissue samples and collaborated with lab members to prepare grant applications and maintain laboratory operations.',
    icon: React.createElement(TbMicroscope),
    descDate: '2001 - 2005',
    date: '2005',
    id: '6_babb',
  },
  {
    title: 'Student',
    location: 'Austin, TX',
    description:
      'Completed course work at Austin Community College and The University of Texas at Austin to graduate with a major in Psychology and a minor in Biology.',
    icon: React.createElement(LuGraduationCap),
    descDate: '1996 - 2001',
    date: '2001',
    id: '7_ut',
  },
] as const;

export const projectsData = [
  {
    title: 'Croning Muse (Blog)',
    description: 'A static blog with markdown support.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Markdown'],
    imageUrl: CroningMuseImg,
    experienceId: '0_sabatical',
    id: '01',
  },

  {
    title: 'Retrograde Observer',
    description:
      'A public web app for observation and retrospective research of retrograde periods of planetary cycles. ',
    tags: ['React', 'Next.js', 'SQL', 'Visx', 'Framer'],
    imageUrl: retrogradeObserverImg,
    experienceId: '0_sabatical',
    id: '02',
  },
  {
    title: 'Schedule Dashboard',
    description:
      'I worked as a back-end developer at Viva Tracker (now held by iQmetrix) for 6 years. This is a report I created to help clients track scheduled and actual sales hours across stores, per district.',
    tags: ['SQL', 'C#', 'ASP.NET', 'Javascript', 'Telerik'],
    imageUrl: ScheduleDashboard,
    experienceId: '1_vt',
    id: '03',
  },
] as const;

export const skillsData = [
  'C#',
  'SQL',
  'ASP.NET',
  'CSS',
  'HTML',
  'Git',
  'JavaScript',
  'TypeScript',
  'Figma',
  'React',
  'Next.js',
  'Tailwind',
  'Framer Motion',
  'SVG',
] as const;

