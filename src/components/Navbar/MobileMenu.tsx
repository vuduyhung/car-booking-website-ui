import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { mockData } from "@/mocks/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const MobileMenu = ({
  showMenu,
  toggleMenu,
}: {
  showMenu: boolean;
  toggleMenu: () => void;
}) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleNavigation = (link: string) => {
    toggleMenu();

    if (link === "/cars") {
      if (pathName !== "/") {
        router.push("/");
      } else {
        setTimeout(() => {
          const productsSection = document.getElementById("products");
          if (productsSection) {
            productsSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      }
    } else {
      router.push(link);
    }
  };

  return (
    <div
      className={`${showMenu ? "left-0" : "hidden"} fixed bottom-0 top-0 z-10 flex h-screen w-[75%] flex-col justify-between rounded-r-xl bg-white px-8 pb-6 pt-16 text-black shadow-md transition-all duration-300 dark:bg-dark dark:text-white md:hidden`}
    >
      <div>
        {/* User profile */}
        <div className="flex items-center justify-start gap-4">
          <FaUserCircle className="text-5xl" />
          <div>
            <h1>User</h1>
            <h2 className="text-sm text-slate-500">Premium user</h2>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="mt-12">
          <ul>
            {mockData.menuItem.map((item) => (
              <li key={item.id} className="py-4">
                <Link
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.link);
                  }}
                  className="rounded-full py-2 text-xl font-medium text-black duration-300 hover:text-white dark:text-white"
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
