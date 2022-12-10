import './Payment.css';
import paymentData from '../../backend/home/payment.json';
import payment_media_img from '../../assets/images/payment_images1.svg';
const Payment = () => {
    return (
        <div className='payment'>
            <h2 className='payment-title'>Telefonlar va maishiy texnika muddatli to'lovga</h2>

            <div className="payment-media-div">
                <div className='payment-images-div'>
                    <img className='payment-data-img' src={payment_media_img} alt="images" />
                </div>
                <p className='payment-data-title'>Muddatli to'lovga sotib olish</p>
                <p className='payment-data-text'>Texnomartda maishiy texnika mahsulotlari uchun qulay onlayn to'lov</p>
            </div>

            <div className="payment-content">
                {
                    paymentData.map(data =>
                        <div className='payment-card'>
                            <div className="payment-images-div">
                                <img className='payment-data-img' src={data.img} alt="payment-img" />
                            </div>
                            <p className='payment-data-title'>{data.title}</p>
                            <p className='payment-data-text'>{data.text}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Payment