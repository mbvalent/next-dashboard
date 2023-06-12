import React from 'react';
import dynamic from 'next/dynamic';

import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import Topbar from '../components/Dashboard/Topbar/Topbar';
import Overview from '../components/Dashboard/Overview';
import UserActivity from '../components/Dashboard/UserActivity/UserActivity';
import { Skeleton } from '../components/Skeleton';

const DynamicTopProducts = dynamic(
  () => import('../components/Dashboard/TopProducts/TopProducts'),
  {
    loading: () => <Skeleton className='h-[256px] w-full' />,
  }
);

const DynamicSchedule = dynamic(() => import('../components/Dashboard/Schedule/Schedule'), {
  loading: () => <Skeleton className='h-[256px] w-full' />,
});

type Props = {};

const page = (props: Props) => {
  return (
    <div className='flex justify-between max-h-screen min-h-screen gap-4 p-4 overflow-hidden md:gap-7 xl:gap-10 md:p-7 xl:p-10 bg-background'>
      <div className='basis-[280px] hidden md:block'>
        <Sidebar />
      </div>
      <main className='flex-1 pt-5 pr-2'>
        <Topbar />
        <div className='h-full pb-10 overflow-auto'>
          <section className='mt-5 mb-10'>
            <Overview />
          </section>
          <section className='my-10'>
            <UserActivity />
          </section>
          <div className='grid gap-4 my-10 lg:gap-10 md:grid-cols-1 lg:grid-cols-2'>
            <DynamicTopProducts />
            <DynamicSchedule />
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
