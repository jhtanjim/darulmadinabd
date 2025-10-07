"use client";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      review:
        "Absolutely amazing service! The team went above and beyond my expectations. Professional work delivered on time.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1e4?w=100&h=100&fit=crop&crop=face&auto=format",
      role: "Marketing Director",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      review:
        "Outstanding quality and attention to detail. They understood our vision perfectly and brought it to life.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format",
      role: "Business Owner",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      review:
        "Exceptional experience from start to finish. The team's expertise and dedication really showed in the final results.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format",
      role: "Creative Director",
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      review:
        "Incredible service with fast delivery. They exceeded all expectations and provided excellent customer support.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format",
      role: "Tech Entrepreneur",
    },
    {
      id: 5,
      name: "Lisa Wang",
      rating: 5,
      review:
        "The team's professionalism and expertise made our project a huge success. Highly recommend their services!",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face&auto=format",
      role: "Project Manager",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-[#61ce70] fill-[#61ce70]" : "text-gray-300"
        }`}
      />
    ));
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-white via-green-50 to-teal-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#186d46" }}
          >
            Parents Review
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            See what our satisfied clients have to say about their experience
            with us
          </p>
          <div className="flex justify-center items-center space-x-2">
            <div className="flex">{renderStars(5)}</div>
            <span className="text-2xl font-bold" style={{ color: "#186d46" }}>
              4.9
            </span>
            <span className="text-gray-600">based on 250+ reviews</span>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slider */}
          <div
            className="overflow-hidden rounded-3xl shadow-2xl"
            style={{ backgroundColor: "#186d46" }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full flex-shrink-0 p-12 text-white"
                >
                  <div className="max-w-4xl mx-auto text-center">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {renderStars(review.rating)}
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 italic">
                      &ldquo;{review.review}&rdquo;
                    </blockquote>

                    {/* User Info */}
                    <div className="flex items-center justify-center">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover border-3 mr-6"
                        style={{ borderColor: "#61ce70" }}
                      />
                      <div className="text-left">
                        <h4 className="text-xl font-semibold text-white">
                          {review.name}
                        </h4>
                        <p className="opacity-90" style={{ color: "#61ce70" }}>
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            style={{ backgroundColor: "#61ce70" }}
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            style={{ backgroundColor: "#61ce70" }}
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "scale-125 shadow-lg"
                  : "hover:scale-110"
              }`}
              style={{
                backgroundColor: index === currentIndex ? "#186d46" : "#61ce70",
                opacity: index === currentIndex ? 1 : 0.5,
              }}
            />
          ))}
        </div>

        {/* Floating Review Cards (Marquee Effect) */}
        <div className="mt-16 overflow-hidden">
          <div className="flex space-x-6 animate-marquee">
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ backgroundColor: "#2e6d72" }}
              >
                <div className="flex mb-3">{renderStars(review.rating)}</div>
                <p className="text-white text-sm mb-4 line-clamp-3">
                  &ldquo;{review.review}&rdquo;
                </p>
                <div className="flex items-center">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {review.name}
                    </p>
                    <p
                      className="text-xs opacity-80"
                      style={{ color: "#61ce70" }}
                    >
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Review;
