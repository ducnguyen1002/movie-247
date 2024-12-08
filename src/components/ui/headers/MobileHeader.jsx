import React, { useState, useEffect } from 'react';
import { HiBars4 } from 'react-icons/hi2';
import { CgClose } from 'react-icons/cg';
import { NAV_ITEMS } from '@/lib/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div className="block lg:hidden z-[999] fixed top-0 left-0 w-full">
      <div className="h-10 rounded-b-xl glass-effect flex justify-end items-center container mx-auto px-4">
        <div onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? (
            <CgClose size={24} className="text-white" />
          ) : (
            <HiBars4 size={24} className="text-white" />
          )}
        </div>
      </div>
      <div
        className={`glass-effect flex flex-col min-h-screen px-4 py-6 overflow-hidden transition-[max-height,opacity] duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 hidden'
          }`}
      >
        {NAV_ITEMS.map((item, index) => (
          <Link
            className="text-white text-xl my-2 text-center"
            key={index}
            href={item.link}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileHeader;
