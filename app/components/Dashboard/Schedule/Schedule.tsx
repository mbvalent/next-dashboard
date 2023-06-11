'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Card from '../../Card';
import Callout from './Callout';
import axios from 'axios';
import { Skeleton } from '../../Skeleton';

type Props = {};

enum Priority {
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low',
}

function Schedule({}: Props) {
  const [scheduleData, setScheduleData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('/api/schedule', {
        params: {
          count: 2,
        },
      })
      .then((res) => {
        setScheduleData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {};
  }, []);

  const getPriorityColor = (priority: Priority) => {
    switch (priority) {
      case Priority.HIGH:
        return '#9BDD7C';
      case Priority.MEDIUM:
        return '#6972C3';
      case Priority.LOW:
        return '#9BDD7C';
      default:
        return Priority.LOW;
    }
  };

  if (loading) {
    return <Skeleton className='h-[256px] w-full' />;
  }

  return (
    <Card className='h-[256px] w-full bg-white rounded-sm px-10 py-7'>
      <div className='flex justify-between mb-6'>
        <h3 className='text-lg font-bold'>Today’s schedule</h3>
        <button className={'inline-flex justify-center items-center'}>
          <span className='flex-shrink-0 text-sm font-normal text-secondary-text'>
            {/* label */}
            See All
          </span>
          <Image
            className='flex-shrink-0 inline ml-1'
            src={'/caret_right_icon.svg'}
            alt='more'
            width={5}
            height={5}
          />
        </button>
      </div>
      {scheduleData.length ? (
        <div className='flex flex-col gap-3'>
          {scheduleData.map(({ title, time, location, priority }) => (
            <Callout
              key={title}
              title={title}
              time={time}
              location={location}
              color={getPriorityColor(priority)}
            />
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center'>No schedules</div>
      )}
    </Card>
  );
}

export default Schedule;
