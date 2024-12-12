import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'

const TheFooter = () => {
  return (
    <footer className="w-full bg-gray-950 ">
      <div className='container mx-auto px-4 lg:px-10 pt-6 lg:pt-12 pb-6 border border-transparent border-t-gray-500 
      flex flex-col md:flex-row justify-between'>
        <div className="w-full md:w-2/5 lg:w-1/3">
          <p className='text-white text-base lg:text-2xl font-semibold'>&quot;Chúc các bạn có những giây phút thư giãn tuyệt vời khi xem phim. Cảm ơn các bạn đã đồng hành cùng chúng tôi!&quot;</p>
        </div>
        <div className="mt-4 md:mt-0 w-full md:w-3/5 lg:w-1/3 flex flex-col justify-between">
          <div className="flex justify-center lg:justify-end flex-wrap">
            {
              NAV_ITEMS.map(item => (
                <Link className='text-white mx-2 lg:ml-4 text-xs md:text-sm lg:text-base' aria-label={item.name} key={item.link} href={item.link}>/{item.name}</Link>
              ))
            }
          </div>

          <div className="flex mt-6 gap-2 lg:mt-0 justify-center md:justify-end">
            {
              SOCIAL_LINKS.map(item => (
                <Link className='text-white ml-0 lg:ml-2' key={item.link} href={item.link}>{item.icon}</Link>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  )
}

export default TheFooter