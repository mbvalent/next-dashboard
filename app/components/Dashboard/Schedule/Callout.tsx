import React from 'react';

type Props = {
  title: string;
  time: string;
  location: string;
  color: string;
};

const Callout = ({ title, time, location, color }: Props) => {
  return (
    <div className='flex gap-4'>
      <div className={`border-[${color}] border-[5px] min-h-full shadow-lg`}></div>
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
