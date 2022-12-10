import './Need.css';
import telegram_fixed from '../../assets/images/telegram_fixed.svg';
import { IoMdChatboxes } from 'react-icons/io';
import { HiArrowNarrowUp } from 'react-icons/hi';
import { useState, useEffect } from 'react';
const Need = () => {
    const [bactetopOpen, setBactetopOpen] = useState(true);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])



    return (
        <div className='need'>
            {bactetopOpen ? <div onClick={scrollToTop} className='bactetop'>
                <HiArrowNarrowUp className='bactetop-icons' />
            </div> : null}
            <div className='telegram-fixed'>
                <img className='telegram_images' src={telegram_fixed} alt="telegram" />
            </div>
            <div className='chat-fixed'>
                <div className="chat-div">
                    <IoMdChatboxes className="chat-icons" />
                </div>
            </div>

        </div>
    )
}
export default Need;