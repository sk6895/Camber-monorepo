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
  FaChevronDown,
} from 'react-icons/fa';
import { GiCarWheel, GiLaurelCrown, GiTrophyCup } from 'react-icons/gi';
import { PinContainer } from '@/components/ui/3d-pin';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

export default function CR15Page() {
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
    { title: 'Endurance', position: 3, icon: GiTrophyCup },
    { title: 'Skidpad', position: 2, icon: GiLaurelCrown },
    { title: 'Autocross', position: 2, icon: GiLaurelCrown },
    { title: 'Acceleration', position: 2, icon: GiLaurelCrown },
    { title: 'Fuel Efficiency', position: 3, icon: GiTrophyCup },
    { title: 'Business Plan Presentation', position: 2, icon: GiLaurelCrown },
    { title: 'Design Event', position: 2, icon: GiLaurelCrown },
    { title: 'Best Tech Ready Team Title', position: 0, icon: FaMedal },
  ];

  const specifications = [
    ['Wheelbase', '1560mm', FaCarSide],
    ['Track Width', '1180/1140mm', FaCarSide],
    ['Engine', 'Single Cylinder KTM 390 Engine', FaCog],
    ['Gearbox', '6 Speed sequential gearbox', FaWrench],
    ['Differential', 'Drexler Limited Slip Differential', FaCog],
    ['Chassis', 'TIG Welded Tubular Spaceframe Chassis', FaCarSide],
    ['Body', 'Carbon Fibre Reinforced bodyworks', FaShapes],
    ['Suspension', 'Pushrod Actuated Double Wishbone setup', FaCar],
    ['Dampers', 'Ohlins TTX25', FaCompressArrowsAlt],
    ['Tires', 'Hoosier R25B 20.5*7.0/R13 slicks', FaRoad],
    ['Brakes', 'Custom Designed Pedal Assembly and Brake Rotors', GiCarWheel],
    [
      'Steering',
      'Custom Designed Steering Gearbox with 270 deg lock to lock',
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
            CR15 (2015)
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
                        src='/images/CR15.jpg'
                        alt='CR15 Prototype'
                        fill
                        style={{ objectFit: 'cover' }}
                        className='transform transition-transform duration-300 ease-in-out hover:scale-110'
                      />
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'
                          >
                            <p className='text-lg font-semibold text-white'>
                              CR15 Prototype
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${isSmallScreen ? 'w-full' : 'w-1/2'} space-y-6`}
            >
              <p className='text-justify text-lg'>
                Designed for the 2015-2016 season, this masterpiece showed its
                mettle in Formula Student Germany 2015 by being the only Indian
                team on track for the dynamic events. This vehicle had also
                bagged the runner up spot in Formula Student India in 2016.
              </p>
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
                  Formula Student Germany 2015
                </Badge>
                <Badge
                  variant='outline'
                  className='border-red-500 text-red-500'
                >
                  Only Indian Team on Track
                </Badge>
                <Badge
                  variant='outline'
                  className='border-red-500 text-red-500'
                >
                  Runner-up in Formula Student India 2016
                </Badge>
              </motion.div>
            </motion.div>
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
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 transform animate-bounce text-red-600'>
                <FaChevronDown size={24} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='mt-8 w-full'
          >
            <h2 className='mb-4 text-center text-2xl font-semibold text-red-600'>
              Specifications
            </h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {specifications.map(([title, spec, Icon], index) => (
                <motion.div
                  key={title as string}
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
                    {Icon && typeof Icon === 'function' && (
                      <Icon className='mr-2 text-red-500' />
                    )}
                    <h4 className='text-sm font-semibold text-red-600 md:text-base'>
                      {title as string}
                    </h4>
                  </div>
                  <p className='text-xs text-gray-700 md:text-sm'>
                    {spec as string}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
