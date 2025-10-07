"use client";
import logo from "@/assets/Images/dm logo.png";
import { navLink } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link"; // make sure Link is imported
import { usePathname } from "next/navigation"; // for active link highlighting

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-[#186d46] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-start">
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={60}
            className="mb-4"
          />
          <p className="text-sm text-gray-200">
            Your go-to place for quality products. We bring the best to your
            doorstep.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {navLink.map((link) => {
              const isActive = pathname === link.url;
              return (
                <li key={link.id}>
                  <Link href={link.url}>
                    <span
                      className={`transition-colors duration-300 ${
                        isActive
                          ? "text-[#61ce70] font-semibold"
                          : "hover:text-[#61ce70]"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact / Social */}
        <div className="flex flex-col md:items-end">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-200 mb-2">
            Email: support@example.com
          </p>
          <p className="text-sm text-gray-200 mb-4">Phone: +123 456 7890</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-[#61ce70]">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" className="hover:text-[#61ce70]">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="hover:text-[#61ce70]">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2e6d72] mt-8 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
