'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { useState, useEffect } from 'react';
import {
  FaCog,
  FaCarSide,
  FaShapes,
  FaCar,
  FaCompressArrowsAlt,
  FaWrench,
  FaRoad,
  FaMedal,
} from 'react-icons/fa';
import { GiCarWheel, GiLaurelCrown, GiTrophyCup } from 'react-icons/gi';
import { PinContainer } from '@/components/ui/3d-pin';
import { ScrollArea } from '@/components/ui/scroll-area';
import { IconType } from 'react-icons';
import { Badge } from '@/components/ui/badge';

export default function CR16Page() {
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const achievements = [
    { title: 'Design Event', position: 2, icon: GiLaurelCrown },
    { title: 'Cost Event', position: 2, icon: GiLaurelCrown },
    { title: 'Overall', position: 3, icon: GiTrophyCup },
  ];

  const specifications: [string, string, IconType][] = [
    ['Wheelbase', '1540mm', FaCarSide],
    ['Track Width', '1140/1120mm', FaCarSide],
    ['Engine', 'Single Cylinder KTM 390 Engine', FaCog],
    ['Gearbox', '6 Speed sequential gearbox', FaWrench],
    ['Differential', 'Drexler Limited Slip Differential', FaCog],
    ['Chassis', 'TIG Welded Tubular Spaceframe Chassis', FaCarSide],
    ['Body', 'Carbon Fibre Reinforced bodyworks', FaShapes],
    ['Aero kit', 'Full Carbon Fibre Aero kit', FaShapes],
    [
      'Front Suspension',
      'Direct Actuated Double Wishbone setup',
      FaCompressArrowsAlt,
    ],
    [
      'Rear Suspension',
      'Pushrod Actuated Double Wishbone setup',
      FaCompressArrowsAlt,
    ],
    ['Dampers', 'Ohlins TTX25', FaCompressArrowsAlt],
    ['Tires', 'Hoosier R25B 18.0*6.0/R10 slicks', FaRoad],
    ['Brakes', 'Custom Designed Pedal Assembly and Brake Rotors', GiCarWheel],
    [
      'Steering',
      'Custom Designed Steering Gearbox with 220 deg lock to lock',
      FaCarSide,
    ],
  ];

  return (
    <div className='relative min-h-screen overflow-hidden bg-white text-black'>
      <main className='container mx-auto max-w-7xl px-4 py-12 md:py-24'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='flex flex-col items-center justify-center gap-8 md:gap-12'
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-4 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-center text-3xl font-extrabold text-transparent md:mb-8 md:text-4xl lg:text-6xl'
          >
            CR16 (2016-17)
          </motion.h1>

          <div
            className={`flex w-full ${isSmallScreen ? 'flex-col' : 'flex-row'} gap-8 md:gap-12`}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className={isSmallScreen ? 'w-full' : 'w-1/2'}
            >
              <BackgroundGradient className='rounded-3xl p-1'>
                <div className='rounded-3xl border-none bg-white shadow-lg'>
                  <div className='p-0'>
                    <div
                      className='relative aspect-video overflow-hidden rounded-3xl'
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <Image
                        src='/images/CR16.jpg'
                        alt='CR16 Prototype'
                        fill
                        style={{ objectFit: 'cover' }}
                        className='transition-transform duration-300 hover:scale-110'
                        priority
                      />
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'
                          >
                            <p className='text-xl font-bold text-white md:text-3xl'>
                              CR16 Prototype
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>

            <div className={`${isSmallScreen ? 'w-full' : 'w-1/2'} space-y-6`}>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='text-justify text-lg'
              >
                Having participated in FSG 15, the team went all out to put
                their learnings to practice. CR-16 was a major step up from the
                previous cars, with both its performance and stunning looks.
                Weighing in at 195kgs, this car was also equipped with the
                team&apos;s first Aero kit.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='flex flex-wrap gap-2'
              >
                <Badge
                  variant='outline'
                  className='border-red-500 text-red-500'
                >
                  First Aero Kit
                </Badge>
                <Badge
                  variant='outline'
                  className='border-red-500 text-red-500'
                >
                  195kg Weight
                </Badge>
                <Badge
                  variant='outline'
                  className='border-red-500 text-red-500'
                >
                  FSG Learnings Applied
                </Badge>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='mt-8 w-full'
          >
            <h2 className='mb-4 text-center text-2xl font-semibold text-red-600'>
              Achievements
            </h2>
            <div className='relative'>
              <div className='checkered-flag rounded-md p-1'>
                <ScrollArea className='h-[400px] w-full rounded-md bg-white'>
                  <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3'>
                    {achievements.map((achievement, index) => (
                      <PinContainer
                        key={index}
                        title={achievement.title}
                        icon={achievement.icon}
                      >
                        <div className='flex h-[8rem] w-[16rem] flex-col p-4 tracking-tight text-slate-100/50'>
                          <h3 className='!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100'>
                            {achievement.title}
                          </h3>
                          <div className='!m-0 !p-0 text-base font-normal'>
                            <span className='text-slate-500'>
                              {achievement.position === 0
                                ? 'Special Achievement'
                                : `Position`}
                            </span>
                          </div>
                          <div className='mt-1 flex items-center text-2xl font-bold text-slate-100'>
                            {achievement.position === 0 ? (
                              <>
                                <FaMedal className='mr-2 text-yellow-400' />
                                <span>Special</span>
                              </>
                            ) : achievement.position === 2 ? (
                              <>
                                <GiLaurelCrown className='mr-2 text-gray-300' />
                                <span>2nd</span>
                              </>
                            ) : achievement.position === 3 ? (
                              <>
                                <GiTrophyCup className='mr-2 text-amber-600' />
                                <span>3rd</span>
                              </>
                            ) : (
                              `#${achievement.position}`
                            )}
                          </div>
                        </div>
                      </PinContainer>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mt-8 w-full'
          >
            <h2 className='mb-4 text-center text-2xl font-semibold text-red-600'>
              Specifications
            </h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {specifications.map(([title, spec, Icon], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0px 0px 8px rgba(255, 0, 0, 0.3)',
                  }}
                  className='rounded-lg border border-red-500 bg-red-50 p-3 transition-all duration-300 hover:bg-red-100'
                >
                  <div className='mb-2 flex items-center'>
                    {Icon && <Icon className='mr-2 text-red-500' />}
                    <h4 className='text-sm font-semibold text-red-600 md:text-base'>
                      {title}
                    </h4>
                  </div>
                  <p className='text-xs text-gray-700 md:text-sm'>{spec}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
