import { CreditCard, Layers, ShoppingCart } from "lucide-react";
import React from "react";

export default function LargeCards() {
  const data = [
    {
      icon: <Layers className="w-8 h-8" />,
      h4: "Today Orders",
      h2: "$1510.16",
      p1: "Cash : $1510.16",
      p2: "Card : $0.00",
      p3: "Credit : $0.00",
      className: "bg-teal-600"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      h4: "Yesterday Orders",
      h2: "$0.00",
      p1: "Cash : $0.00",
      p2: "Card : $0.00",
      p3: "Credit : $0.00",
      className: "bg-orange-400"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      h4: "This Month",
      h2: "$15075.90",
      className: "bg-blue-500"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      h4: "Last Month",
      h2: "$32681.88",
      className: "bg-cyan-600"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      h4: "All-Time Sales",
      h2: "$141305.18",
      className: "bg-emerald-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-4">
      {data.map((item, index) => (
        <div
          key={index}
          className={`rounded-lg flex flex-col items-center justify-between p-4 ${item.className}`}
        >
          <div className="py-2">{item.icon}</div>
          <h4 className="text-white text-lg font-semibold">{item.h4}</h4>
          <h2 className="text-white font-bold text-2xl">{item.h2}</h2>
          <div className="flex flex-col text-xs text-white mt-2">
            {item.p1 && <h5>{item.p1}</h5>}
            {item.p2 && <h5>{item.p2}</h5>}
            {item.p3 && <h5>{item.p3}</h5>}
          </div>
        </div>
      ))}
    </div>
  );
}
