"use client";

import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MapPin,
  Pause,
  Play,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import image4 from "../../../../src/assets/Images/activities/Ashura/ashura (84).jpg";
import image1 from "../../../../src/assets/Images/activities/Flower Activity/floweractivities (5).jpg";
import image2 from "../../../../src/assets/Images/activities/Fruit day/fruitday (218).jpg";
import image3 from "../../../../src/assets/Images/activities/Hajj activity/hajjactivity (13).jpg";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const aboutImages = [
    {
      id: 1,
      image: image1,
      alt: "Dar-ul-Madinah English School - Flower Activity",
      badge: "🌸 Flower Activity",
      title: "Creativity in Bloom",
    },
    {
      id: 2,
      image: image2,
      alt: "Dar-ul-Madinah English School - Fruit Day Celebration",
      badge: "🍎 Fruit Day",
      title: "Healthy Habits & Fun Learning",
    },
    {
      id: 3,
      image: image3,
      alt: "Dar-ul-Madinah English School - Hajj Activity",
      badge: "🕋 Hajj Activity",
      title: "Spiritual Learning & Awareness",
    },
    {
      id: 4,
      image: image4,
      alt: "Dar-ul-Madinah English School - Ashura Program",
      badge: "🎯 Ashura Program",
      title: "Faith, Reflection & Values",
    },
  ];

  // Intersection Observer (fixed cleanup)
  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(currentSection);

    return () => observer.unobserve(currentSection);
  }, []);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [aboutImages.length, isAutoPlaying]);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + aboutImages.length) % aboutImages.length
    );
  };
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  const toggleAutoplay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex items-center py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 sm:space-y-8 text-center lg:text-left transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="whitespace-nowrap">
                  Dar-ul-Madinah International Islamic English School
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Excellence in Education
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Empowering minds, building futures, and creating tomorrow&apos;s
              leaders through innovative education rooted in Islamic values and
              modern excellence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
              <a
                href="#about"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-200"
              >
                <span className="flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  <span className="text-sm sm:text-base">Explore Programs</span>
                </span>
              </a>

              <button className="px-6 sm:px-8 py-3 sm:py-4 text-emerald-600 border-2 border-emerald-200 font-semibold rounded-xl hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-emerald-100">
                <span className="flex items-center justify-center">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="text-sm sm:text-base">Schedule Visit</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Image Slider - FIXED */}
          <div
            className={`flex justify-center lg:justify-end order-1 lg:order-2 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl">
              <div
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-white p-1 sm:p-2 hover:shadow-3xl transition-shadow duration-500"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {/* FIXED: Height set on outer container */}
                <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden">
                  <div
                    className="flex h-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {aboutImages.map((image, index) => (
                      <div
                        key={image.id}
                        className="min-w-full h-full flex-shrink-0 relative"
                      >
                        <Image
                          src={image.image}
                          alt={image.alt}
                          fill
                          className="object-cover object-center"
                          priority={index === 0}
                        />

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                        {/* Badge */}
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-gray-800 shadow-lg">
                          {image.badge}
                        </div>

                        {/* Title */}
                        <div className="absolute bottom-16 sm:bottom-20 left-3 sm:left-4 right-3 sm:right-4">
                          <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold drop-shadow-lg">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nav Arrows */}
                <button
                  onClick={prevSlide}
                  className="hidden sm:flex absolute left-2 sm:left-3 lg:left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-2 lg:p-3 rounded-full transition-all duration-300 shadow-lg group items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={nextSlide}
                  className="hidden sm:flex absolute right-2 sm:right-3 lg:right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-2 lg:p-3 rounded-full transition-all duration-300 shadow-lg group items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
                </button>

                {/* Auto-play Control */}
                <button
                  onClick={toggleAutoplay}
                  className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 bg-white/95 hover:bg-white text-gray-800 p-1.5 sm:p-2 rounded-full transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 z-10"
                  aria-label={
                    isAutoPlaying ? "Pause slideshow" : "Play slideshow"
                  }
                >
                  {isAutoPlaying ? (
                    <Pause className="w-3 h-3 sm:w-4 sm:h-4" />
                  ) : (
                    <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                  )}
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
                  {aboutImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-emerald-600 scale-125"
                          : "bg-white/70 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
