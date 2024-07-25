import { AlignJustify, Bell, Sun, User } from 'lucide-react'
import React from 'react'

export default function Navbar() {
  return (
    <div className='fixed top-0  flex items-center justify-between bg-slate-800 w-full h-16 px-8 py-4 text-slate-50'>
      {/*icon*/}
      <div><button><AlignJustify/></button></div>
      {/*3 icons*/}
      <div className="flex space-x-3">
        <button><Sun/></button>
        <button><Bell/></button>
        <button><User/></button>
      </div>
    </div>
  )
}
