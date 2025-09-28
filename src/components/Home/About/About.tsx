"use client";
import {
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // About section images
  const aboutImages = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKqmddGHmE_GB_HL9BnUiUhaQ3LCdBJueLA&s",
      alt: "Dar-ul-Madinah English School - Students in Learning Environment",
      badge: "🏆 Award Winning",
    },
    {
      id: 2,
      image:
        "https://darulmadinah.edu.in/wp-content/uploads/2022/09/2_20220922_011008_0001-300x300.png",
      alt: "Dar-ul-Madinah English School - Modern Classroom",
      badge: "📚 Quality Education",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_sTUsGkjJVjDtzNpuDXHZInUdvcHwK7wlR665ukLSbo4C0lSGMY5mS_UHtpC_ydWNiQ&usqp=CAU",
      alt: "Dar-ul-Madinah English School - Campus Facilities",
      badge: "🌟 Modern Campus",
    },
    {
      id: 4,
      image: "https://pbs.twimg.com/media/FNzy5zJWYAcaTLk.jpg:large",
      alt: "Dar-ul-Madinah English School - Students Activities",
      badge: "🎯 Excellence Focus",
    },
  ];

  // Auto-play functionality - Always enabled
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
    }, 3500); // 3.5 seconds auto-play
    return () => clearInterval(interval);
  }, [aboutImages.length]);

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

  return (
    <div className="min-h-screen bg-slate-50 flex items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Main Heading */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                <MapPin className="w-4 h-4 mr-2" />
                Dar-ul-Madinah English School
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Excellence in Education
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Empowering minds, building futures, and creating tomorrow's
              leaders through innovative education rooted in Islamic values and
              modern excellence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Explore Programs
                </span>
              </button>
              <button className="px-8 py-4 text-emerald-600 border-2 border-emerald-200 font-semibold rounded-xl hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Visit
                </span>
              </button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-lg mx-auto lg:mx-0">
              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-slate-600 font-medium flex items-center justify-center">
                  <Users className="w-4 h-4 mr-1" />
                  Students
                </div>
              </div>

              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-slate-600 font-medium flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  Teachers
                </div>
              </div>

              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  25+
                </div>
                <div className="text-slate-600 font-medium flex items-center justify-center">
                  <Award className="w-4 h-4 mr-1" />
                  Years
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
              <div className="flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-md border border-emerald-100">
                <Star className="w-4 h-4 text-amber-500 mr-2" />
                <span className="text-sm font-medium text-slate-700">
                  CBSE Affiliated
                </span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-md border border-emerald-100">
                <Award className="w-4 h-4 text-emerald-500 mr-2" />
                <span className="text-sm font-medium text-slate-700">
                  ISO Certified
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Slider */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-lg lg:max-w-2xl">
              {/* Main Slider Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-2">
                {/* Slides Container */}
                <div
                  className="flex transition-transform duration-700 ease-in-out rounded-2xl overflow-hidden"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {aboutImages.map((image, index) => (
                    <div
                      key={image.id}
                      className="w-full flex-shrink-0 relative"
                    >
                      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
                        <Image
                          src={image.image}
                          alt={image.alt}
                          fill
                          className="object-cover object-center"
                          priority={index === 0}
                          quality={95}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                        />

                        {/* Badge Overlay */}
                        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 px-3 sm:px-4 py-2 bg-white/95 backdrop-blur-sm text-gray-800 text-xs sm:text-sm font-semibold rounded-full shadow-lg border border-white/20">
                          {image.badge}
                        </div>

                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-black/10"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg group"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg group"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
                  {aboutImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-[#186d46] w-6 sm:w-8 shadow-lg"
                          : "bg-white/70 hover:bg-white/90 w-2 sm:w-3"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/50 rounded-b-2xl">
                  <div
                    className="h-full bg-[#61ce70] rounded-b-2xl transition-all duration-700 ease-out"
                    style={{
                      width: `${
                        ((currentSlide + 1) / aboutImages.length) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-[#61ce70]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-[#2e6d72]/15 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
