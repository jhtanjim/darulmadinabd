import Image from "next/image";
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
    <div className="py-16 bg-primary/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between space-x-8">
          {/* Left Side - Title */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-[#186d46]">
              OUR PRESENCE
              <br />
              ACROSS
            </h1>
          </div>

          {/* Middle - Bangladesh SVG */}
          <div className="flex-1 flex justify-center">
            <div className="  p-6">
              <Image
                src={bdPNG}
                alt="Bangladesh Map"
                className="w-full max-w-sm h-auto"
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
          <div className="flex-1 flex justify-end">
            <div className="space-y-4">
              {districts.map((district, index) => (
                <div key={index} className="text-right">
                  <h3 className="text-xl font-semibold text-[#186d46] border-r-4 border-[#61ce70] pr-4">
                    {district}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusPresence;
