import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

const brandLogoURLs = [
  "/assets/images/logos/disney.png",
  "/assets/images/logos/marvel-studio.png",
  "/assets/images/logos/netflix.png",
]

const BrandMarquee = () => {
  return (
    <Marquee autoFill pauseOnHover className='py-10 bg-gray-950' >
      {
        brandLogoURLs.map((logoURL, index) => (
          <div key={index} className="w-[160px] mx-4 py-6 flex items-center justify-center rounded-2xl bg-black">
            <Image
              src={logoURL}
              className='max-h-10 w-auto'
              width={100}
              height={40}
              alt='brand-logo'
            />
          </div>
        ))
      }
    </Marquee>
  )
}

export default BrandMarquee