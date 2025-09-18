"use client";

import heroImg from "@/assets/Images/logo.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-[var(--primary)] text-white overflow-hidden">
      {/* Background Accent Shape */}
      <div className="absolute inset-0 bg-[var(--accent)] opacity-90 clip-path-custom"></div>

      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="text-[var(--secondary)]">Darul Madina BD</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-lg">
            A modern educational institution committed to knowledge, values, and
            excellence. Join us in building the leaders of tomorrow.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-[var(--secondary)] text-[var(--primary)] font-semibold rounded-xl shadow-md hover:bg-white hover:text-[var(--primary)] transition">
              Get Started
            </button>
            <button className="px-6 py-3 border-2 border-[var(--secondary)] text-[var(--secondary)] font-semibold rounded-xl hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src={heroImg}
            alt="Darul Madina BD"
            className="rounded-2xl shadow-lg object-contain bg-white"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
