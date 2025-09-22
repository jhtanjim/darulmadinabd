"use client";
import { navLink } from "@/constant/constant";
import Link from "next/link";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

// define props
type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} top-0 transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-full h-[100vh]`}
        onClick={closeNav}
      />

      {/* Sidebar */}
      <div
        className={`text-white ${navOpen} fixed top-0 left-0 h-full transform transition-all duration-500 delay-300 w-[85%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] bg-indigo-900 z-[100006] flex flex-col`}
      >
        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-6 sm:py-8 px-4 sm:px-6 md:px-8 space-y-4 sm:space-y-6">
          {navLink.map((link) => (
            <div key={link.id}>
              <div
                onClick={() =>
                  setOpenIndex(openIndex === link.id ? null : link.id)
                }
                className="flex justify-between items-center cursor-pointer text-lg sm:text-xl md:text-2xl lg:text-3xl border-b border-white/30 pb-3 sm:pb-4 hover:text-gray-300 transition-colors font-medium"
              >
                <span>{link.name}</span>
                {link.subItems && (
                  <span className="text-2xl sm:text-3xl font-bold">
                    {openIndex === link.id ? "−" : "+"}
                  </span>
                )}
              </div>

              {/* Sub Items */}
              {link.subItems && openIndex === link.id && (
                <div className="mt-4 ml-6 sm:ml-8 space-y-3 animate-pulse">
                  {link.subItems.map((sub) => (
                    <Link key={sub.id} href={sub.url} onClick={closeNav}>
                      <p className="text-base sm:text-lg md:text-xl hover:text-gray-300 hover:underline transition-all duration-200 py-2 block">
                        {sub.name}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Close button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white cursor-pointer hover:text-gray-300 transition-colors"
        />
      </div>
    </div>
  );
};

export default MobileNav;
