import { cn } from '@/lib/utils';
import React from 'react';

enum Priority {
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low',
}

type Props = {
  title: string;
  time: string;
  location: string;
  priority: string;
};

const Callout = ({ title, time, location, priority }: Props) => {
  return (
    <div className='flex gap-4'>
      <div
        className={cn('border-[#98989c] border-[5px] min-h-full shadow-lg', {
          'border-[#9BDD7C]': priority === Priority.HIGH,
          'border-[#6972C3]': priority === Priority.MEDIUM,
          'border-[#98989c]': priority === Priority.LOW,
        })}
      ></div>
      <div className='flex flex-col gap-1'>
        <h4 className='text-[#666666] text-sm font-bold break-all line-clamp-2 font-lato'>
          {title}
        </h4>
        <p className='text-xs font-lato text-[#999999]'>{time}</p>
        <p className='text-xs font-lato text-[#999999]'>{location}</p>
      </div>
    </div>
  );
};

export default Callout;
