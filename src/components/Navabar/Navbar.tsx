"use client";

import logo from "@/assets/Images/logo.png";
import { navLink } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

// define props types
type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const pathname = usePathname();
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed w-full transition-all duration-200 h-[10vh] z-[1000] ${
        navBg ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="lg:container mx-auto h-full">
        <div className="flex justify-between items-center h-full px-4 md:px-16">
          {/* logo */}
          <Image src={logo} alt="Logo" width={200} height={200} />

          {/* navlinks */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLink.map((link) => {
              const isActive = pathname === link.url;
              return (
                <Link key={link.id} href={link.url}>
                  <p className={`nav-link ${isActive ? "active" : ""}`}>
                    {link.name}
                  </p>
                </Link>
              );
            })}
          </div>
          {/* button */}
          <div className="hidden lg:block">
            <button className="px-4 py-2 bg-primary text-white rounded-md">
              Get Started
            </button>
          </div>
          {/* Burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer |text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
