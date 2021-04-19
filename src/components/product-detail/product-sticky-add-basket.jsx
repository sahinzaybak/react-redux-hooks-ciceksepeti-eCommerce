import React from "react";

const ProductStickyAddBasket = () => {
  return (
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
  );
};

export default ProductStickyAddBasket;
