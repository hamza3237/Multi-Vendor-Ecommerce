import { Check, RefreshCcw, ShoppingCart, Truck } from 'lucide-react'
import React from 'react'

export default function SmallCarad() {
    const data=[
        {
            icon: <ShoppingCart className="w-5 h-5"/> ,
            h5: "Total Order" ,
            h2: "188" ,
            
       className:"bg-orange-400"
        },
        {
            icon: <RefreshCcw className="w-5 h-5"/> ,
            h5: "Orders Pending" ,
            h2: "55" ,
            className:"bg-blue-500"
        },
        {
            icon: <Truck className="w-5 h-5"/> ,
            h5: "Orders Processing" ,
            h2: "24" ,
             className:"bg-cyan-600"
        },
        {
            icon: <Check className="w-5 h-5"/> ,
            h5: "Orders Delivered",
            h2: "85" ,
            className:"bg-emerald-600"
        }


    ]
  return (
    <div className='grid grid-cols-4 gap-4 py-4'>
      {data.map((data,index)=>(
      <div key={index} className='bg-slate-700 rounded-lg flex flex-row items-center j gap-1 p-4 py-6 '>
        <div className={`${data.className} p-4 rounded-full `}>{data.icon}</div>
        <div className='flex flex-col'>
            <h5>{data.h5}</h5>
            <h2>{data.h2}</h2>
        </div>
      </div>

      ))}
    </div>
  )
}
