import { CreditCard, Layers, ShoppingCart } from "lucide-react";
import React from "react";

export default function LargeCards() {
  const data = [
    {
      icon: <Layers className="w-8 h-8" />,
      h4: "Today Orders",
      h2: "$1510.16",
      p1:"Cash : $1510.16",
      p2:"Card : $0.00",
      p3:"Credit : $0.00",
     className:"bg-teal-600"

    },
    {
      icon: <Layers className="w-8 h-8" />,
      h4: "Yesterday Orders",
      h2: "$0.00",
      p1:"Cash : $1510.16",
      p2:"Card : $0.00",
      p3:"Credit : $0.00",
       className:"bg-orange-400"

    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      h4: "This Month",
      h2: "$15075.90",
       className:"bg-blue-500"
    },
    {
      icon: <CreditCard className="w-8 h-8"/>,
      h4: "Last Month",
      h2: "$32681.88",
       className:"bg-cyan-600"
    },
    {
      icon: <CreditCard className="w-8 h-8"/>,
      h4: "All-Time Sales",
      h2: "$141305.18",
       className:"bg-emerald-600"
     
    },
  ];

  return(
   <div className="grid grid-cols-5 gap-2 py-4 ">
    {data.map((data,index)=>(
          <div key={index} className={`rounded-lg flex flex-col   py-6 items-center justify-between bg-red-600 ${data.className}`}  >
            <div className="py-1">{data.icon}</div>
           <h4 className=" ">{data.h4}</h4>
           <h2 className="font-bold text-xl">{data.h2}</h2>
            <div className="flex flex-row text-xs px-6 py-2">
             <h5>{data.p1}</h5>
             <h5>{data.p2}</h5>
             <h5>{data.p3}</h5>
           
            </div>
          </div>

    ))}


  </div>
  );
}
