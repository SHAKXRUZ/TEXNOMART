import './Apps.css';
import appBanner_images from '../../assets/images/apps_phone_images.png';
import appBannerQr from '../../assets/images/appBannerQr.png';
import appBannerPlayMarket from '../../assets/images/appBannerPlayMarket.png';
const Apps = ({ state, setState }) => {
    function qushish() {
        setState(state + 1);
    }
    return (
        <div className='apps'>
            <div className="app-banner">
                <div className="app-banner-left" onClick={() => qushish()}>
                    <img src={appBanner_images} alt="app-banner-images" />
                </div>
                <div className="app-banner-right">
                    <div className='app-banner-title'>Ilovani yuklang</div>
                    <p className='app-banner-text'>Haridlarni uydan chiqmagan holda mobil ilova orqali amalga oshiring!</p>
                    <div className="app-banner-qr">
                        <img className='app-qr' src={appBannerQr} alt="qr-code" />
                        <p className='app-qr-text'>Kamerani yo`naltiring va Texnomart ilovasini bepul yuklang</p>
                    </div>
                    <img className='app-banner-play-market' src={appBannerPlayMarket} alt="play-market" />
                </div>
            </div>
        </div >
    )
}
export default Apps;