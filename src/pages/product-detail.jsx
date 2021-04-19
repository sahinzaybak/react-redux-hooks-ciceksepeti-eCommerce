import React, { PureComponent } from "react";
import { connect } from "react-redux"; 
import '../assets/scss/product-detail.scss'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class products extends PureComponent {
  render() {
    return (
      <div className="product-detail">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-6">
              <div className="product-detail__image">
                <img src="https://cdn03.ciceksepeti.com/cicek/kc1884970-1/L/nutellali-yilbasi-hediye-kutusu-kc1884970-1-75c3eb7777c24c9fb259fab3ec8a8a16.jpg" alt=""/>
              </div>
            </div>
            <div className="col-md-6">
              <p className="category mb-1">Hediye</p>
              <h1 className="product-detail__name">Nutellalı Yılbaşı Hediye Kutusu</h1>
              <div className="d-block">
                <Rater total={5} rating={2} interactive={false} />
                <p>(13) Yorum</p>
              </div>
            
              <div className="d-block mt-3">
                <span className="product-detail__titles">Ürün Açıklaması</span>
                <p className="product-detail__desc mt-2">Sınırlayı olmayan ve istediği tüm hayalleri gerçekleştirmek isteyen kadınlar için özel olarak tasarlanmıştır. Notalarında bulunan, siyah orkidenin gizemli etkisi ve büyüleyici çekiciliği birleşecek kokunuzla etrafınızdaki herkesi büyülemenizi sağlayacak. Calvin Klein Euphoria EDP Bayan Parfüm, 100 ml'lik kullanım hacmi ve eşsiz kokusu ile uzun süre size eşlik edecek. Baştan çıkarıcı bu çiçek bahçesinde dolanırken çok keyif alacaksınız.</p>
              </div>

              <div className="d-block mt-4">
                <span className="product-detail__titles">Ödeme Seçenekleri</span>
                <div className="product-detail__payment-system d-flex mt-2">
                  <img src="https://cdn03.ciceksepeti.com/payment/150x90-visa.jpg" width={100}/>
                  <img src="https://cdn03.ciceksepeti.com/payment/150x90-mastercard.jpg" width={100}/>
                  <img src="https://cdn03.ciceksepeti.com/payment/150x90-troy.jpg" width={100}/>
                  <img src="https://cdn03.ciceksepeti.com/payment/150x90-amex.jpg" width={100}/>
                  <img src="https://cdn03.ciceksepeti.com/payment/150x90-norton.jpg" width={100}/>
                </div>
              </div>

              <div className="d-block mt-4">
                <span className="product-detail__titles">Ürün Sahibi</span>
                <p className="product-detail__desc mt-2">Bu ürün <u>Ayıcık Dükkanı</u> tarafından gönderilecektir.</p>
          
              </div>
              
            
            </div>
          </div>
        </div>
        <div className="custom-container">
          <div className="product-detail__summary">
            <div className="product-detail__summary-info d-flex">
              <img src="https://cdn03.ciceksepeti.com/cicek/kc1884970-1/L/nutellali-yilbasi-hediye-kutusu-kc1884970-1-75c3eb7777c24c9fb259fab3ec8a8a16.jpg" width={50} alt=""/>
              <p className="product-detail__summary-name ml-3 pt-3">Nutellalı Yılbaşı Hediye Kutusu</p>
            </div>
            <div className="product-detail__summary-quantity d-flex">
              <p className="quantity-action">-</p>
              <p className="quantity-value text-center">1</p>
              <p className="quantity-action">+</p>
            </div>

            <div className="d-flex align-items-center">
              <p className="product-detail__summary-price mr-4">129,90 ₺</p>
              <a href="" className="product-detail__add-basket">Sepete Ekle</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(products);
