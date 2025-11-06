'use client';
import React, { useState } from 'react';
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu';
import { cn } from '@/lib/utils';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedPaddockItem, setExpandedPaddockItem] = useState<string | null>(
    null
  );

  const paddockItems = [
    'CR800',
    'Beast',
    'CR15',
    'CR18',
    'LJM01',
    'CR14',
    'CR16',
    'CRX',
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const togglePaddockItem = (item: string) => {
    setExpandedPaddockItem(expandedPaddockItem === item ? null : item);
  };

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='relative w-full text-black'>
      <div className={cn('fixed inset-x-6 top-6 z-50')}>
        <div className='rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-lg dark:border-gray-700 dark:bg-gray-800 md:px-10 md:py-3'>
          <div className='flex items-center justify-between'>
            <div className='h-20 flex items-center'>
              <Image
                src='/partners/SRM IST.png'
                alt='Partner Logo'
                width={200}
                height={200}
                className='h-full w-auto object-scale-down'
                priority
              />
            </div>
            <div className='hidden flex-grow items-center justify-center md:flex'>
              <Menu setActive={setActive}>
                <div className='flex flex-col space-y-4 text-lg'>
                  <a
                    href='/'
                    className='text-base'
                    onClick={handleNavItemClick}
                  >
                    Home
                  </a>
                </div>
                <div className='flex flex-col space-y-4 text-lg'>
                  <a
                    href='/about'
                    className='text-base'
                    onClick={handleNavItemClick}
                  >
                    About Us
                  </a>
                </div>
                <div className='flex flex-col space-y-4 text-lg'>
                  <a
                    href='/partners'
                    className='text-base'
                    onClick={handleNavItemClick}
                  >
                    Partners
                  </a>
                </div>
                <MenuItem
                  item='The Paddock'
                  setActive={setActive}
                  active={active}
                >
                  <div className='grid grid-cols-2 gap-4 pt-2 text-center text-lg'>
                    {paddockItems.map((item, index) => (
                      <div key={index}>
                        <HoveredLink
                          href={`/paddock/${item === 'Beast' ? item : item.toUpperCase()}`}
                        >
                          {item}
                        </HoveredLink>
                      </div>
                    ))}
                  </div>
                </MenuItem>
                <div className='flex flex-col space-y-4 text-lg'>
                  <a
                    href='/team'
                    className='text-base'
                    onClick={handleNavItemClick}
                  >
                    Our Team
                  </a>
                </div>
                <div className='flex flex-col space-y-4 text-lg'>
                  <a
                    href='/contact'
                    className='text-base'
                    onClick={handleNavItemClick}
                  >
                    Contact Us
                  </a>
                </div>
              </Menu>
            </div>
            <div className='flex items-center md:hidden'>
              <button
                onClick={toggleMenu}
                className='ml-auto text-gray-500 hover:text-gray-600 focus:outline-none'
              >
                {isMenuOpen ? (
                  <XMarkIcon className='h-6 w-6' />
                ) : (
                  <Bars3Icon className='h-6 w-6' />
                )}
              </button>
            </div>
            <div className='flex items-center'>
              <Image
                src='/images/logo.png'
                alt='Logo'
                width={100}
                height={100}
                className='h-auto w-auto'
                priority
              />
            </div>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='mt-5 overflow-hidden md:hidden'
              >
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className='flex flex-col space-y-5 rounded-xl bg-white p-5 shadow-lg dark:bg-gray-800'
                >
                  <HoveredLink
                    href='/'
                    className='text-lg font-bold'
                    onClick={handleNavItemClick}
                  >
                    Home
                  </HoveredLink>
                  <HoveredLink
                    href='/about'
                    className='text-lg font-bold'
                    onClick={handleNavItemClick}
                  >
                    About Us
                  </HoveredLink>
                  <HoveredLink
                    href='/partners'
                    className='text-lg font-bold'
                    onClick={handleNavItemClick}
                  >
                    Partners
                  </HoveredLink>
                  <div className='relative'>
                    <button
                      onClick={() => togglePaddockItem('paddock')}
                      className='flex w-full items-center justify-between text-lg font-bold'
                    >
                      The Paddock
                    </button>
                    <AnimatePresence>
                      {expandedPaddockItem === 'paddock' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className='mt-3 space-y-3 pl-4'
                        >
                          {paddockItems.map((item, index) => (
                            <div key={index} className='relative'>
                              <HoveredLink
                                href={`/paddock/${item === 'Beast' ? item : item.toUpperCase()}`}
                                className='flex w-full items-center justify-between py-2 text-sm font-bold'
                                onClick={handleNavItemClick}
                              >
                                {item}
                              </HoveredLink>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <HoveredLink
                    href='/team'
                    className='text-lg font-bold'
                    onClick={handleNavItemClick}
                  >
                    Our Team
                  </HoveredLink>
                  <HoveredLink
                    href='/contact'
                    className='text-lg font-bold'
                    onClick={handleNavItemClick}
                  >
                    Contact Us
                  </HoveredLink>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
