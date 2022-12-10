import './App.css';
import Header from './components/header/Header';
import Apps from './components/apps/Apps';
import Footer from './components/footer/Footer';
import Payment from './components/payment/Payment';
import HomeCarucel from './components/home-carucel/HomeCarucel';
import BrendCarucel from './components/brend-carucel/BrendCarousel';
import Sidebar from './components/sidebar/Sidebar';
import { useState, useEffect } from "react";
import { Overlay } from "./components/utils/index";
import CategoriyaCarucel from './components/categoriya-carucel/CategoriyaCarucel';
import Login from './components/login/Login';
import Basket from './components/basket/Basket';
import Need from './components/need/Need';
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);
  useEffect(() => {
    if (isSidebarOpen === true || loginOpen === true || basketOpen) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen, loginOpen, basketOpen]);
  return (
    <div className='App'>
      <Need />
      <Header setBasketOpen={setBasketOpen} setLoginOpen={setLoginOpen} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      {loginOpen ? <Login setLoginOpen={setLoginOpen} /> : null}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      {isSidebarOpen && <Overlay setIsSidebarOpen={setIsSidebarOpen} />}
      {basketOpen ? <Basket setBasketOpen={setBasketOpen} /> : null}
      <HomeCarucel />
      <BrendCarucel />
      <CategoriyaCarucel />
      <Apps />
      <Payment />
      <Footer />
    </div>
  )
}
export default App;
