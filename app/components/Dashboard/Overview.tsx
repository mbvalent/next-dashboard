'use client';
import React, { useEffect } from 'react';
import axios from 'axios';
import Card from '../Card';
import Image from 'next/image';

type Props = {};

type OverviewItem = {
  title: string;
  stat: number | string;
  icon: string;
};

const overviewItems: OverviewItem[] = [
  {
    title: 'Total Revenues',
    stat: '$2,129,430',
    icon: '/revenue_icon.svg',
  },
  {
    title: 'Total Transactions',
    stat: '1520',
    icon: '/total_transactions_icon.svg',
  },
  {
    title: 'Total Likes',
    stat: '9712',
    icon: '/total_likes.svg',
  },
  {
    title: 'Total Users',
    stat: '892',
    icon: '/total_users.svg',
  },
];

const Overview = (props: Props) => {
  useEffect(() => {
    axios.get('/api/overview').then((res) => {
      /*
        TODO:
        1. Use API data
        2. Format data based on stat type
      */
      console.log('res', res);
    });
  }, []);

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {overviewItems.map((item) => {
        return (
          <Card key={item.title} className='w-full h-[120px] relative rounded-sm bg-[#DDEFE0]'>
            <div className='absolute bottom-0 left-0 mb-5 ml-6'>
              <p className='pb-1 text-sm break-words font-lato'>{item.title}</p>
              <h1 className='text-2xl font-bold lg:max-xl:text-lg'>{item.stat}</h1>
            </div>
            <div className='absolute top-0 right-0 mt-5 mr-6'>
              <Image src={item.icon} alt='revenue' width={25} height={25} />
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Overview;
