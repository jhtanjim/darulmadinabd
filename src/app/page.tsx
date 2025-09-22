import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import Book from "@/components/Home/Book/Book";
import CampusLocation from "@/components/Home/CampusLocation/CampusLocation";
import Review from "@/components/Home/Review/Review";
import SpecialMoment from "@/components/Home/SpecialMoment/SpecialMoment";
import WorldCampus from "@/components/Home/worldCampus/worldCampus";

const Home = () => {
  return (
    <div className="text-3xl  font-bold align-content-center pt-[10vh]">
      <Banner />
      <About />
      <CampusLocation />
      <WorldCampus />
      <SpecialMoment />
      <Book />
      <Review />
    </div>
  );
};

export default Home;
