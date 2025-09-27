import Image from "next/image";
import Link from "next/link";
import React from "react";
import bdPNG from "../../../assets/bangladesh.svg";

const CampusPresence: React.FC = () => {
  const districts = [
    "Nilphamari",
    "Cumilla",
    "Rajshahi",
    "Dinajpur",
    "Chattogram",
  ];

  return (
    <div className="py-12 md:py-16 bg-primary/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Responsive layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-8 space-y-8 md:space-y-0">
          {/* Left Side - Title */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#186d46]">
              OUR PRESENCE
              <br />
              ACROSS
            </h1>
          </div>

          {/* Middle - Bangladesh SVG */}
          <div className="flex-1 flex justify-center">
            <div className="p-4 sm:p-6">
              <Image
                src={bdPNG}
                alt="Bangladesh Map"
                className="w-full max-w-[250px] sm:max-w-sm h-auto"
                style={{
                  mixBlendMode: "multiply",
                  backgroundColor: "transparent",
                }}
                width={300}
                height={200}
                priority
              />
            </div>
          </div>

          {/* Right Side - District List */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="space-y-3 sm:space-y-4">
              {districts.map((district, index) => (
                <div key={index} className="text-center md:text-right">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#186d46] border-r-0 md:border-r-4 border-[#61ce70] md:pr-4">
                    {district}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <Link href="/campuses">
        <button className="mt-8 px-6 py-3 bg-[#186d46] text-white font-medium text-lg flex mx-auto rounded-lg hover:bg-[#2e6d72] transition-colors">
          View All Campuses
        </button>
      </Link>
    </div>
  );
};

export default CampusPresence;
