'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';
import Image from 'next/image';
import { Skeleton } from '../Skeleton';
import CountUp from 'react-countup';

type Props = {};

type OverviewItem = {
  title: string;
  stat: number;
  icon: string;
  type: 'currency';
};

const Overview = (props: Props) => {
  const [overviewItems, setOverviewItems] = useState<OverviewItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/overview')
      .then((res) => {
        setOverviewItems(res.data || []);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
      {loading ? (
        <>
          {Array.from(Array(4).keys()).map((_, i) => {
            return <Skeleton key={i} className='w-full h-[120px]' />;
          })}
        </>
      ) : (
        <>
          {overviewItems.map((item) => {
            return (
              <Card key={item.title} className='w-full h-[120px] relative rounded-sm bg-[#DDEFE0]'>
                <div className='absolute bottom-0 left-0 mb-5 ml-6'>
                  <p className='pb-1 text-sm break-words font-lato'>{item.title}</p>
                  <h1 className='text-2xl font-bold lg:max-xl:text-lg'>
                    <CountUp
                      start={0}
                      end={item.stat}
                      prefix={item.type === 'currency' ? '$' : ''}
                    />
                  </h1>
                </div>
                <div className='absolute top-0 right-0 mt-5 mr-6'>
                  <Image src={item.icon} alt='revenue' width={25} height={25} />
                </div>
              </Card>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Overview;
