"use client";
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Users2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image:
        "https://darulmadinah.edu.in/wp-content/uploads/2025/09/0Website-Banner-scaled.png",
      alt: "Campus View",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXHH2H7QagmhSOHBBOVgYcd_E6HpyuyWfC4ivN8nrUF-citcTfNajlxS-EfBuxc85sag&usqp=CAU",
      alt: "Students Learning",
    },
    {
      id: 3,
      image:
        "https://darulmadinah.edu.in/wp-content/uploads/2025/09/0Website-Banner-scaled.png",
      alt: "Modern Facilities",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, isAutoPlaying, slides.length]);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div className="relative w-full bg-slate-50">
      {/* Carousel */}
      {/* ... your carousel code unchanged ... */}
      <div
        className="relative overflow-hidden bg-white shadow-xl"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slides Container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0 relative">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  quality={95}
                  sizes="100vw"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-emerald-600/90 hover:bg-emerald-700 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20 group shadow-lg backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-emerald-600/90 hover:bg-emerald-700 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20 group shadow-lg backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-emerald-500 w-6 sm:w-8 shadow-lg"
                  : "bg-white/70 hover:bg-white/90 w-2 sm:w-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200">
          <div
            className="h-full bg-emerald-500 transition-all duration-700 ease-out"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          />
        </div>
      </div>
      {/* Features Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {/* Campuses */}
            <Link
              href="/campuses"
              className="flex items-center space-x-3 p-3 sm:p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-green-300" />
              <div>
                <h3 className="font-semibold text-sm sm:text-lg leading-tight">
                  Campuses
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100">
                  Our Locations
                </p>
              </div>
            </Link>

            {/* Academics */}
            <Link
              href="/academics"
              className="flex items-center space-x-3 p-3 sm:p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-300" />
              <div>
                <h3 className="font-semibold text-sm sm:text-lg leading-tight">
                  Academics
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100">
                  Excellence
                </p>
              </div>
            </Link>

            {/* Activities */}
            <Link
              href="/activities"
              className="flex items-center space-x-3 p-3 sm:p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <Users2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" />
              <div>
                <h3 className="font-semibold text-sm sm:text-lg leading-tight">
                  Activities
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100">
                  Clubs & Events
                </p>
              </div>
            </Link>

            {/* Tarbiyah */}
            <Link
              href="/tarbiyah"
              className="flex items-center space-x-3 p-3 sm:p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <HeartHandshake className="w-6 h-6 sm:w-8 sm:h-8 text-orange-300" />
              <div>
                <h3 className="font-semibold text-sm sm:text-lg leading-tight">
                  Tarbiyah
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100">
                  Character Building
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
