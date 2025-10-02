"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import bdPNG from "../../../assets/bangladesh.svg";

const CampusLocation: React.FC = () => {
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

  const districts = [
    { name: "Nilphamari", position: { top: "15%", left: "24%" } },
    { name: "Cumilla", position: { top: "58%", left: "68%" } },
    { name: "Rajshahi", position: { top: "35%", left: "25%" } },
    { name: "Dinajpur", position: { top: "20%", left: "20%" } },
    { name: "Chattogram", position: { top: "75%", left: "84%" } },
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

          {/* Middle - Bangladesh SVG with Interactive Markers */}
          <div className="flex-1 flex justify-center">
            <div className="relative p-4 sm:p-6 w-full max-w-[280px] sm:max-w-sm">
              <Image
                src={bdPNG}
                alt="Bangladesh Map"
                className="w-full h-auto"
                style={{
                  mixBlendMode: "multiply",
                  backgroundColor: "transparent",
                }}
                width={300}
                height={400}
                priority
              />

              {/* Location Markers */}
              {districts.map((district, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{
                    top: district.position.top,
                    left: district.position.left,
                  }}
                  onMouseEnter={() => setHoveredDistrict(district.name)}
                  onMouseLeave={() => setHoveredDistrict(null)}
                >
                  {/* Marker Dot */}
                  <div
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                      hoveredDistrict === district.name
                        ? "bg-[#61ce70] scale-150"
                        : "bg-[#186d46] scale-100"
                    }`}
                  >
                    {/* Pulse Effect */}
                    <div
                      className={`absolute inset-0 rounded-full bg-[#61ce70] animate-ping ${
                        hoveredDistrict === district.name
                          ? "opacity-75"
                          : "opacity-0"
                      }`}
                    />
                  </div>

                  {/* Label - Always Visible on Desktop, Hidden on Mobile */}
                  <div className="hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white/90 text-[#186d46] text-xs font-semibold rounded shadow-md whitespace-nowrap pointer-events-none">
                    {district.name}
                  </div>

                  {/* Tooltip - Shows on Hover for Desktop, Always Hidden on Mobile */}
                  <div
                    className={`hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-[#186d46] text-white text-xs font-semibold rounded whitespace-nowrap transition-all duration-300 ${
                      hoveredDistrict === district.name
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {district.name}
                    {/* Arrow */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-[#186d46]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - District List */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:space-y-4 md:flex-col md:flex-nowrap">
              {districts.map((district, index) => (
                <div
                  key={index}
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredDistrict(district.name)}
                  onMouseLeave={() => setHoveredDistrict(null)}
                >
                  <h3
                    className={`text-sm sm:text-base md:text-xl font-semibold px-3 py-1.5 md:py-0 md:px-0 rounded-full md:rounded-none border md:border-0 text-center md:text-right md:border-r-4 md:pr-4 transition-all duration-300 ${
                      hoveredDistrict === district.name
                        ? "text-white md:text-[#61ce70] bg-[#61ce70] md:bg-transparent border-[#61ce70] md:scale-105"
                        : "text-[#186d46] bg-white md:bg-transparent border-[#186d46] md:border-[#61ce70]"
                    }`}
                  >
                    {district.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <Link href="/campuses">
        <button className="mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-[#186d46] text-white font-medium text-base sm:text-lg flex mx-auto rounded-lg hover:bg-[#2e6d72] transition-colors">
          View All Campuses
        </button>
      </Link>
    </div>
  );
};

export default CampusLocation;
