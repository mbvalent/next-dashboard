'use client';

import React, { useEffect, useState } from 'react';
import Card from '../../Card';
import axios from 'axios';

import LineChart, { type LineChartData } from '../Chart/LineChart';
import ChartFilter from '../ChartFilter';

type Props = {};

const UserActivity = (props: Props) => {
  const [userData, setUserData] = useState<LineChartData>();

  useEffect(() => {
    axios.get('/api/activity').then((res) => {
      const UserData = res.data;
      setUserData({
        labels: UserData.map((data) => data.week),
        datasets: [
          {
            label: 'User',
            data: UserData.map((data) => data.user),
            borderColor: '#E9A0A0',
            borderWidth: 3,
            fill: false,
            tension: 0.6,
            pointRadius: 0,
          },
          {
            label: 'Guest',
            data: UserData.map((data) => data.guest),
            borderColor: '#9BDD7C',
            borderWidth: 3,
            fill: false,
            tension: 0.6,
            pointRadius: 0,
          },
        ],
      });
    });

    return () => {};
  }, []);

  // const htmlLegendPlugin = {
  //   id: 'htmlLegend',
  //   afterUpdate(chart) {
  //     const items = chart.options.plugins.legend.labels.generateLabels(chart);
  //     const ul = document.createElement('ul');
  //     items.forEach((item) => {
  //       const li = document.createElement('li');
  //       const boxSpan = document.createElement('span');
  //       boxSpan.style.background = item.fillStyle;
  //       li.appendChild(boxSpan);
  //       li.appendChild(document.createTextNode(item.text));
  //       ul.appendChild(li);
  //     });
  //     const jsLegend = document.getElementById('js-legend');
  //     jsLegend?.appendChild(ul);
  //   },
  // };

  return (
    <Card className='h-[400px] w-full px-10 bg-white rounded-sm py-7'>
      <h3 className='text-lg font-bold'>Activities</h3>
      <div className='relative h-full pb-7'>
        <ChartFilter className='absolute' />
        <LineChart
          //TODO: plugins={}
          chartData={userData}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                ticks: {
                  stepSize: 100,
                },
                grid: {
                  color: '#EAEAEA',
                  lineWidth: 1,
                },
              },
            },
            plugins: {
              legend: {
                display: true,
                position: 'top',
                align: 'end',
                labels: {
                  font: {
                    family: 'lato',
                    size: 14,
                    weight: '400',
                  },
                  usePointStyle: true,
                  boxWidth: 20,
                  boxHeight: 5,
                },
              },
            },
          }}
        />
      </div>
    </Card>
  );
};

export default UserActivity;
