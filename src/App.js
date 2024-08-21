import React from 'react';
import HeroSection from './components/HeroSection';
import PhotoSwiper from './components/PhotoSwiper';
import MessageSection from './components/MessageSection';
import Footer from './components/Footer';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <PhotoSwiper />
      <MessageSection />
      <Footer />
    </div>
  );
}

export default Home;
