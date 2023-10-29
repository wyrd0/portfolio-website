import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';

const ReactVerticalTimeline = () => {
  return (
    <VerticalTimeline lineColor='' animate={false}>
      {experiencesData.map((item, i) => (
        <React.Fragment key={i}>
          <VerticalTimelineElement
            visible
            contentStyle={{
              background: '#e7e5e4',
              boxShadow: 'none',
              border: '2 px solid #d6d3d1',
              textAlign: 'left',
              padding: '1.1rem 1.2rem',

              maxWidth: '500px',
            }}
            contentArrowStyle={{
              borderRight: '0.4rem solid #d6d3d1',
            }}
            date={item.date}
            dateClassName='text-stone-400 mx-4'
            icon={item.icon}
            iconStyle={{
              background: '#fafaf9',
              fontSize: '1.5rem',
            }}
          >
            <h3 className='font-semibold !capitalize'>{item.title}</h3>
            <p className='!font-light !text-sm !mt-0 text-slate-400 mb-1'>
              {item.location}
            </p>
            <p className='!mt-1 !font-light text-slate-500 !text-sm'>
              {item.description}
            </p>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </VerticalTimeline>
  );
};
export default ReactVerticalTimeline;

