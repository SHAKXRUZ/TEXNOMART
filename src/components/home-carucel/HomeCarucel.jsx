import './HomeCarucel.css';
import { useState, useEffect } from 'react'
import BtnSlider from './BtnSlider'
import dataSlider from '../../backend/home/carouselHero.json';
import dataSliderMedia from '../../backend/home/carouselHeroMedia.json';
const HomeCarucel = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    useEffect(() => { setTimeout(() => { slideRight(); }, 5000); });
    const slideRight = () => {
        setSlideIndex(slideIndex === dataSlider.length + 1 - 1 ? 1 : slideIndex + 1);
    };
    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    }
    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length);
        }
    }
    const moveDot = index => {
        setSlideIndex(index);
    }
    return (
        <div className='banner-carucel'>
            <div className="swiper">
                <div className="container-slider">
                    <div className='media-div'>
                        {dataSlider.map((obj, index) => {
                            return (
                                <div key={obj.id} className={slideIndex === index + 1 ? "slide" : "slide"}>
                                    {dataSlider.map((data, index) => slideIndex === index + 1 ? <img src={data.img} alt="carousel-images" /> : null)}
                                </div>)
                        })}
                    </div>

                    <div className='dataSliderMedia'>
                        {dataSlider.map((obj, index) => {
                            return (
                                <div key={obj.id} className={slideIndex === index + 1 ? "slide" : "slide"}>
                                    {dataSliderMedia.map((datas, index) => slideIndex === index + 1 ? <img src={datas.img} alt="carousel-images" /> : null)}
                                </div>)
                        })}
                    </div>
                    
                    <BtnSlider moveSlide={nextSlide} direction={"next"} />
                    <BtnSlider moveSlide={prevSlide} direction={"prev"} />
                    <div className="container-dots">
                        {Array.from({ length: 5 }).map((item, index) => (
                            <div onClick={() => moveDot(index + 1)}
                                className={slideIndex === index + 1 ? "dot active" : "dot"}>
                            </div>))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeCarucel;