"use client";

import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import CampusLocation from "@/components/Home/CampusLocation/CampusLocation";
import CurriculumSection from "@/components/Home/Curriculum/Curriculum";
import PdfBookImages from "@/components/Home/PdfBookImages/PdfBookImages";
import Review from "@/components/Home/Review/Review";
import SpecialMoment from "@/components/Home/SpecialMoment/SpecialMoment";
import WorldCampus from "@/components/Home/worldCampus/worldCampus";
import { useEffect, useState } from "react";

export default function HomeClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-green-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-green-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-3xl font-bold align-content-center pt-[10vh]">
      <Banner />
      <About />
      <CurriculumSection />
      <CampusLocation />
      <WorldCampus />
      <SpecialMoment />
      <PdfBookImages />
      <Review />
    </div>
  );
}
