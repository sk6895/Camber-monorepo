import React from 'react';
import dynamic from 'next/dynamic';
import Loading from './ui/loading';

const InstagramEmbed = dynamic(() => import('./InstagramEmbedContent'), {
  ssr: false,
  loading: () => <Loading />,
});

const InstagramEmbedWrapper = () => {
  return (
    <section className='p-8'>
      <h1 className='pb-6 text-center text-5xl font-semibold'>
        Social <span className='text-red-500'>Media</span>
      </h1>
      <InstagramEmbed />
    </section>
  );
};

export default InstagramEmbedWrapper;
