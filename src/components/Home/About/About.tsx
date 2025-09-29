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
import { useEffect, useRef, useState } from "react";

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
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
      alt: "Dar-ul-Madinah English School - Students in Learning Environment",
      badge: "🏆 Award Winning",
      title: "Excellence in Education",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
      alt: "Dar-ul-Madinah English School - Modern Classroom",
      badge: "📚 Quality Education",
      title: "Modern Learning Spaces",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      alt: "Dar-ul-Madinah English School - Campus Facilities",
      badge: "🌟 Modern Campus",
      title: "World-Class Facilities",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop",
      alt: "Dar-ul-Madinah English School - Students Activities",
      badge: "🎯 Excellence Focus",
      title: "Holistic Development",
    },
  ];

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
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
            {/* Main Heading */}
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

          {/* Right Image Slider */}
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
                <div
                  className="flex transition-transform duration-700 ease-in-out rounded-xl sm:rounded-2xl overflow-hidden"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {aboutImages.map((image, index) => (
                    <div
                      key={image.id}
                      className="w-full flex-shrink-0 relative"
                    >
                      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px]">
                        <img
                          src={image.image}
                          alt={image.alt}
                          className="w-full h-full object-cover object-center"
                          loading={index === 0 ? "eager" : "lazy"}
                        />

                        {/* Badge */}
                        <div className="absolute top-2 sm:top-4 lg:top-6 left-2 sm:left-4 lg:left-6 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-white/95 backdrop-blur-sm text-gray-800 text-xs sm:text-sm font-semibold rounded-full shadow-lg border border-white/20">
                          {image.badge}
                        </div>

                        {/* Title Overlay aligned properly */}
                        <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 left-2 sm:left-4 lg:left-6 right-2 sm:right-4 lg:right-6">
                          <h3 className="text-white text-sm sm:text-base lg:text-lg font-bold drop-shadow-lg">
                            {image.title}
                          </h3>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      </div>
                    </div>
                  ))}
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
                  className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 bg-white/95 hover:bg-white text-gray-800 p-1.5 sm:p-2 rounded-full transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
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
                <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
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
