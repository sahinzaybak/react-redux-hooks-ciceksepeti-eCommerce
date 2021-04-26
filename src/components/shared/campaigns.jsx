import React from 'react';

//Images
import delivery from '../../assets/images/delivery.png'
import present from '../../assets/images/present.png'
import stationery from '../../assets/images/stationery.png'

//Css
import '../../assets/scss/campaign.scss'

const Campaigns = () => {
  return (
  <div className="campaign">
    <div className="custom-container">
      <div className="campain-wrp d-flex flex-wrap">
        <div className="campaign-cell">
          <div className="campaign-cell__item d-flex align-items-center">
            <div className="campaign-cell__img">
              <img src={delivery} alt=""/>
            </div>
            <div className="campaign-cell__detail">
              <p className="campaign-cell__text">75 TL Üzerine Teslimat Ücreti Bizden</p>
              <a href="" className="campaign-cell__button">Detaylı Bilgi</a>
            </div>
          </div>
        </div>
        <div className="campaign-cell">
          <div className="campaign-cell__item d-flex align-items-center">
            <div className="campaign-cell__img">
              <img src={present} alt=""/>
            </div>
            <div className="campaign-cell__detail">
              <p className="campaign-cell__text"> Hediye Kategorisi için Sepette %15 İndirim</p>
              <a href="" className="campaign-cell__button">Detaylı Bilgi</a>
            </div>
          </div>
        </div>
        <div className="campaign-cell">
          <div className="campaign-cell__item d-flex align-items-center">
            <div className="campaign-cell__img">
              <img src={stationery} alt=""/>
            </div>
            <div className="campaign-cell__detail">
              <p className="campaign-cell__text">Kırtasiye Kategorisi için Sepette %15 İndirim</p>
              <a href="" className="campaign-cell__button">Detaylı Bilgi</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Campaigns;