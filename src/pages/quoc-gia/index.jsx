import { NATIONS } from '@/lib/constants';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const NationPage = () => {
  return (
    <>
      <Head>
        <title>Movie 247 | Quốc gia</title>
        <meta name="description" content="Tìm kiếm phim dựa trên quốc gia" />
      </Head>
      <div className="container min-h-[80vh] mx-auto px-4 py-16 lg:px-10 lg:py-20 bg-gray-950">
        <h1 className="font-semibold text-3xl text-white text-center">Quốc gia</h1>
        <p className="text-gray-400 text-center">Chọn một quốc gia bên dưới ⬇️</p>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-8">
          {NATIONS.map((nation) => (
            <NationCard key={nation.slug} nation={nation} />
          ))}
        </div>
      </div>
    </>
  );
};

const NationCard = ({ nation }) => {
  const nationUrl = `/quoc-gia/${nation.slug}`;

  return (
    <Link href={nationUrl}>
      <div className="block p-4 bg-gray-900 border border-white text-white rounded-xl hover:bg-gray-700 text-center">
        {nation.name}
      </div>
    </Link>
  );
};

export default NationPage;
