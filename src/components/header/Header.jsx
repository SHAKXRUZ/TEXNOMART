import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import json
import headerTopRegionData from '../../backend/home/headerTop.json';
import headerCenterCatigoriData from '../../backend/home/headerCenter.json';
import catalogData from '../../backend/home/catalog.json';
// import icons
import { SlLocationPin } from 'react-icons/sl';
import { HiOutlineGlobe } from 'react-icons/hi';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { BsTelephone } from 'react-icons/bs';
import { BiMicrophone } from 'react-icons/bi';
import { GrSearch } from 'react-icons/gr';
import { AiOutlineMenu } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

// import images
import headerTop_logo from '../../assets/images/headerTop_logo.svg';
import headerCenter_logo from '../../assets/images/headerCenter_logo.svg';
import headerCenterRight_icon from '../../assets/images/headerCenterRight_icon.svg';
import { useSelector } from 'react-redux';
const Header = ({ setIsSidebarOpen, setLoginOpen, setBasketOpen }) => {
    const [regionValue, setRegionValue] = useState("Toshkent");
    const [languageValue, setLanguageValue] = useState("O'Z");
    const [catalogValue, setCatalogValue] = useState("Barcha kategoriyalar")
    const [catalog, setCatalog] = useState(false);
    const [catalogIndex, setCatalogIndex] = useState(0);
    const shopValue = useSelector(amountInfo => amountInfo.amountInfo.products)
    return (
        <header className='header'>
            <div className="header-top">
                <div className="header-top-content">
                    <div className="header-top-left-content">
                        <div className='header-region-div'>
                            <div className='header-region-div'>
                                <SlLocationPin className='location-icons' />
                                <p className='regionValue'>{regionValue}</p>
                            </div>
                            <div className='header-region-value'>
                                {
                                    headerTopRegionData.map(data =>
                                        <p key={uuidv4()} className='header-top-data-text' onClick={() => setRegionValue(data.regionName)}>{data.regionName}</p>
                                    )
                                }
                            </div>
                        </div>
                        <ul className="header-top-navbar">
                            <li className="header-top-navbar-list">Bizning do'konlarimiz</li>
                            <li className="header-top-navbar-list B2B">B2B savdosi</li>
                            <li className="header-top-navbar-list">Muddatli to'lovga sotib olish</li>
                            <li className="header-top-navbar-list">To'lov usullari</li>
                            <li className="header-top-navbar-list">Mahsulotlar uchun kafolat</li>
                        </ul>
                    </div>
                    <img className='headerTop-media-logo' src={headerTop_logo} alt="header-logo" />
                    <div className="header-top-right">
                        <a href="tel:+998712099944">
                            <div className='header-top-contact'>
                                <span className='contact-name'>Aloqa markazi :</span>
                                <BsTelephone className='call-icon-media' />
                                <p className='contact-nommer'>+99871 209 99 44</p>
                            </div>
                        </a>
                        <div className='header-top-language-div'>
                            <div className='header-top-language'>
                                <HiOutlineGlobe className='language-global-icons' />
                                <p className='language-global-value'>{languageValue}</p>
                                <IoIosArrowDown className='language-arrow-icons' />
                            </div>
                            <div className='language-hover-value'>
                                <p className='language-hover-value-list' onClick={() => setLanguageValue("РУ")}>РУ</p>
                                <p className='language-hover-value-list' onClick={() => setLanguageValue("УЗ")}>УЗ</p>
                            </div>
                        </div>
                        <div className='header-region-div-media'>
                            <SlLocationPin className='location-icons-media' />
                            <p className='regionValue-media'>Toshkent</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-center">
                <div className="texnomart-sidebar">
                    <div className="headerCenter-sidebar" onClick={() => { setIsSidebarOpen(true) }}>
                        <AiOutlineMenu className='header-center-sidebar-icons' />
                    </div>
                </div>
                <Link to='/'>
                    <img className='headerCenter-texnomartLogo' src={headerCenter_logo} alt="texnomart" />
                </Link>
                <div className="header-search-all">
                    <div className="header-search">
                        <div className="header-search-catalog">
                            <button className='search-catalog-btn'>
                                <span className='search-catalog-value'>{catalogValue}</span>
                                <IoIosArrowDown />
                            </button>
                            <div className="header-search-catalog-list">
                                {
                                    headerCenterCatigoriData.map(res =>
                                        <p onClick={() => setCatalogValue(res.headerKategoriy)} className='header-center-data-text'>{res.headerKategoriy}</p>
                                    )
                                }
                            </div>
                        </div>
                        <div className="search-left">
                            <input type="text" className='header-search-input' />
                            <button className="header-microphone">
                                <BiMicrophone className='microphone-icons' />
                            </button>
                        </div>
                        <div className="header-search-btn-click">
                            <button className='header-search-btn'>
                                <GrSearch className='header-search-btn-icons' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="header-center-right">
                    <button className='right-action-btn'>
                        <img src={headerCenterRight_icon} alt="" />
                        <p className='right-action-title'>Buyurtma holati</p>
                    </button>
                    <button onClick={() => setLoginOpen(true)} id='headerLogin' className='right-action-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M22.8966 15.4853C20.0568 13.6955 16.7875 12.741 13.4466 12.741H13.3273C9.9625 12.741 6.69318 13.6955 3.87727 15.4853C3.23295 15.8671 2.875 16.5353 2.875 17.2751V19.3989C2.875 20.5682 3.80568 21.5228 4.975 21.5228H21.775C22.9205 21.5228 23.875 20.5682 23.875 19.3989V17.2751C23.875 16.5353 23.517 15.8671 22.8966 15.4853ZM21.9659 19.3989C21.9659 19.5182 21.8705 19.6137 21.775 19.6137H4.975C4.87955 19.6137 4.78409 19.5182 4.78409 19.3989V17.2751C4.78409 17.2035 4.83182 17.1319 4.87955 17.0842C7.40909 15.4853 10.3205 14.6501 13.3034 14.6501H13.4227C16.4057 14.6501 19.3409 15.4853 21.8466 17.108C21.8943 17.1557 21.942 17.2035 21.942 17.2989V19.3989H21.9659Z" fill="#333333"></path>
                            <path d="M9.08008 5.29545V7.68182C9.08008 10.0443 11.013 11.9773 13.3755 11.9773C15.738 11.9773 17.671 10.0443 17.671 7.68182V5.29545C17.671 2.93295 15.738 1 13.3755 1C11.013 1 9.08008 2.93295 9.08008 5.29545ZM15.7619 5.29545V7.68182C15.7619 8.99432 14.688 10.0682 13.3755 10.0682C12.063 10.0682 10.9892 8.99432 10.9892 7.68182V5.29545C10.9892 3.98295 12.063 2.90909 13.3755 2.90909C14.688 2.90909 15.7619 3.98295 15.7619 5.29545Z" fill="#333333"></path>
                        </svg>
                        <p className='right-action-title'>Kirish</p>
                    </button>
                    <button className='right-action-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M11.8162 3V4.84874C11.4825 4.97254 11.1861 5.17991 10.9555 5.451C10.7249 5.7221 10.5677 6.04784 10.4989 6.39706L5.96954 7.04412L5.85399 7.09034H5.83088L5.73845 7.13656C5.73232 7.13656 5.72644 7.13899 5.72211 7.14332C5.71777 7.14766 5.71534 7.15354 5.71534 7.15966L5.6229 7.22899H5.59979L5.53046 7.32143C5.52743 7.32143 5.52442 7.32203 5.52162 7.32319C5.51882 7.32435 5.51627 7.32605 5.51412 7.3282C5.51198 7.33034 5.51027 7.33289 5.50911 7.33569C5.50795 7.3385 5.50735 7.3415 5.50735 7.34454L5.46113 7.41387C5.46113 7.43697 5.46113 7.43698 5.43803 7.43698L1.67122 15.9181C1.64458 16.0083 1.62906 16.1014 1.625 16.1954C1.625 17.3783 2.0949 18.5127 2.93133 19.3491C3.76776 20.1856 4.9022 20.6555 6.08508 20.6555C7.26797 20.6555 8.40241 20.1856 9.23884 19.3491C10.0753 18.5127 10.5452 17.3783 10.5452 16.1954C10.5438 16.0988 10.5201 16.0039 10.4758 15.9181L7.07878 8.29202L9.96744 7.87605L10.7069 7.76051C10.8808 8.08609 11.141 8.35751 11.459 8.54502C11.7769 8.73253 12.1404 8.82888 12.5095 8.82353C12.9789 8.8238 13.4342 8.6635 13.8 8.36924C14.1657 8.07498 14.4197 7.66447 14.52 7.20588L18.0326 6.69748L14.7742 14C14.7272 14.0931 14.7034 14.1962 14.7048 14.3004C14.7048 15.4833 15.1747 16.6177 16.0112 17.4542C16.8476 18.2906 17.982 18.7605 19.1649 18.7605C20.3478 18.7605 21.4822 18.2906 22.3187 17.4542C23.1551 16.6177 23.625 15.4833 23.625 14.3004C23.6226 14.1987 23.6071 14.0977 23.5788 14L19.812 5.54202C19.7572 5.42793 19.6723 5.33102 19.5664 5.26176C19.4604 5.19251 19.3376 5.15357 19.2111 5.14916H19.0725L14.3351 5.84244C14.0883 5.38673 13.6866 5.03429 13.2027 4.84874V3H11.8162ZM6.08508 9.44748L8.76576 15.5021H3.3813L6.08508 9.44748ZM6.08508 19.2689C5.38982 19.267 4.71542 19.0312 4.17047 18.5994C3.62552 18.1677 3.24173 17.5651 3.08088 16.8887H9.06618C8.91001 17.5632 8.53066 18.1652 7.9896 18.5972C7.44853 19.0293 6.77745 19.2659 6.08508 19.2689ZM12.5095 7.43698C12.4226 7.44008 12.3359 7.42564 12.2547 7.39452C12.1735 7.36339 12.0995 7.31622 12.0369 7.25582C11.9743 7.19543 11.9246 7.12304 11.8907 7.04299C11.8567 6.96294 11.8392 6.87687 11.8393 6.78992C11.8393 6.61218 11.9099 6.44172 12.0356 6.31604C12.1613 6.19036 12.3317 6.11975 12.5095 6.11975C12.6872 6.11975 12.8577 6.19036 12.9833 6.31604C13.109 6.44172 13.1796 6.61218 13.1796 6.78992C13.1797 6.87687 13.1622 6.96294 13.1283 7.04299C13.0943 7.12304 13.0446 7.19543 12.982 7.25582C12.9195 7.31622 12.8454 7.36339 12.7642 7.39452C12.683 7.42564 12.5964 7.44008 12.5095 7.43698ZM21.8687 13.6071H16.4842L19.1649 7.52941L21.8687 13.6071ZM19.1649 17.374C18.4725 17.371 17.8015 17.1343 17.2604 16.7023C16.7193 16.2703 16.34 15.6682 16.1838 14.9937H22.1691C22.0083 15.6701 21.6245 16.2727 21.0795 16.7045C20.5346 17.1362 19.8602 17.3721 19.1649 17.374Z" fill="black">
                            </path>
                        </svg>
                        <p className='right-action-title'>Taqqoslash</p>
                    </button>
                    <button className='right-action-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M12.3743 21.23H12.1543C11.9507 21.1978 11.7621 21.1035 11.6143 20.96L3.92426 13.26C2.94484 12.2099 2.4114 10.8206 2.43639 9.38491C2.46137 7.9492 3.04282 6.57928 4.05818 5.56392C5.07353 4.54857 6.44345 3.96712 7.87916 3.94213C9.31487 3.91715 10.7042 4.45059 11.7543 5.43001L12.3743 6.00001L12.9743 5.40001C14.0156 4.36737 15.4227 3.78796 16.8893 3.78796C18.3558 3.78796 19.7629 4.36737 20.8043 5.40001C21.8418 6.43876 22.4245 7.84687 22.4245 9.31501C22.4245 10.7831 21.8418 12.1912 20.8043 13.23L13.1043 20.93C13.0093 21.0269 12.8956 21.1035 12.7701 21.1551C12.6446 21.2066 12.5099 21.2321 12.3743 21.23ZM7.81426 5.79001C7.12314 5.79885 6.44974 6.00982 5.87712 6.39688C5.30449 6.78395 4.8577 7.33017 4.59187 7.96818C4.32603 8.60618 4.25278 9.30805 4.38115 9.98719C4.50952 10.6663 4.8339 11.293 5.31426 11.79L12.3143 18.79L19.3143 11.79C19.9762 11.1264 20.3479 10.2273 20.3479 9.29001C20.3479 8.35269 19.9762 7.45363 19.3143 6.79001C18.987 6.45984 18.5976 6.19777 18.1685 6.01892C17.7394 5.84007 17.2791 5.74799 16.8143 5.74799C16.3494 5.74799 15.8891 5.84007 15.46 6.01892C15.0309 6.19777 14.6415 6.45984 14.3143 6.79001L13.0043 8.09001C12.8169 8.27626 12.5634 8.3808 12.2993 8.3808C12.0351 8.3808 11.7816 8.27626 11.5943 8.09001L10.3143 6.83001C9.98683 6.5002 9.59734 6.2385 9.16826 6.06001C8.73917 5.88151 8.27899 5.78974 7.81426 5.79001Z" fill="#333333"></path>
                        </svg>
                        <p className='right-action-title'>Sevimlilar</p>
                    </button>
                    <button onClick={() => setBasketOpen(true)} id='headerSavat' className='right-action-btn'>
                        <div className='headerCenter-RightCard-div'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.125 2.10002C1.125 1.4925 1.6175 1 2.22502 1H5.18101C5.70188 1 6.15135 1.36532 6.2578 1.8752L6.99374 5.40007H20.9253C22.1404 5.40007 23.1254 6.38506 23.1254 7.60011V12.3577C23.1254 13.3992 22.3952 14.2979 21.3757 14.5112L9.42209 17.0113C8.2327 17.26 7.06687 16.4975 6.81821 15.308L4.28693 3.20004H2.22502C1.6175 3.20004 1.125 2.70754 1.125 2.10002ZM8.74366 13.7815C8.86785 14.3763 9.4508 14.7578 10.0456 14.6335L20.0505 12.5416C20.5601 12.435 20.9253 11.9855 20.9253 11.4648V8.70012C20.9253 8.09261 20.4328 7.60011 19.8253 7.60011H7.45307L8.74366 13.7815Z" fill="#333333"></path><path d="M8.12503 22.9999C9.22962 22.9999 10.1251 22.1045 10.1251 20.9999C10.1251 19.8953 9.22962 18.9999 8.12503 18.9999C7.02044 18.9999 6.125 19.8953 6.125 20.9999C6.125 22.1045 7.02044 22.9999 8.12503 22.9999Z" fill="#333333"></path><path d="M18.125 22.9999C19.2296 22.9999 20.1251 22.1045 20.1251 20.9999C20.1251 19.8953 19.2296 18.9999 18.125 18.9999C17.0204 18.9999 16.125 19.8953 16.125 20.9999C16.125 22.1045 17.0204 22.9999 18.125 22.9999Z" fill="#333333"></path>
                            </svg>
                            <p className='shop-value-nomber'>{shopValue}</p>
                        </div>
                        <p className='right-action-title'>Savatcha</p>
                    </button>
                </div>
            </div>
            <div className='header-bottom'>
                <button onClick={() => setCatalog(!catalog)} className="header-catalog-btn">
                    {
                        catalog
                            ?
                            <span className="catalog-icons-exit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M11.1753 10.5389L15.5919 6.13056C15.7489 5.97364 15.837 5.76081 15.837 5.53889C15.837 5.31697 15.7489 5.10414 15.5919 4.94722C15.435 4.79031 15.2222 4.70215 15.0003 4.70215C14.7784 4.70215 14.5655 4.79031 14.4086 4.94722L10.0003 9.36389L5.59194 4.94722C5.43502 4.79031 5.22219 4.70215 5.00027 4.70215C4.77836 4.70215 4.56553 4.79031 4.40861 4.94722C4.25169 5.10414 4.16353 5.31697 4.16353 5.53889C4.16353 5.76081 4.25169 5.97364 4.40861 6.13056L8.82527 10.5389L4.40861 14.9472C4.3305 15.0247 4.26851 15.1169 4.2262 15.2184C4.18389 15.32 4.16211 15.4289 4.16211 15.5389C4.16211 15.6489 4.18389 15.7578 4.2262 15.8594C4.26851 15.9609 4.3305 16.0531 4.40861 16.1306C4.48608 16.2087 4.57824 16.2707 4.67979 16.313C4.78134 16.3553 4.89026 16.3771 5.00027 16.3771C5.11028 16.3771 5.21921 16.3553 5.32076 16.313C5.4223 16.2707 5.51447 16.2087 5.59194 16.1306L10.0003 11.7139L14.4086 16.1306C14.4861 16.2087 14.5782 16.2707 14.6798 16.313C14.7813 16.3553 14.8903 16.3771 15.0003 16.3771C15.1103 16.3771 15.2192 16.3553 15.3208 16.313C15.4223 16.2707 15.5145 16.2087 15.5919 16.1306C15.67 16.0531 15.732 15.9609 15.7744 15.8594C15.8167 15.7578 15.8384 15.6489 15.8384 15.5389C15.8384 15.4289 15.8167 15.32 15.7744 15.2184C15.732 15.1169 15.67 15.0247 15.5919 14.9472L11.1753 10.5389Z" fill="black"></path>
                                </svg>
                            </span>
                            :
                            <span className="catalog-icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0906 2.89307L13.0747 6.90888L17.0906 10.9247L21.1064 6.90888L17.0906 2.89307ZM11.7361 5.57028C10.9968 6.30956 10.9968 7.5082 11.7361 8.24748L15.7519 12.2633C16.4913 13.0026 17.69 13.0026 18.4292 12.2633L22.445 8.24748C23.1842 7.5082 23.1842 6.30956 22.445 5.57028L18.4292 1.55447C17.69 0.815177 16.4913 0.815177 15.7519 1.55447L11.7361 5.57028Z" fill="#333333"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.62575 4.06934H3.83961C3.31685 4.06934 2.89307 4.49312 2.89307 5.01588V8.80202C2.89307 9.32479 3.31685 9.74856 3.83961 9.74856H7.62575C8.1485 9.74856 8.57229 9.32479 8.57229 8.80202V5.01588C8.57229 4.49312 8.1485 4.06934 7.62575 4.06934ZM3.83961 2.17627C2.27134 2.17627 1 3.44761 1 5.01588V8.80202C1 10.3703 2.27134 11.6416 3.83961 11.6416H7.62575C9.19402 11.6416 10.4654 10.3703 10.4654 8.80202V5.01588C10.4654 3.44761 9.19402 2.17627 7.62575 2.17627H3.83961Z" fill="#333333"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.62575 15.4277H3.83961C3.31685 15.4277 2.89307 15.8515 2.89307 16.3743V20.1604C2.89307 20.6832 3.31685 21.107 3.83961 21.107H7.62575C8.1485 21.107 8.57229 20.6832 8.57229 20.1604V16.3743C8.57229 15.8515 8.1485 15.4277 7.62575 15.4277ZM3.83961 13.5347C2.27134 13.5347 1 14.806 1 16.3743V20.1604C1 21.7287 2.27134 23 3.83961 23H7.62575C9.19402 23 10.4654 21.7287 10.4654 20.1604V16.3743C10.4654 14.806 9.19402 13.5347 7.62575 13.5347H3.83961Z" fill="#333333"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9851 15.4277H15.199C14.6762 15.4277 14.2524 15.8515 14.2524 16.3743V20.1604C14.2524 20.6832 14.6762 21.107 15.199 21.107H18.9851C19.5079 21.107 19.9317 20.6832 19.9317 20.1604V16.3743C19.9317 15.8515 19.5079 15.4277 18.9851 15.4277ZM15.199 13.5347C13.6307 13.5347 12.3594 14.806 12.3594 16.3743V20.1604C12.3594 21.7287 13.6307 23 15.199 23H18.9851C20.5534 23 21.8247 21.7287 21.8247 20.1604V16.3743C21.8247 14.806 20.5534 13.5347 18.9851 13.5347H15.199Z" fill="#333333"></path>
                                </svg>
                            </span>
                    }
                    <span className='header-bottom-catalog-text'>Katalog</span>
                </button>
                <ul className="header-bottom-list">
                    <li className="yellow-wek">SARIQ HAFTA</li>
                    <li className="promotions">AKSIYALAR</li>
                    <li className="header-bottom-link"> SMARTFONLAR</li>
                    <li className="header-bottom-link">MUZLATGICHLAR</li>
                    <li className="header-bottom-link">СHANGYUTGICHLAR</li>
                    <li className="header-bottom-link">XAVO SOVUTGICHLAR</li>
                    <li className="header-bottom-link">TELEVIZORLAR</li>
                    <li className="header-bottom-link">BARCHA KATEGORIYALAR</li>
                </ul>
            </div>
            {catalog && <div className='catalog-content'>
                <div className='catalog-container'>
                    <div className="catalog-container-title-group">
                        {
                            catalogData.map((cata, index) =>
                                <div key={uuidv4()} style={catalogIndex === index ? { backgroundColor: "rgba(251, 193, 0, .2)" } : null} onMouseMove={() => setCatalogIndex(index)} className='cata-title-content-div'>
                                    <div key={uuidv4()}  className='cata-img-text-group'>
                                        <img key={uuidv4()} src={cata.img} alt="" />
                                        <p key={uuidv4()} className='data-cata-title'>{cata.title}</p>
                                    </div>
                                    <IoIosArrowForward className='cata-icons' />
                                </div>
                            )

                        }
                    </div>
                    {
                        catalogData.map((res, index) =>
                            catalogIndex === index ? <div className='catalog-texts-container'>
                                <div className='catalog-texts-content'>
                                    <h3 v className='catalog-texts-title'>{res.title}</h3>

                                    <div className='catalog-texts-text-div'>
                                        {
                                            res.textGroup.map(tex =>
                                                <div className='catalog-texts-card'>
                                                    <h3 key={uuidv4()} className='catalog-texts-div-titles'>{tex?.title}</h3>
                                                    {
                                                        tex.text?.map(i =>
                                                            <p key={uuidv4()} className='catalog-texts-div-texts'>{i}</p>
                                                        )
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>

                                </div>
                            </div> : null
                        )
                    }
                </div>
            </div>}
        </header >
    )
}
export default Header;