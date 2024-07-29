'use client';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

export default function WeeklySalesChart() {
  const tabs = [
    {
      title: "Sales",
      type: 'sales',
    },
    {
      title: "Orders",
      type: 'orders',
    },
  ];

  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

  const salesData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Sales',
        data: [200, 400, 800, 1600, 1200, 900, 500],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        fill: true,
      },
    ],
  };

  const ordersData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Orders',
        data: [10, 15, 20, 25, 18, 12, 8],
        borderColor: '#F97316',
        backgroundColor: 'rgba(249, 115, 22, 0.5)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#E2E8F0', // Tailwind CSS class 'text-slate-200'
        },
      },
      title: {
        display: true,
        text: 'Weekly Performance',
        color: '#E2E8F0', // Tailwind CSS class 'text-slate-200'
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#E2E8F0', // Tailwind CSS class 'text-slate-200'
        },
      },
      y: {
        ticks: {
          color: '#E2E8F0', // Tailwind CSS class 'text-slate-200'
        },
      },
    },
  };

  return (
    <div className='bg-slate-700 p-8 rounded-lg'>
      <h2 className='text-xl font-bold text-slate-200 mb-4'>Weekly Performance</h2>

      <div className="text-sm font-medium text-center text-slate-200 border-b border-gray-400 dark:text-gray-400 dark:border-gray-700 mb-4">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab, i) => (
            <li className='me-2' key={i}>
              <button
                onClick={() => setChartToDisplay(tab.type)}
                className={chartToDisplay === tab.type
                  ? "inline-block p-4 text-orange-500 border-b-2 border-orange-500 rounded-t-lg active dark:text-orange-500 dark:border-orange-500"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-300 hover:border-gray-100 dark:hover:text-gray-100"}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className='relative h-[300px] w-full'>
        {chartToDisplay === 'sales' && <Line data={salesData} options={options} />}
        {chartToDisplay === 'orders' && <Line data={ordersData} options={options} />}
      </div>
    </div>
  );
}

