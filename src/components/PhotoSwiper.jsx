import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Scrollbar, A11y } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const photos = [
  require("../images/1.jpg"),
  require("../images/2.jpg"),
  require("../images/3.jpg"),
  require("../images/4.jpg"),
  require("../images/5.jpg"),
  require("../images/6.jpg"),
  require("../images/7.jpg"),
  require("../images/8.jpg"),
  require("../images/9.jpg"),
  require("../images/10.jpg"),
];

const PhotoSwiper = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 p-10 text-center min-h-screen animate-fade-in">
      <h2 className="text-3xl font-extrabold mb-4 text-slate-600 animate-slide-in-down">Your Beauty Gallery</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 10,
          stretch: 50,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
        }}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index} className="animate-zoom-in">
            <img src={photo} alt="" className="max-h-[500px] max-w-[440px] rounded-lg" />
          </SwiperSlide>
        ))}
        <div className="inset-0 flex justify-between items-center px-5 z-10">
          <div className="swiper-button-prev bg-transparent text-purple-500 hover:text-purple-700 p-3 rounded-full cursor-pointer">
            <FaArrowLeft className="text-xl" />
          </div>
          <div className="swiper-button-next bg-transparent text-purple-500 hover:text-purple-700 p-3 rounded-full cursor-pointer">
            <FaArrowRight className="text-xl" />
          </div>
        </div>
      </Swiper>
      <h4 className="font-semibold text-xl mt-4 text-slate-600 animate-slide-in-up">Of course, this gallery is not enough to include all your beauty</h4>
    </div>
  );
};

export default PhotoSwiper;