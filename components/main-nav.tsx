"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (
        isOpen &&
        event.target instanceof HTMLElement &&
        !event.target.closest(".dropdown")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [isOpen]);

  return (
    <nav className="mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 flex items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10">
      <div className="dropdown relative">
        <button
          className="dropdown-toggle text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-urbanist transition-colors hover:text-black focus:outline-none"
          onClick={toggleDropdown}
        >
          Categories
        </button>
        <ul
          className={`dropdown-menu ${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 mt-2 py-2 bg-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-urbanist transition-colors shadow-lg rounded-md z-50`}
        >
          {data.map((category) => (
            <li
              key={category.id}
              className="relative" // To enable content overlap
            >
              <Link href={`/category/${category.id}`} passHref>
                <span
                  className={cn(
                    "block px-4 py-2 transition-colors hover:bg-gray-100 focus:outline-none",
                    pathname === `/category/${category.id}`
                      ? "text-black"
                      : "text-neutral-500"
                  )}
                  style={{ position: "relative", zIndex: 999 }}
                >
                  {category.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
