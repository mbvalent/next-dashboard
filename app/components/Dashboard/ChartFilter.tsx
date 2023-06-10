import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

type Props = {
  className?: string;
};

const ChartFilter = ({ className }: Props) => {
  //TODO: make filter functional
  return (
    <button className={cn('inline-flex justify-center items-center', className)}>
      <span className='flex-shrink-0 text-sm font-normal text-secondary-text'>
        {/* label */}
        May - June 2021
      </span>
      <Image
        className='flex-shrink-0 inline ml-1'
        src={'/caret_down_icon.svg'}
        alt='more'
        width={8}
        height={5}
      />
    </button>
  );
};

export default ChartFilter;
