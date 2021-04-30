import React from 'react'
import phone from '../../assets/images/footer-phone.png'
import qrCode from '../../assets/images/qr-code.png'
import googlePlay from '../../assets/images/google-play.svg'
import playStore from '../../assets/images/play-store.svg'

const AppArea = () => {
    return (
    <div className="footer-app d-flex-center">
      <div className="d-block d-md-flex">
       <div className="footer-app__image">
         <img src={phone} alt=""/>
       </div>
       <div className="footer-app__detail d-flex-center flex-column">
         <div className="d-flex align-items-center flex-md-row flex-column">
           <div className="footer-app__qr-image">
             <img src={qrCode} alt=""/>
           </div>
           <div className="footer-app__desc">
             <p className="footer-app__text">Çiçek Bahçem Mobil Uygulamayı İndirin</p>
             <span className="footer-app__small-text">Mobil Uygulamayı QR Kod ile İndirin.</span>
           </div>
         </div>
         <div className="footer-app__logos d-flex mt-4">
           <img className="mr-0 mr-md-3" src={googlePlay} alt=""/>
           <img src={playStore} alt=""/>
           </div>
       </div>
      </div>
    </div>
    )
  }

export default AppArea;
