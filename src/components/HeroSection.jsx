import React from "react";
import hbd from "../images/hbd.svg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-400 via-black-500 to-red-500 text-slate-100 p-10 text-center min-h-screen flex flex-col justify-between animate-fade-in">
      <h2 className="text-4xl font-extrabold mb-4 animate-slide-in-down">
        Celebrating 22 Years of You, My Love!
      </h2>
      <img src={`${hbd}`} alt="Happy Birthday" className="animate-pulse" />
      <h4 className="font-semibold text-xl animate-slide-in-up">
        Ayu Devi Trisna Yanti / Tuan Putri Ndep / Epi Cantik
      </h4>
    </section>
  );
};

export default HeroSection;
