import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { mockData } from "@/mocks/data";
import Link from "next/link";

const MobileMenu = ({ showMenu }: { showMenu: boolean }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${showMenu ? "left-0" : "hidden"} bg-white dark:text-white text-black fixed bottom-0 top-0 z-10 flex h-screen w-[75%] flex-col justify-between rounded-r-xl px-8 pb-6 pt-16 shadow-md transition-all duration-300 dark:bg-dark md:hidden relative`}
    >
      <div>
        {/* User profile */}
        <div className="flex items-center justify-start gap-4">
          <FaUserCircle className="text-5xl" />
          <div>
            <h1>User</h1>
            <h2 className="text-slate-500 text-sm">Premium user</h2>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="mt-12">
          <ul>
            {mockData.menuItem.map((item) => (
              <li key={item.id} className="py-4">
                <Link
                  href={item.link}
                  className="text-black dark:text-white hover:text-white rounded-full py-2 text-xl font-medium duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom navigation */}
      <div className="footer">
        <h1>
          Made by <span className="text-primary">Vu Duy Hung</span>
        </h1>
      </div>
    </div>
  );
};

export default MobileMenu;
