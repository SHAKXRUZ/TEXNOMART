import './Footer.css';
import footerData from '../../backend/footer/footer.json';
import footerBottomData from '../../backend/footer/footerBottom.json';
import footer_teligram_icons from '../../assets/images/footer_teligram_icons.svg';
import footer_facebook_icons from '../../assets/images/footer_facebook_icons.svg';
import footer_instagram_icons from '../../assets/images/footer_instagram_icons.svg';
import footer_youtub_icons from '../../assets/images/footer_youtub_icons.svg';
import footer_playmarket_images from '../../assets/images/footer_playmarket_images.svg';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useState } from 'react';
const Footer = () => {
    const [activ1, setActiv1] = useState(false);
    const [activ2, setActiv2] = useState(false);
    const [activ3, setActiv3] = useState(false);
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className='footer-media-div'>
                    <p onClick={() => setActiv1(!activ1) || setActiv2(false) || setActiv3(false)} className='footer-media-title'>Kompaniya {activ1 ? <IoIosArrowUp IoIosArrowDown className='footer-media-icons' /> : <IoIosArrowDown className='footer-media-icons' />}</p>
                    {activ1 && <div className="footer-acardion-content">
                        <p className="footer-media-acardion-title">B2B savdosi</p>
                        <p className="footer-media-acardion-title">Biz haqimizda</p>
                        <p className="footer-media-acardion-title">Yangiliklar va sharhlar</p>
                        <p className="footer-media-acardion-title">IMEI ni tekshirish</p>
                    </div>}
                    <p onClick={() => setActiv2(!activ2) || setActiv1(false) || setActiv3(false)} className='footer-media-title'>Ma'lumot {activ2 ? <IoIosArrowUp IoIosArrowDown className='footer-media-icons' /> : <IoIosArrowDown className='footer-media-icons' />}</p>
                    {activ2 && <div className="footer-acardion-content">
                        <p className="footer-media-acardion-title">Bepul yetkazib berish</p>
                        <p className="footer-media-acardion-title">Bonus tizimi</p>
                        <p className="footer-media-acardion-title">Texnomartda ishlash</p>
                        <p className="footer-media-acardion-title">Shaxsiy kabinet</p>
                        <p className="footer-media-acardion-title">Aloqa raqamlari</p>
                    </div>}
                    <p onClick={() => setActiv3(!activ3) || setActiv1(false) || setActiv2(false)} className='footer-media-title'>Haridorga yordam {activ3 ? <IoIosArrowUp IoIosArrowDown className='footer-media-icons' /> : <IoIosArrowDown className='footer-media-icons' />}</p>
                    {activ3 && <div className="footer-acardion-content">
                        <p className="footer-media-acardion-title">Muddatli to'lovga sotib olish</p>
                        <p className="footer-media-acardion-title">Maxsulotni qaytarish</p>
                        <p className="footer-media-acardion-title">Mahsulotlar uchun kafolat</p>
                        <p className="footer-media-acardion-title">Ko'p so'raladigan savollar</p>
                    </div>}
                </div>
                <div className="footer-top">
                    <div className="footer-top-left">
                        <p className='footer-phone-title'>Savolingiz bormi? Qo'ng'iroq qiling</p>
                        <span>
                            <a className='footer-phone-nommer' href="tel:+998 71 209 99 44">+998 71 209 99 44</a>
                        </span>
                        <ul className="footer-left-icons">
                            <li className='footer-left-icon'>
                                <img src={footer_facebook_icons} alt="facebook" />
                            </li>
                            <li className='footer-left-icon'>
                                <img src={footer_teligram_icons} alt="teligram" />
                            </li>
                            <li className='footer-left-icon'>
                                <img src={footer_instagram_icons} alt="instagram" />
                            </li>
                            <li className='footer-left-icon'>
                                <img src={footer_youtub_icons} alt="youtub" />
                            </li>
                        </ul>
                        <img className='footer_play-market' src={footer_playmarket_images} alt="play-market" />
                        <p className='footer-top-left-last-text'>Do`konlar manzillari Toshkent</p>
                        <div className="footer-right-content-top-media">
                            <img src={footer_teligram_icons} alt="teligram" />
                            <p className='footer-right-content-top-text'>Bonusingizni bilib oling</p>
                        </div>
                        <div className="footer-bottom-images-media-div">
                            <p className='footer-bottom-media-tex'>Quyidagi to'lovlarni qabul qilamiz</p>
                            {
                                footerBottomData.map(det =>
                                    <div className='footer-bottom-media-im'>
                                        {
                                            det.images.map(im =>
                                                <img src={im.img} alt="images" />
                                            )
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className='footer-right-content'>
                        <div className="footer-top-right">
                            {
                                footerData.map(data =>
                                    <div className='footer-top-right-content'>
                                        <p className='footer-data-title'>{data.title}</p>
                                        {
                                            data.textGroup.map(res =>
                                                <p className='footer-data-text'>{res.text}</p>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <div className="footer-right-position">
                            <div className="footer-right-content-top">
                                <img src={footer_teligram_icons} alt="teligram" />
                                <p className='footer-right-content-top-text'>Bonusingizni bilib oling</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    {
                        footerBottomData.map(respons =>
                            <div className='footer-bottom-div'>
                                <p className='footer-bottom-tex'>{respons.text}</p>
                                <div className='footer-bottom-images-group'>
                                    {
                                        respons.images.map(img =>
                                            <img className='footer-bottom-images' src={img.img} alt="card" />
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </footer>
    )
}
export default Footer;

