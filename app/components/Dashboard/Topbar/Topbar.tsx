import React from 'react';
import { Input } from '../../Input';
import Options from './Options';
import UserMenu from './UserMenu';

import { SidebarOpen } from 'lucide-react';
import FullScreenSheet from '../Sidebar/FullscreenSheet';
import Sidebar from '../Sidebar/Sidebar';

const Topbar = () => {
  return (
    <div className='flex justify-between pb-5'>
      <h1 className='inline-flex items-center justify-center text-2xl font-bold'>
        <FullScreenSheet
          trigger={
            <button className='inline mr-2 md:hidden hover:opacity-70'>
              <SidebarOpen className='w-10 h-10' />
            </button>
          }
        >
          <div className='flex items-center justify-center py-5 overflow-auto'>
            <Sidebar />
          </div>
        </FullScreenSheet>
        Dashboard
      </h1>
      <div className='flex items-center'>
        <div className='mr-[30px]'>
          <Input
            className='bg-white h-[30px] w-[180px] pl-4 pr-8 py-1.5'
            icon={'/search_icon.svg'}
            iconPlacement={'right'}
            placeholder='Search...'
          />
        </div>
        <div className='flex items-center justify-between gap-5'>
          <Options />
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
