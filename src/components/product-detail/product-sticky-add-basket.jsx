import React from "react";

const ProductStickyAddBasket = () => {
  return (
    <div className="product-detail__sticky">
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
        <div className="product-detail__add-basket flex-center">
          <div className="spinner-border position-absolute" role="status"></div>
          <p>Sepete Ekle</p>
        </div>
      </div>
    </div>
  );
};

export default ProductStickyAddBasket;
