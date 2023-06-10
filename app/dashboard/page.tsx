import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import Topbar from '../components/Dashboard/Topbar/Topbar';
import Overview from '../components/Dashboard/Overview';
import UserActivity from '../components/Dashboard/UserActivity/UserActivity';
import TopProducts from '../components/Dashboard/TopProducts/TopProducts';

type Props = {};

const page = (props: Props) => {
  return (
    <div className='flex justify-between max-h-screen min-h-screen gap-10 p-10 overflow-hidden bg-background'>
      <div className='basis-[280px]'>
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
            <TopProducts />
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
