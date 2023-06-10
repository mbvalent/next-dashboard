'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import type { ChartData, ChartOptions, Plugin } from 'chart.js';
import { CategoryScale, Chart, LinearScale, PointElement, LineElement, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);

export type LineChartData = ChartData<'line'>;
type Props = { chartData: LineChartData | undefined; options?: ChartOptions; plugins?: Plugin[] };

function LineChart({ chartData, options = {}, plugins = [] }: Props) {
  if (chartData) {
    return <Line data={chartData} options={options} plugins={plugins} />;
  }
  return null;
}

export default LineChart;
