import React from 'react';
import productListIco from '../../assets/images/product-list-ico.svg'

const Categories = () => {
  return (
    <div class="product-list mt-2">
      <div className="custom-container">
        <div className="d-flex mb-3">
          <img src={productListIco} alt=""/>
          <h3 className="product-list-title ml-2">Tüm Kategoriler</h3>
        </div>
        <div className="product-list__wrp d-flex flex-wrap">
          <div className="product-list__cell">
            <div className="product-list__item d-flex flex-column justify-content-between">
              <div>
                <img src="https://cdn03.ciceksepeti.com/cicek/kc953218-1/L/efsane-sevimli-maymun-pelus-80-cm-kc953218-1-445ae385357b42b2839a68c0eebd8680.jpg" alt=""/>
                <p className="product-list__category mt-2">Moda, Aksesuar</p>
                <h2 className="product-list__name mt-2">Efsane Sevimli Maymun Peluş 80 Cm</h2>
              </div>
              <div>
                <p className="product-list__price mb-1">99,90 ₺</p>
                <div className="button product-list__add-basket flex-center">
                  <div className="spinner-border position-absolute" role="status"></div>
                  <p>Sepete Ekle</p>
                </div>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
   
  );
};

export default Categories;