import './Basket.css';
import { useSelector } from 'react-redux';
const Basket = ({ setBasketOpen }) => {
    const data = useSelector(cartInfo => cartInfo.cartInfo)
    return (
        <div className='basket'>
            <div onClick={() => setBasketOpen(false)} className="basket-overlow"></div>
            <div className="basket-container">
                {
                    data.map(res =>
                        <div className='basket-cards'>
                            <img className='baskets-images' src={res.cardData.img} alt="" />
                            <div className='basket-text-card'>
                                <p>{res.cardData.info}</p>
                                <p>{res.cardData.price}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Basket;