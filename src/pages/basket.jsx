import React, { PureComponent } from "react";
import '../assets/scss/products.scss'
import { connect } from "react-redux"; 
import productListIco from '../assets/images/product-list-ico.svg'
import '../assets/scss/basket.scss'

class basket extends PureComponent {
  render() {
    return (
      <div className="basket mt-3"> 
        <div className="custom-container">
          <div className="d-flex align-items-center">
            <img className="mr-2" src={productListIco} alt=""/>
            <h3>Sepetim(2)</h3>
          </div>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="product-detail__sticky position-relative w-100 mb-4">
                <div className="product-detail__sticky-info d-flex">
                  <img src="https://cdn03.ciceksepeti.com/cicek/kc1884970-1/L/nutellali-yilbasi-hediye-kutusu-kc1884970-1-75c3eb7777c24c9fb259fab3ec8a8a16.jpg" width={50} alt=""/>
                  <p className="product-detail__sticky-name ml-3 pt-3">Nutellalı Yılbaşı Hediye Kutusu</p>
                </div>
                <div className="product-detail__sticky-quantity d-flex">
                  <p className="quantity-action">-</p>
                  <p className="quantity-value text-center">1</p>
                  <p className="quantity-action">+</p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="product-detail__sticky-price mr-4">129,90 ₺</p>
                </div>
              </div>
              <div className="product-detail__sticky position-relative w-100">
                <div className="product-detail__sticky-info d-flex">
                  <img src="https://cdn03.ciceksepeti.com/cicek/kc1884970-1/L/nutellali-yilbasi-hediye-kutusu-kc1884970-1-75c3eb7777c24c9fb259fab3ec8a8a16.jpg" width={50} alt=""/>
                  <p className="product-detail__sticky-name ml-3 pt-3">Nutellalı Yılbaşı Hediye Kutusu</p>
                </div>
                <div className="product-detail__sticky-quantity d-flex">
                  <p className="quantity-action">-</p>
                  <p className="quantity-value text-center">1</p>
                  <p className="quantity-action">+</p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="product-detail__sticky-price mr-4">129,90 ₺</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="basket-summary">
                <h3 className="mb-3">Sipariş Özeti</h3>
                <div className="basket-summary__wrp">
                  <div className="basket-summary__item d-flex justify-content-between">
                    <p className="basket-summary__label">Ürün Toplamı:</p>
                    <p className="basket-summary__value">235,99 ₺</p>
                  </div>
                  <div className="basket-summary__item d-flex justify-content-between">
                    <p className="basket-summary__label">Ürün Adedi:</p>
                    <p className="basket-summary__value">2</p>
                  </div>
                  <div className="basket-summary__item d-flex justify-content-between">
                    <p className="basket-summary__label">Kargo Ücreti:</p>
                    <p className="basket-summary__value">9,90 ₺</p>
                  </div>
                  <div className="basket-summary__item d-flex justify-content-between">
                    <p className="basket-summary__label">Toplam Fiyat:</p>
                    <p className="basket-summary__value">321,90 ₺</p>
                  </div>
            
                </div>
              </div>
              <a className="button-ant green flex-center w-100 text-center mt-3">Satın Al</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(basket);
