import React from 'react';
import Card from '../Card';
import Link from 'next/link';
import Navlink from './Navlink';

type Props = {};

type DashboardLink = {
  text: string;
  icon: string;
  link: string;
  isActive?: boolean;
};

const dashboardLinks: DashboardLink[] = [
  {
    text: 'Dashboard',
    icon: '/dashboard_icon.svg',
    link: '/home',
    isActive: true,
  },
  {
    text: 'Transactions',
    icon: '/transaction_icon.svg',
    link: '/transactions',
  },
  {
    text: 'Schedules',
    icon: '/schedule_icon.svg',
    link: '/schedules',
  },
  {
    text: 'Users',
    icon: '/user_icon.svg',
    link: '/users',
  },
  {
    text: 'Settings',
    icon: '/setting_icon.svg',
    link: '/settings',
  },
];

const footerLinks = [
  {
    text: 'Help',
    link: '/help',
  },
  {
    text: 'Contact Us',
    link: '/contact',
  },
];

const Sidebar = (props: Props) => {
  return (
    <Card className='h-full flex flex-col justify-between rounded-md py-[60px] px-[50px] bg-black text-white'>
      <aside className='flex flex-col overflow-hidden'>
        <h1 className='text-4xl font-bold pb-[60px]'>Board.</h1>
        <div className='flex flex-col gap-10 flex-grow overflow-auto overscroll-contain'>
          {dashboardLinks.map(({ text, icon, link, isActive }) => {
            return <Navlink key={text} icon={icon} text={text} link={link} isActive={isActive} />;
          })}
          {dashboardLinks.map(({ text, icon, link, isActive }) => {
            return <Navlink key={text} icon={icon} text={text} link={link} isActive={isActive} />;
          })}
        </div>
      </aside>
      <footer className='mt-8'>
        <nav className='flex flex-col gap-5'>
          {footerLinks.map(({ link, text }) => (
            <Link key={text} href={link} className='font-normal text-sm block'>
              {text}
            </Link>
          ))}
        </nav>
      </footer>
    </Card>
  );
};

export default Sidebar;
