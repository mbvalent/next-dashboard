import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import Topbar from '../components/Dashboard/Topbar/Topbar';
import Overview from '../components/Dashboard/Overview';

type Props = {};

const page = (props: Props) => {
  return (
    <div className='flex justify-between max-h-screen min-h-screen gap-10 p-10 overflow-hidden bg-background'>
      <div className='basis-[280px]'>
        <Sidebar />
      </div>
      <div className='flex-1 pt-5 pr-2'>
        <Topbar />
        <div className='my-10'>
          <Overview />
        </div>
      </div>
    </div>
  );
};

export default page;
