'use client';

import React, { useEffect, useState } from 'react';
import Card from '../../Card';
import ChartFilter from '../ChartFilter';
import axios from 'axios';
import PieChart, { PieChartData } from '../Chart/PieChart';
import { Skeleton } from '../../Skeleton';

type Props = {};
interface IproductItem {
  id: number;
  label: string;
  data: number;
}

const TopProducts = (props: Props) => {
  const [productData, setProductData] = useState<PieChartData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<IproductItem[]>('/api/product')
      .then((res) => {
        const productData = res.data;
        setProductData({
          labels: productData.map((data) => data.label),
          datasets: [
            {
              label: 'Top Products',
              data: productData.map((data) => data.data),
              backgroundColor: ['#EE8484', '#F6DC7D', '#98d89e'],
              borderWidth: 0,
            },
          ],
        });
      })
      .finally(() => setLoading(false));

    return () => {};
  }, []);

  if (loading) {
    return <Skeleton className='h-[256px] w-full' />;
  }

  return (
    <Card className='min-h-[256px] w-full bg-white rounded-sm px-10 py-7'>
      <div className='flex justify-between mb-5'>
        <h3 className='text-lg font-bold'>Top products</h3>
        <ChartFilter />
      </div>
      <div className='w-[99%]'>
        <PieChart
          chartData={productData}
          options={{
            maintainAspectRatio: false,
            responsive: true,

            plugins: {
              legend: {
                display: true,
                position: 'right',
                align: 'center',
                labels: {
                  font: {
                    family: 'lato',
                    size: 14,
                    weight: '400',
                  },
                  usePointStyle: true,
                  boxWidth: 20,
                  boxHeight: 5,
                  padding: 20,
                },
              },
            },
          }}
        />
      </div>
    </Card>
  );
};

export default TopProducts;
