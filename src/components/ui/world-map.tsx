"use client";

import { Feature, GeoJsonProperties, Geometry } from "geojson"; // ✅ import types
import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// a public TopoJSON of the world
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Countries to highlight with their display names
const highlightedCountries = {
  Pakistan: "Pakistan",
  PAK: "Pakistan",
  "United Kingdom": "United Kingdom",
  UK: "United Kingdom",
  GBR: "United Kingdom",
  "Great Britain": "United Kingdom",
  "United States": "United States",
  USA: "United States",
  US: "United States",
  "United States of America": "United States",
  Bangladesh: "Bangladesh",
  BGD: "Bangladesh",
  Nepal: "Nepal",
  NPL: "Nepal",
  Kenya: "Kenya",
  KEN: "Kenya",
};

// Extend the Feature type to include rsmKey
interface ExtendedFeature extends Feature<Geometry, GeoJsonProperties> {
  rsmKey?: string;
}

const WorldMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string>("");

  const getCountryDisplayName = (geoName: string) => {
    const found = Object.keys(highlightedCountries).find(
      (country) =>
        geoName.toLowerCase().includes(country.toLowerCase()) ||
        country.toLowerCase().includes(geoName.toLowerCase())
    );
    return found
      ? highlightedCountries[found as keyof typeof highlightedCountries]
      : geoName;
  };

  const isHighlightedCountry = (geoName: string) => {
    return Object.keys(highlightedCountries).some(
      (country) =>
        geoName.toLowerCase().includes(country.toLowerCase()) ||
        country.toLowerCase().includes(geoName.toLowerCase())
    );
  };

  return (
    <div className="w-full mt-8 lg:mt-12">
      {/* Hover Display */}
      <div className="text-center mb-4 h-8 flex items-center justify-center">
        {hoveredCountry && (
          <div className="bg-gradient-to-r from-[#186d46] to-[#2e6d72] text-white px-6 py-2 rounded-full shadow-lg transform transition-all duration-300 ease-out">
            <span className="font-semibold text-lg">{hoveredCountry}</span>
          </div>
        )}
      </div>

      {/* Map Container */}
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        <ComposableMap
          projectionConfig={{
            scale: 120,
            center: [0, 20],
          }}
          width={800}
          height={400}
          className="w-full h-full"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: ExtendedFeature[] }) =>
              geographies.map((geo) => {
                const props = geo.properties as {
                  NAME?: string;
                  name?: string;
                };
                const countryName = props?.NAME || props?.name || "";
                const isHighlighted = isHighlightedCountry(countryName);
                const displayName = getCountryDisplayName(countryName);

                return (
                  <Geography
                    key={geo.id || geo.rsmKey || `country-${countryName}`}
                    geography={geo}
                    onMouseEnter={() => setHoveredCountry(displayName)}
                    onMouseLeave={() => setHoveredCountry("")}
                    fill={isHighlighted ? "#186d46" : "#e2e8f0"}
                    stroke="#ffffff"
                    strokeWidth={isHighlighted ? 1.5 : 0.5}
                    style={{
                      default: {
                        outline: "none",
                        fill: isHighlighted ? "#186d46" : "#e2e8f0",
                        cursor: "pointer",
                      },
                      hover: {
                        fill: isHighlighted ? "#61ce70" : "#cbd5e1",
                        outline: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      },
                      pressed: {
                        outline: "none",
                        fill: isHighlighted ? "#2e6d72" : "#94a3b8",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-slate-200">
          <div className="w-4 h-4 bg-[#186d46] rounded-full shadow-sm"></div>
          <span className="font-semibold text-slate-700">
            Our Campus Locations
          </span>
        </div>
      </div>

      {/* Country Labels */}
      <div className="mt-8 text-center bg-gradient-to-r from-[#186d46] via-[#2e6d72] to-[#186d46] text-white py-6 px-4 rounded-2xl shadow-lg">
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-sm md:text-base lg:text-lg font-bold">
          {[
            "PAKISTAN",
            "UNITED KINGDOM",
            "USA",
            "BANGLADESH",
            "NEPAL",
            "KENYA",
          ].map((country, index) => (
            <span key={country} className="flex items-center">
              <span className="hover:text-[#61ce70] transition-colors duration-300 cursor-default">
                {country}
              </span>
              {index < 5 && (
                <span className="mx-2 text-[#61ce70] font-normal">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
