import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import CampusLocation from "@/components/Home/CampusLocation/CampusLocation";
import CurriculumSection from "@/components/Home/Curriculum/Curriculum";
import Review from "@/components/Home/Review/Review";
import SpecialMoment from "@/components/Home/SpecialMoment/SpecialMoment";
import WorldCampus from "@/components/Home/worldCampus/worldCampus";
import dynamicImport from "next/dynamic";

// Add these exports to prevent static generation
export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

// Disable SSR for PdfBookImages
const PdfBookImages = dynamicImport(
  () => import("@/components/Home/PdfBookImages/PdfBookImages"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center py-20">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-green-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-green-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
      </div>
    ),
  }
);

const Home = () => {
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
};

export default Home;
