"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../../../assets/Images/activities/activities (1).jpg";
import image10 from "../../../assets/Images/activities/activities (10).jpg";
import image11 from "../../../assets/Images/activities/activities (11).jpg";
import image12 from "../../../assets/Images/activities/activities (12).jpg";
import image13 from "../../../assets/Images/activities/activities (13).jpg";
import image14 from "../../../assets/Images/activities/activities (14).jpg";
import image15 from "../../../assets/Images/activities/activities (15).jpg";
import image16 from "../../../assets/Images/activities/activities (16).jpg";
import image17 from "../../../assets/Images/activities/activities (17).jpg";
import image18 from "../../../assets/Images/activities/activities (18).jpg";
import image19 from "../../../assets/Images/activities/activities (19).jpg";
import image2 from "../../../assets/Images/activities/activities (2).jpg";
import image20 from "../../../assets/Images/activities/activities (20).jpg";
import image21 from "../../../assets/Images/activities/activities (21).jpg";
import image22 from "../../../assets/Images/activities/activities (22).jpg";
import image23 from "../../../assets/Images/activities/activities (23).jpg";
import image24 from "../../../assets/Images/activities/activities (24).jpg";
import image25 from "../../../assets/Images/activities/activities (25).jpg";
import image26 from "../../../assets/Images/activities/activities (26).jpg";
import image27 from "../../../assets/Images/activities/activities (27).jpg";
import image28 from "../../../assets/Images/activities/activities (28).jpg";
import image29 from "../../../assets/Images/activities/activities (29).jpg";
import image3 from "../../../assets/Images/activities/activities (3).jpg";
import image30 from "../../../assets/Images/activities/activities (30).jpg";
import image31 from "../../../assets/Images/activities/activities (31).jpg";
import image32 from "../../../assets/Images/activities/activities (32).jpg";

const SpecialMoment = () => {
  const images = [
    image1,
    image2,
    image3,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
  ];

  return (
    <section className="bg-[#007A6E] py-12">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-white text-3xl md:text-4xl font-extrabold mb-10 tracking-wide">
          Moments We Treasure
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <Image
                  src={img}
                  alt={`Moment ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-medium">
                  ❤️ Cherished Moment
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All */}
        <div className="text-center mt-8">
          <a
            href="/moments"
            className="inline-flex items-center gap-2 text-white   px-5 py-2 rounded-full font-semibold transition-colors duration-300 text-xl"
          >
            View All Moments
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialMoment;
