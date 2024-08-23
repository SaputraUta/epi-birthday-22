import React from "react";
import HeroSection from "./components/HeroSection";
import PhotoSwiper from "./components/PhotoSwiper";
import MessageSection from "./components/MessageSection";
import Footer from "./components/Footer";
import AudioPlayer from "./components/AudioPlayer";

const Home = () => {
  return (
    <div>
      <AudioPlayer />
      <HeroSection />
      <PhotoSwiper />
      <MessageSection />
      <Footer />
    </div>
  );
};

export default Home;
