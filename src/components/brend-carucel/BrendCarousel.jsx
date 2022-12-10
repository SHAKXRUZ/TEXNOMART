import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"
import "./BrendCarousel.css";
import { Navigation } from "swiper";

// images import 
import brend_images1 from '../../assets/images/brend_images1.webp';
import brend_images2 from '../../assets/images/brend_images2.webp';
import brend_images3 from '../../assets/images/brend_images3.webp';
import brend_images4 from '../../assets/images/brend_images4.webp';
import brend_images5 from '../../assets/images/brend_images5.webp';
import brend_images6 from '../../assets/images/brend_images6.webp';
import brend_images7 from '../../assets/images/brend_images7.webp';
import brend_images8 from '../../assets/images/brend_images8.webp';
import brend_images9 from '../../assets/images/brend_images9.webp';
import brend_images10 from '../../assets/images/brend_images10.webp';

export default function App() {
  return (
    <div className="container">
      <Swiper
        slidesPerView={8}
        spaceBetween={20}
        pagination={{
          clickable: true
        }}
      
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="brend-card"><img className="brend-images" src={brend_images1} alt="brend-images" /></div></SwiperSlide>
        <SwiperSlide><div className="brend-card"><img className="brend-images" src={brend_images2} alt="brend-images" /></div></SwiperSlide>
        <SwiperSlide><div className="brend-card"><img className="brend-images" src={brend_images3} alt="brend-images" /></div></SwiperSlide>
        <SwiperSlide><div className="brend-card"><img className="brend-images" src={brend_images4} alt="brend-images" /></div></SwiperSlide>
        <SwiperSlide><div className="brend-card"><img className="brend-images" src={brend_images5} alt="brend-images" /></div></SwiperSlide>
        <SwiperSlide><div className="brend-card"><img className="brend-images" src={brend_images6} alt="brend-images" /></div></SwiperSlide>
        <SwiperSlide><div className="brend-card"><img className="brend-images" src={brend_images7} alt="brend-images" /></div></SwiperSlide>
        <SwiperSlide><div className="brend-card"><img className="brend-images" src={brend_images8} alt="brend-images" /></div></SwiperSlide>
        <SwiperSlide><div className="brend-card"><img className="brend-images" src={brend_images9} alt="brend-images" /></div></SwiperSlide>
        <SwiperSlide><div className="brend-card"><img className="brend-images" src={brend_images10} alt="brend-images" /></div></SwiperSlide>
      </Swiper>
    </div>
  );
}
