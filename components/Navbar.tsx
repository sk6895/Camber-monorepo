"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedPaddockItem, setExpandedPaddockItem] = useState<string | null>(null);

  const paddockItems = [
    "CR800", "Beast", "CR15", "CR18", "LJM01", "CR14", "CR16", "CRX"
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const togglePaddockItem = (item: string) => {
    setExpandedPaddockItem(expandedPaddockItem === item ? null : item);
  };

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative w-full">
      <div className={cn("fixed top-6 inset-x-6 z-50")}>
        <div className="border border-gray-200 dark:border-gray-700 py-4 md:py-3 px-4 md:px-10 bg-white dark:bg-gray-800 shadow-lg rounded-2xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="mr-4"
              />
            </div>
            <div className="hidden md:flex justify-center flex-grow items-center">
              <Menu setActive={setActive}>
                <MenuItem item="Home" setActive={setActive} active={active}>
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/" className="text-lg font-bold" onClick={handleNavItemClick}>Home</HoveredLink>
                  </div>
                </MenuItem>
                <MenuItem item="About Us" setActive={setActive} active={active}>
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/about" className="text-lg font-bold" onClick={handleNavItemClick}>About Us</HoveredLink>
                  </div>
                </MenuItem>
                <MenuItem item="Partners" setActive={setActive} active={active}>
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/partners" className="text-lg font-bold" onClick={handleNavItemClick}>Partners</HoveredLink>
                  </div>
                </MenuItem>
                <MenuItem item="The Paddock" setActive={setActive} active={active}>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {paddockItems.map((item, index) => (
                      <div key={index}>
                        <HoveredLink href={`/paddock/${item === "Beast" ? item : item.toUpperCase()}`}>{item}</HoveredLink>
                      </div>
                    ))}
                  </div>
                </MenuItem>
                <MenuItem item="Our Team" setActive={setActive} active={active}>
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/team" className="text-lg font-bold" onClick={handleNavItemClick}>Our Team</HoveredLink>
                  </div>
                </MenuItem>
                <MenuItem item="Contact Us" setActive={setActive} active={active}>
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/contact" className="text-lg font-bold" onClick={handleNavItemClick}>Contact Us</HoveredLink>
                  </div>
                </MenuItem>
              </Menu>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-600 focus:outline-none ml-auto">
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden mt-5 overflow-hidden"
              >
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col space-y-5 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5"
                >
                  <HoveredLink href="/" className="text-lg font-bold" onClick={handleNavItemClick}>Home</HoveredLink>
                  <HoveredLink href="/about" className="text-lg font-bold" onClick={handleNavItemClick}>About Us</HoveredLink>
                  <HoveredLink href="/partners" className="text-lg font-bold" onClick={handleNavItemClick}>Partners</HoveredLink>
                  <div className="relative">
                    <button
                      onClick={() => togglePaddockItem('paddock')}
                      className="flex items-center justify-between w-full text-lg font-bold"
                    >
                      The Paddock
                    </button>
                    <AnimatePresence>
                      {expandedPaddockItem === 'paddock' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-3 space-y-3 pl-4"
                        >
                          {paddockItems.map((item, index) => (
                            <div key={index} className="relative">
                              <HoveredLink 
                                href={`/paddock/${item === "Beast" ? item : item.toUpperCase()}`}
                                className="text-sm flex items-center justify-between w-full py-2 font-bold"
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
                  <HoveredLink href="/team" className="text-lg font-bold" onClick={handleNavItemClick}>Our Team</HoveredLink>
                  <HoveredLink href="/contact" className="text-lg font-bold" onClick={handleNavItemClick}>Contact Us</HoveredLink>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}