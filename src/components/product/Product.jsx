import './Product.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"
import zurnarxData from '../../backend/product/product.json';
import { Navigation } from "swiper";
import { HiArrowRight } from 'react-icons/hi';
import { CiHeart } from 'react-icons/ci';
import { RiScalesFill } from 'react-icons/ri';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const Product = () => {
    const dispatchs = useDispatch()
    const [productSoni, setProductSoni] = useState(1)
    const [productNumbers, setProductNumber] = useState(1)
    return (
        <div className='product'>
            <div className="zurnarx">
                <div className='zurnarx-title-content'>
                    <h3 className='zurnarx-title'>Zo'r narx</h3>
                    <Link className="zurnarx-link">
                        Barchasini ko'rish
                        <HiArrowRight />
                    </Link>
                </div>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={0}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        200: {
                            slidesPerView: 1
                        },
                        450: {
                            slidesPerView: 2
                        },
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                        565: {
                            slidesPerView: 2,
                            spaceBetween: 50
                        },
                        750: {
                            slidesPerView: 3
                        },
                        950: {
                            slidesPerView: 4
                        },
                        1200: {
                            slidesPerView: 5
                        },
                        1350: {
                            slidesPerView: 6
                        }
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    {zurnarxData.map((data, index) =>
                        <div className='product-container' key={index}>
                            {data.Zurnarx.map((res, index) =>
                                <SwiperSlide>
                                    <div className='product-card'>
                                        <p className='product-status'>Zo'r narx</p>
                                        <Link className='card-img-link'>
                                            <img key={index} className='img' src={res.img} alt="" />
                                        </Link>
                                        <p className='product-card-title'>{res.info}</p>
                                        <p className='product-card-price'>{res.price}</p>
                                        <div className='product-card-bottom-content'>
                                            <button onClick={() => {
                                                setProductSoni(productSoni + productNumbers)
                                                setProductNumber(1)
                                                dispatchs({ info: res, type: "CART", number: productSoni, state: true })
                                            }} className='basket-card'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33301 1.74999C1.33301 1.24373 1.74342 0.833313 2.24969 0.833313H4.71301C5.14707 0.833313 5.52164 1.13774 5.61034 1.56264L6.22362 4.50004H17.8333C18.8458 4.50004 19.6666 5.32086 19.6666 6.3334V10.298C19.6666 11.166 19.0581 11.9149 18.2086 12.0926L8.24725 14.1761C7.25609 14.3833 6.28456 13.7479 6.07735 12.7567L3.96795 2.66668H2.24969C1.74342 2.66668 1.33301 2.25626 1.33301 1.74999ZM7.68189 11.4846C7.78538 11.9803 8.27118 12.2982 8.76684 12.1946L17.1042 10.4513C17.5289 10.3625 17.8333 9.98794 17.8333 9.55398V7.25008C17.8333 6.74382 17.4229 6.3334 16.9166 6.3334H6.6064L7.68189 11.4846Z" fill="#333333"></path><path d="M7.16669 19.1666C8.08718 19.1666 8.83338 18.4204 8.83338 17.4999C8.83338 16.5795 8.08718 15.8333 7.16669 15.8333C6.2462 15.8333 5.5 16.5795 5.5 17.4999C5.5 18.4204 6.2462 19.1666 7.16669 19.1666Z" fill="#333333"></path><path d="M15.4997 19.1666C16.4202 19.1666 17.1664 18.4204 17.1664 17.4999C17.1664 16.5795 16.4202 15.8333 15.4997 15.8333C14.5792 15.8333 13.833 16.5795 13.833 17.4999C13.833 18.4204 14.5792 19.1666 15.4997 19.1666Z" fill="#333333"></path>
                                                </svg>
                                                <p className='basket-titles'>Savatchaga</p>
                                            </button>
                                            <CiHeart className='heart' />
                                            <RiScalesFill className='scales' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </div>
                    )}
                </Swiper>
            </div>
            <div className="zurnarx">
                <div className='zurnarx-title-content'>
                    <h3 className='zurnarx-title'>Xit savdo</h3>
                    <Link className="zurnarx-link">
                        Barchasini ko'rish
                        <HiArrowRight />
                    </Link>
                </div>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={0}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        200: {
                            slidesPerView: 1
                        },
                        450: {
                            slidesPerView: 2
                        },
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                        565: {
                            slidesPerView: 2,
                            spaceBetween: 50
                        },
                        750: {
                            slidesPerView: 3
                        },
                        950: {
                            slidesPerView: 4
                        },
                        1200: {
                            slidesPerView: 5
                        },
                        1350: {
                            slidesPerView: 6
                        }
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    {zurnarxData.map((data, index) =>
                        <div className='product-container' key={index}>
                            {data.Xitsavdo.map((res, index) =>
                                <SwiperSlide>
                                    <div className='product-card'>
                                        <p className='product-status2'>Xit savdo</p>
                                        <Link className='card-img-link'>
                                            <img key={index} className='img' src={res.img} alt="" />
                                        </Link>
                                        <p className='product-card-title'>{res.info}</p>
                                        <p className='product-card-price'>{res.price}</p>
                                        <div className='product-card-bottom-content'>
                                            <button onClick={() => {
                                                setProductSoni(productSoni + productNumbers)
                                                setProductNumber(1)
                                                dispatchs({ info: res, type: "CART", number: productSoni, state: true })
                                            }} className='basket-card'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33301 1.74999C1.33301 1.24373 1.74342 0.833313 2.24969 0.833313H4.71301C5.14707 0.833313 5.52164 1.13774 5.61034 1.56264L6.22362 4.50004H17.8333C18.8458 4.50004 19.6666 5.32086 19.6666 6.3334V10.298C19.6666 11.166 19.0581 11.9149 18.2086 12.0926L8.24725 14.1761C7.25609 14.3833 6.28456 13.7479 6.07735 12.7567L3.96795 2.66668H2.24969C1.74342 2.66668 1.33301 2.25626 1.33301 1.74999ZM7.68189 11.4846C7.78538 11.9803 8.27118 12.2982 8.76684 12.1946L17.1042 10.4513C17.5289 10.3625 17.8333 9.98794 17.8333 9.55398V7.25008C17.8333 6.74382 17.4229 6.3334 16.9166 6.3334H6.6064L7.68189 11.4846Z" fill="#333333"></path><path d="M7.16669 19.1666C8.08718 19.1666 8.83338 18.4204 8.83338 17.4999C8.83338 16.5795 8.08718 15.8333 7.16669 15.8333C6.2462 15.8333 5.5 16.5795 5.5 17.4999C5.5 18.4204 6.2462 19.1666 7.16669 19.1666Z" fill="#333333"></path><path d="M15.4997 19.1666C16.4202 19.1666 17.1664 18.4204 17.1664 17.4999C17.1664 16.5795 16.4202 15.8333 15.4997 15.8333C14.5792 15.8333 13.833 16.5795 13.833 17.4999C13.833 18.4204 14.5792 19.1666 15.4997 19.1666Z" fill="#333333"></path>
                                                </svg>
                                                <p className='basket-titles'>Savatchaga</p>
                                            </button>
                                            <CiHeart className='heart' />
                                            <RiScalesFill className='scales' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </div>
                    )}
                </Swiper>
            </div>
            <div className="zurnarx">
                <div className='zurnarx-title-content'>
                    <h3 className='zurnarx-title'>To'plamlar</h3>
                    <Link className="zurnarx-link">
                        Barchasini ko'rish
                        <HiArrowRight />
                    </Link>
                </div>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={0}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        200: {
                            slidesPerView: 1
                        },
                        450: {
                            slidesPerView: 2
                        },
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                        565: {
                            slidesPerView: 2,
                            spaceBetween: 50
                        },
                        750: {
                            slidesPerView: 3
                        },
                        950: {
                            slidesPerView: 4
                        },
                        1200: {
                            slidesPerView: 5
                        },
                        1350: {
                            slidesPerView: 6
                        }
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    {zurnarxData.map((data, index) =>
                        <div className='product-container' key={index}>
                            {data.Tavsiyaetamiz.map((res, index) =>
                                <SwiperSlide>
                                    <div className='product-card'>
                                        <p className='product-status3'>Tavsiya etamiz</p>
                                        <Link className='card-img-link'>
                                            <img key={index} className='img' src={res.img} alt="" />
                                        </Link>
                                        <p className='product-card-title'>{res.info}</p>
                                        <p className='product-card-price'>{res.price}</p>
                                        <div className='product-card-bottom-content'>
                                            <button onClick={() => {
                                                setProductSoni(productSoni + productNumbers)
                                                setProductNumber(1)
                                                dispatchs({ info: res, type: "CART", number: productSoni, state: true })
                                            }} className='basket-card'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33301 1.74999C1.33301 1.24373 1.74342 0.833313 2.24969 0.833313H4.71301C5.14707 0.833313 5.52164 1.13774 5.61034 1.56264L6.22362 4.50004H17.8333C18.8458 4.50004 19.6666 5.32086 19.6666 6.3334V10.298C19.6666 11.166 19.0581 11.9149 18.2086 12.0926L8.24725 14.1761C7.25609 14.3833 6.28456 13.7479 6.07735 12.7567L3.96795 2.66668H2.24969C1.74342 2.66668 1.33301 2.25626 1.33301 1.74999ZM7.68189 11.4846C7.78538 11.9803 8.27118 12.2982 8.76684 12.1946L17.1042 10.4513C17.5289 10.3625 17.8333 9.98794 17.8333 9.55398V7.25008C17.8333 6.74382 17.4229 6.3334 16.9166 6.3334H6.6064L7.68189 11.4846Z" fill="#333333"></path><path d="M7.16669 19.1666C8.08718 19.1666 8.83338 18.4204 8.83338 17.4999C8.83338 16.5795 8.08718 15.8333 7.16669 15.8333C6.2462 15.8333 5.5 16.5795 5.5 17.4999C5.5 18.4204 6.2462 19.1666 7.16669 19.1666Z" fill="#333333"></path><path d="M15.4997 19.1666C16.4202 19.1666 17.1664 18.4204 17.1664 17.4999C17.1664 16.5795 16.4202 15.8333 15.4997 15.8333C14.5792 15.8333 13.833 16.5795 13.833 17.4999C13.833 18.4204 14.5792 19.1666 15.4997 19.1666Z" fill="#333333"></path>
                                                </svg>
                                                <p className='basket-titles'>Savatchaga</p>
                                            </button>
                                            <CiHeart className='heart' />
                                            <RiScalesFill className='scales' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </div>
                    )}
                </Swiper>
            </div>
        </div >
    )
}
export default Product;