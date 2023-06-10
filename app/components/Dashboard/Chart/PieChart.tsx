'use client';

import React from 'react';
import { Pie } from 'react-chartjs-2';
import type { ChartData, ChartOptions, Plugin } from 'chart.js';
import { Chart, Legend, ArcElement, Tooltip } from 'chart.js';

Chart.register(Legend, ArcElement, Tooltip);

export type PieChartData = ChartData<'pie'>;
type Props = {
  chartData: PieChartData | undefined;
  options?: ChartOptions;
  plugins?: Plugin<'pie'>[];
};

function PieChart({ chartData, options = {}, plugins = [] }: Props) {
  if (chartData) {
    return <Pie data={chartData} options={options} plugins={plugins} />;
  }
  return null;
}

export default PieChart;
