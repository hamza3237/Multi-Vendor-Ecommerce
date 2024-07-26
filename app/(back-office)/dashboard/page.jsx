import Heading from '@/components/backoffice/Heading'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCarad from '@/components/backoffice/SmallCarad'
import React from 'react'

export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview"/>
      {/*large cards*/}
       <LargeCards/>

      {/*small cards*/}
      <SmallCarad/>
      {/*charts*/}
      {/*recent order table*/}
    
    </div>
  )
}
