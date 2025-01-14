import { GENRES, NATIONS } from '@/lib/constants';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const GenrePage = () => {
  return (
    <>
      <Head>
        <title>Movie 247 | Thể loại</title>
        <meta name="description" content="Tìm kiếm phim dựa trên thể loại" />
      </Head>
      <div className="container min-h-[80vh] mx-auto px-4 py-16 lg:px-10 lg:py-20 bg-gray-950">
        <h1 className="font-semibold text-3xl text-white text-center">Thể loại</h1>
        <p className="text-gray-400 text-center">Chọn một thể loại phim ở bên dưới ⬇️</p>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-8">
          {GENRES.map((genre) => (
            <GenreCard key={genre.slug} genre={genre} />
          ))}
        </div>
      </div>
    </>
  );
};

const GenreCard = ({ genre }) => {
  const genreUrl = `/the-loai/${genre.slug}`;

  return (
    <Link href={genreUrl}>
      <div className="block p-4 bg-gray-900 border border-white text-white rounded-xl hover:bg-gray-700 text-center">
        {genre.name}
      </div>
    </Link>
  );
};

export default GenrePage;
