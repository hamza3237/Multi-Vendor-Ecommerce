'use client';

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {
  const data = {
    labels: ['Yellow Sweet Corn', 'Mint', 'Oraganic Baby Carrot',' Calabaza Squash'],
    datasets: [
      {
        data: [55, 24, 13,13],
        backgroundColor: ['#10B981', '#136EFF', '#F46600','#0EA5E9' ],
        borderColor: ['#fff', '#fff', '#fff','#fff'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className='bg-slate-700 p-8 rounded-lg'>
      <h2 className='text-xl font-bold  mb-4'>Best Selling Products</h2>

      <div className='flex justify-center items-center'>
        <div className='relative h-[300px] w-[300px]   flex items-center justify-center'>
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
}





