import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import CampusLocation from "@/components/Home/CampusLocation/CampusLocation";
import CurriculumSection from "@/components/Home/Curriculum/Curriculum";
import PdfBookImages from "@/components/Home/PdfBookImages/PdfBookImages";
import Review from "@/components/Home/Review/Review";
import SpecialMoment from "@/components/Home/SpecialMoment/SpecialMoment";
import WorldCampus from "@/components/Home/worldCampus/worldCampus";

const Home = () => {
  return (
    <div className="text-3xl  font-bold align-content-center pt-[10vh]">
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
