import React from "react";
import Footer from "../sections/Footer";
import RandomJobs from "../sections/RandomJobs";
import HowitWorks from "../sections/HowitWoks";
import HomeHeader from "../sections/Header"
import DownloadApp from "../components/DownloadApp";
import OurStories from '../sections/OurStories'
import TopFreeLancer from '../sections/TopFreeLancer'

import BlogPost from "../sections/BlogPost";
const Home = () => {
  return (
    <>
      {/* <HomeHeader/>
      <RandomJobs />
      <HowitWorks /> */}
      <OurStories/>
      <TopFreeLancer/>
      {/* <DownloadApp />
      <Footer /> */}
    </>
  );
};
export default Home;
