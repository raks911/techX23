import React  from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import  { Autoplay } from 'swiper';
import img1 from './assets/images/img1.jpg';
import img2 from './assets/images/img2.jpg';
import img4 from './assets/images/img4.jpg';
import img3 from './assets/images/img3.jpg';
import img5 from './assets/images/img5.jpg';
import img6 from './assets/images/img6.jpg';
import img7 from './assets/images/img7.jpg';
import img8 from './assets/images/img8.jpg';
import img9 from './assets/images/img9.jpg';
// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "..//styles.css";

// import required modules
import { EffectCoverflow} from "swiper";

export default function App() {
  return (
    <main className="gallery-section">
    <div className="gallery-header">
      <h2>Gallery</h2>
    </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 105,
          modifier: 1,
          slideShadows: true,
        

        
        }}
        autoplay={true}
        pagination={true}
        modules={[EffectCoverflow,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="img-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img-3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="img-5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6}  alt="img-6"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7}alt="img-7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8}alt="img-8"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="img-9"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="img-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img-3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="img-5" />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
