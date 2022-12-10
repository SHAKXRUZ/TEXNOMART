import './CategoriyaCarucel.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"
import { Navigation } from "swiper";
import cate1 from '../../assets/images/cate1.svg';
import cate2 from '../../assets/images/cate2.svg';
import cate3 from '../../assets/images/cate3.svg';
import cate4 from '../../assets/images/cate4.svg';
import cate5 from '../../assets/images/cate5.svg';
import cate6 from '../../assets/images/cate6.svg';
import cate7 from '../../assets/images/cate7.svg';
const CategoriyaCarucel = () => {
    return (
        <div className="categoriya">
            <h2 className='categoriy-title'>Ommabop kategoriyalar</h2>
            <div className='categoriy-carousel'>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    <SwiperSlide><div className="categoriy-card">
                        <img className='cate-images' src={cate1} alt="cate-images" />
                        <p className='cate-text'>Chang yutgichlar</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="categoriy-card">
                        <img className='cate-images' src={cate2} alt="cate-images" />
                        <p className='cate-text'>Planshetlar</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="categoriy-card">
                        <img className='cate-images' src={cate3} alt="cate-images" />
                        <p className='cate-text'>Muzlatgichlar</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="categoriy-card">
                        <img className='cate-images' src={cate4} alt="cate-images" />
                        <p className='cate-text'>Havo sovutgichlar</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="categoriy-card">
                        <img className='cate-images' src={cate5} alt="cate-images" />
                        <p className='cate-text'>Telvizorlar</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="categoriy-card">
                        <img className='cate-images' src={cate6} alt="cate-images" />
                        <p className='cate-text'>Fenlar</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="categoriy-card">
                        <img className='cate-images' src={cate7} alt="cate-images" />
                        <p className='cate-text'>Kir yuvish mashenalari</p>
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default CategoriyaCarucel;