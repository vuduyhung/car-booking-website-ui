"use client";

import Link from "next/link";
import React, { useState } from "react";
import { mockData } from "@/mocks/data";
import DarkMode from "./DarkMode";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="relative z-10 w-full shadow-md duration-300 dark:bg-black dark:text-white">
      <div className="container">
        <div className="flex items-center justify-between py-2 md:py-0">
          {/* Logo section */}
          <Link href="/" className="text-3xl font-bold">
            <span>Car</span>
            <span className="text-primary">Booking</span>
          </Link>

          {/* Desktop menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {mockData.menuItem.map((item) => {
                const isActive = pathName === item.link;

                return (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className={`${isActive ? "bg-primary dark:text-black" : ""} rounded-full px-4 py-2 text-lg font-medium text-black duration-300 hover:bg-primary hover:text-white dark:text-white`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            {/* Dark mode toggle button */}
            <DarkMode />
            {/* Mobile menu section */}
            {showMenu ? (
              <HiMenuAlt1
                className="cursor-pointer text-2xl transition-all md:hidden"
                onClick={toggleMenu}
              />
            ) : (
              <HiMenuAlt3
                className="cursor-pointer text-2xl transition-all md:hidden"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </div>
      <MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
