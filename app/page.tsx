'use client';

import InstagramEmbed from '@/components/InstagramEmbed';
import { useState, useEffect } from 'react';

export default function Home() {
  const images = [
    '/home-hero-bg-carousel/CR_X.jpg',
    '/home-hero-bg-carousel/CR18.jpg',
    '/home-hero-bg-carousel/CR16.jpg',
    '/home-hero-bg-carousel/CR15.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main>
      <section
        className='-mt-24 flex max-h-screen min-h-screen min-w-[100%] max-w-[100%] flex-col text-white transition-all ease-in-out'
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transitionDuration: '3000ms',
        }}
      >
        <div className='flex w-full flex-1 flex-col justify-between bg-transparent px-6 pt-40'>
          <h1 className='text-left text-8xl font-semibold text-shadow-outline-lg max-md:text-6xl'>
            The journey to <br /> a Perfection
          </h1>
          <h2 className='text-right text-3xl font-medium text-shadow-outline'>
            Top performers require <br /> more than perfect conditions <br />{' '}
            especially just luck
          </h2>
        </div>

        <div className='flex w-full flex-[0.2] items-center justify-center bg-transparent'>
          <h4 className='text-center text-base font-light'>
            Experience the new{' '}
            <a href='/paddock/CRX' target='_blank'>
              CR - X
            </a>{' '}
            in top form with <br /> increased race track performance
          </h4>
        </div>
      </section>

      <section>
        <InstagramEmbed />
      </section>
    </main>
  );
}
