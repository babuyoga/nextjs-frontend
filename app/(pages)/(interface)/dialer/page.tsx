import CallInfo from '@/app/components/dialer/Callinfo'
import Dialer from '@/app/components/dialer/Dialer'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=" p-8 w-full h-screen flex bg-gray-50">
      <div className="h-fit flex absolute"><CallInfo/></div>
<div className="h-fit flex m-auto"><Dialer/></div>


    </div>
  )
}

export default page