import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

type Props = {
  className?: string;
};

const ActivityFilter = ({ className }: Props) => {
  //TODO: make filter functional
  return (
    <button className={cn('absolute', className)}>
      <span className='text-sm font-normal text-secondary-text'>May - June 2021</span>
      <Image className='inline ml-1' src={'/caret_down_icon.svg'} alt='more' width={8} height={5} />
    </button>
  );
};

export default ActivityFilter;
