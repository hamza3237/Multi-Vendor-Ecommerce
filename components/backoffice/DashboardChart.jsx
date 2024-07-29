import React from 'react'
import WeeklySalesChart from './WeeklySalesChart'
import BestSellingPoductsChart from './BestSellingPoductsChart'

export default function DashboardChart() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4' >
      <WeeklySalesChart/>
      <BestSellingPoductsChart/>
    </div>
  )
}
