import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import bdSVG from "../../../assets/bangladesh.svg";

interface Campus {
  name: string;
  location: string;
  phone: string;
  email: string;
}

const CampusLocation: React.FC = () => {
  const campuses: Campus[] = [
    {
      name: "Saidpur Campus",
      location: "Old Babu Para, Saidpur, Nilphamari",
      phone: "8801901329710",
      email: "dmch.saidpur@gmail.com",
    },
    {
      name: "Hawaldarpara Campus",
      location: "Molla road (Chal Market) Hawaldarpara, Saidpur, Nilphamari",
      phone: "8801901329705",
      email: "dmch.hawaldarpara@gmail.com",
    },
    {
      name: "Cumilla Campus",
      location: "Chapapur, Adarsha Sadar, Cumilla",
      phone: "8801901329720",
      email: "dmch.cumilla@gmail.com",
    },
    {
      name: "Rajshahi Campus",
      location: "233/2 housing state, Uposhohar, Boalia, Rajshahi",
      phone: "8801901329780",
      email: "dmch.rajshahi@gmail.com",
    },
    {
      name: "Dinajpur Campus",
      location: "Paharpur primary school road, Sadar, Dinajpur",
      phone: "8801901329790",
      email: "dmch.dinajpur@gmail.com",
    },
    {
      name: "Boropul Campus",
      location: "KM tower, Boropul moor, Halishahar, Chattogram",
      phone: "8801901329730",
      email: "dmch.boropul@gmail.com",
    },
    {
      name: "Patenga Campus",
      location: "GEM colony gate, patenga, Chattogram",
      phone: "8801901329740",
      email: "dmch.patenga@gmail.com",
    },
    {
      name: "Chandgaon Campus",
      location:
        "Nur Villa, 2nd Floor, Road no-4, CDA R/A Chandgaon, Chattogram",
      phone: "8801901329728",
      email: "dmch.chandgaon@gmail.com",
    },
    {
      name: "Anowara Campus",
      location: "Bokhtiarpara, Paschimcal, Minnot Ali Hat, Anowara, Chattogram",
      phone: "8801901329760",
      email: "dmch.anowara@gmail.com",
    },
    {
      name: "Nazumiahat Campus",
      location: "Nazumiahat, Burishchor, Kaptai Road, Chattogram",
      phone: "8801901329750",
      email: "dmch.nazumiahat@gmail.com",
    },
    {
      name: "Fatikchhari Campus",
      location: "Bibirhat, Fatikchhari, Chattogram",
      phone: "8801901329770",
      email: "dmch.fatikchhari@gmail.com",
    },
    {
      name: "Hathazari Campus",
      location:
        "N Zohur Shopping Complex, 4th Floor, Kachari Road, Hathazari, Chattogram",
      phone: "8801901329799",
      email: "fisch.hathazari@gmail.com",
    },
    {
      name: "Agrabad Campus",
      location: "CDA R/A-17, Agrabad, Double Mooring, Chattogram",
      phone: "8801901329768",
      email: "fisch.agrabad@gmail.com",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#186d46] mb-4">
          Our Campuses Across Bangladesh
        </h1>
        <div className="w-20 h-1 bg-[#61ce70] mx-auto rounded-full"></div>
      </div>

      {/* Bangladesh Map */}
      <div className="flex justify-center mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl">
          <Image
            src={bdSVG.src}
            alt="Bangladesh Map"
            className="w-full max-w-3xl h-auto mx-auto rounded-xl"
            style={{
              filter: "brightness(0.95) contrast(1.05) saturate(1.1)",
            }}
            width={800}
            height={500}
            priority
          />
        </div>
      </div>

      {/* Campus Cards - Single Row */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {campuses.map((campus, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#186d46] p-6"
            >
              {/* Campus Name */}
              <h3 className="text-lg font-bold text-[#186d46] mb-4">
                {campus.name}
              </h3>

              {/* Campus Details */}
              <div className="space-y-3 text-sm">
                {/* Location */}
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#2e6d72] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    {campus.location}
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#2e6d72] flex-shrink-0" />
                  <a
                    href={`tel:+${campus.phone}`}
                    className="text-gray-600 hover:text-[#186d46] transition-colors"
                  >
                    +{campus.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#61ce70] flex-shrink-0" />
                  <a
                    href={`mailto:${campus.email}`}
                    className="text-[#61ce70] hover:text-[#186d46] transition-colors hover:underline text-xs break-all"
                  >
                    {campus.email}
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-4">
                <a
                  href={`tel:+${campus.phone}`}
                  className="flex-1 bg-[#186d46] hover:bg-[#2e6d72] text-white py-2 px-3 rounded-lg text-sm font-medium text-center transition-colors"
                >
                  Call
                </a>
                <a
                  href={`mailto:${campus.email}`}
                  className="flex-1 bg-[#61ce70] hover:bg-[#186d46] text-white py-2 px-3 rounded-lg text-sm font-medium text-center transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusLocation;
