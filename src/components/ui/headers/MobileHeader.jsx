import React, { useState, useEffect } from 'react';
import { HiBars4 } from 'react-icons/hi2';
import { CgClose } from 'react-icons/cg';
import { NAV_ITEMS } from '@/lib/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/tim-kiem?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

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
        <form
          onSubmit={handleSearch}
          className={`w-full flex gap-2 items-center glass-effect rounded-full mb-4 pl-4 pr-2 py-2 shadow-md transition-all`}
        >
          <FiSearch
            className="text-gray-200 text-lg cursor-pointer"
          />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`outline-none text-gray-200 bg-transparent transition-all duration-1000`}
            autoFocus
          />
        </form>
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
