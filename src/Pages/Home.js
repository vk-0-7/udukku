import React from "react";
import Banner from "../Components/Banner";
import Header from "../Components/Navigation/Header";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import WhyUdukku from "../Components/WhyUdukku";
import NeedYourSongCompleted from "../Components/NeedYourSongCompleted";
import DiscoverProfiles from "../Components/DiscoverProfiles";
import ShowCaseSkills from "../Components/ShowCaseSkills";
import DiscoverJobs from "../Components/DiscoverJobs";
import Footer from "../Components/Footer/Footer";
SwiperCore.use([Navigation, Pagination]);
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <NeedYourSongCompleted />
      <DiscoverProfiles />
      <ShowCaseSkills />
      <DiscoverJobs />
      <WhyUdukku />
      <div
        className="container-fluid mt-5 pt-5"
        style={{ paddingLeft: "10%", paddingRight: "10%", textAlign: "center" }}
      >
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="why-udukku-text">Our Mission</h1>
            <p className="header-subtext">
              To provide a marketplace platform for musicians to monetize their
              talent and gain more opportunities to share their creativity,
              passion, and skills.
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
