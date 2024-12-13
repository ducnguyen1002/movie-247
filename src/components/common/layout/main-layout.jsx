import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TheFooter from '@/components/common/the-footer';
import TheHeader from '@/components/common/the-header';

const MainLayout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-[9999]">
          <div className="w-16 h-16 border-4 border-t-transparent border-gray-300 rounded-full animate-spin"></div>
        </div>
      )}
      <TheHeader />
      <main className='bg-gray-950 w-full'>{children}</main>
      <TheFooter />
    </>
  );
};

export default MainLayout;