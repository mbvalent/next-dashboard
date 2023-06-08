import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';

type Props = {};

const page = (props: Props) => {
  return (
    <div className='bg-background p-10 min-h-screen max-h-screen overflow-hidden flex justify-between gap-10'>
      <div className='basis-[280px]'>
        <Sidebar />
      </div>
      <div className='flex-1 pt-5 pr-2'>Other content</div>
    </div>
  );
};

export default page;
