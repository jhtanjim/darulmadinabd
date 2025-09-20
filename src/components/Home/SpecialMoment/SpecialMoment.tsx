"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SpecialMoment = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBBKBP7Mbn3N-pSWl9P0Ikj9o6sdADksPtZA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKqmddGHmE_GB_HL9BnUiUhaQ3LCdBJueLA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKqmddGHmE_GB_HL9BnUiUhaQ3LCdBJueLA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKqmddGHmE_GB_HL9BnUiUhaQ3LCdBJueLA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBBKBP7Mbn3N-pSWl9P0Ikj9o6sdADksPtZA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKqmddGHmE_GB_HL9BnUiUhaQ3LCdBJueLA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKqmddGHmE_GB_HL9BnUiUhaQ3LCdBJueLA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKqmddGHmE_GB_HL9BnUiUhaQ3LCdBJueLA&s",
  ];

  return (
    <section className="bg-green-500 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-8">
          Moments we Treasure
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={img}
                  alt={`Moment ${index + 1}`}
                  width={400} // you can adjust width/height for better layout shift
                  height={240}
                  className="w-full h-60 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All */}
        <div className="text-center mt-6">
          <a
            href="/moments"
            className="text-white font-medium hover:underline inline-flex items-center gap-2"
          >
            View All <span>➡️</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialMoment;
