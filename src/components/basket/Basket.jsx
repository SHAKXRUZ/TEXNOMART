import './Basket.css';
const Basket = ({ setBasketOpen }) => {
    return (
        <div className='basket'>
            <div onClick={() => setBasketOpen(false)} className="basket-overlow"></div>
            <div className="basket-container">

            </div>
        </div>
    )
}
export default Basket;