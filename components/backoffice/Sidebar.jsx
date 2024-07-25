import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className='fixed top-0 left-0 bg-slate-700 space-y-6 w-52 h-screen p-3 text-slate-50'>
      <Link href="#">logo</Link>
      <div className='flex flex-col space-y-3'>
      <Link href="#">Dashboard</Link>
      <Link href="#">Catalog</Link>s
      <Link href="#">Customers</Link>
      <Link href="#">Markets</Link>
      <Link href="#">Formers</Link>
      <Link href="#">Order</Link>
      <Link href="#">Our staff</Link>
      <Link href="#">Settings</Link>
      <Link href="#">International</Link>
      <Link href="#">Online Store</Link>

      </div>
    </div>
  )
}
