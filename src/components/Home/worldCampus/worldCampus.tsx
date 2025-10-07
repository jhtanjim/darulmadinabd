"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

import logo1 from "../../../assets/Images/campuslogo/logo-01.webp";
import logo2 from "../../../assets/Images/campuslogo/logo-02.webp";
import logo3 from "../../../assets/Images/campuslogo/logo-03.webp";
import logo4 from "../../../assets/Images/campuslogo/logo-04.webp";
import logo5 from "../../../assets/Images/campuslogo/logo-05.webp";
import logo6 from "../../../assets/Images/campuslogo/logo-06.webp";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const worldCampus = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <Marquee pauseOnHover speed={40} gradient={false}>
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center px-6">
              <Image
                src={logo}
                alt={`Campus logo ${idx + 1}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
      {/* <WorldMap /> */}
    </section>
  );
};
export default worldCampus;
