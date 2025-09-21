"use client";
import logo from "@/assets/Images/logo.png";
import { navLink } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const pathname = usePathname();
  const [navBg, setNavBg] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle mouse enter for the entire dropdown area
  const handleMouseEnter = (linkId: number) => {
    setHoveredItem(linkId);
  };

  // Handle mouse leave for the entire dropdown area
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div
      className={`fixed w-full transition-all duration-200 h-[10vh] z-[1000] ${
        navBg ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="lg:container mx-auto h-full">
        <div className="flex justify-between items-center h-full px-4 md:px-16">
          {/* logo */}
          <Link href="/">
            <Image src={logo} alt="Logo" width={200} height={200} />
          </Link>

          {/* navlinks */}
          <div className="hidden lg:flex items-center space-x-10 relative">
            {navLink.map((link) => {
              const isActive = pathname === link.url;

              return (
                <div
                  key={link.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Main navigation item */}
                  {link.subItems ? (
                    // If has subitems, render as button
                    <p
                      className={`nav-link cursor-pointer ${
                        isActive ? "active" : ""
                      }`}
                    >
                      {link.name}
                    </p>
                  ) : (
                    // If no subitems, render as link
                    <Link
                      href={link.url}
                      className={`nav-link cursor-pointer ${
                        isActive ? "active" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Dropdown menu */}
                  {link.subItems && hoveredItem === link.id && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="  bg-white shadow-lg rounded-md overflow-hidden min-w-[200px]">
                        {link.subItems.map((sub) => (
                          <Link
                            key={sub.id}
                            href={sub.url}
                            className="block px-4 py-3 text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md transition-colors duration-150"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* button */}
          <div className="hidden lg:block">
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>

          {/* Burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
