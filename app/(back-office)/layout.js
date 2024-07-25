import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar/>

      <div className="w-full ml-52">
        {/* header */}
        <Navbar />
        {/* main body */}
        <main className="mt-16 p-8 bg-slate-900 text-slate-50 min-h-screen">{children}</main>
      </div>
      {/* main body */}
    </div>
  );
}
