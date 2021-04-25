import React from 'react';
import productListIco from '../../assets/images/product-list-ico.svg'
import ProductLoader from '../content-loaders/products'
import '../../assets/scss/campaign.scss'
import delivery from '../../assets/images/delivery.png'
import present from '../../assets/images/present.png'
import stationery from '../../assets/images/stationery.png'

//Component
import ProductCard from './product-card'

const ProductList = ({productList}) => {
  return (
    <div className="product-list mt-2">
      <div className="custom-container">
        {productList.length == 0 ? <ProductLoader />
        :
        <>
          <div className="d-flex mb-3">
            <img src={productListIco} alt=""/>
            <h3 className="product-list-title ml-2">Tüm Kategoriler</h3>
          </div>
          <div className="product-list__wrp d-flex flex-wrap">
            {productList.map((product) => 
              <ProductCard product={product} />
            )}
          </div>
        </>
      }
      </div>
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
    </div>
  );
};

export default ProductList;