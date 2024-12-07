import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'

const TheFooter = () => {
  return (
    <div className='container mx-auto px-10 pt-12 pb-6 border border-transparent border-t-gray-500 bg-gray-950 
      flex flex-col lg:flex-row justify-between'>
      <div className="w-full lg:w-1/4">
        <p className='text-white text-2xl font-semibold'>&quot;Chúc các bạn có những giây phút thư giãn tuyệt vời khi xem phim. Cảm ơn các bạn đã đồng hành cùng chúng tôi!&quot;</p>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col justify-between">
        <div className="flex justify-end">
          {
            NAV_ITEMS.map(item => (
              <Link className='text-white ml-4' key={item.link} href={item.link}>/{item.name}</Link>
            ))
          }
        </div>

        <div className="flex justify-end">
          {
            SOCIAL_LINKS.map(item => (
              <Link className='text-white ml-4' key={item.link} href={item.link}>{item.icon}</Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TheFooter