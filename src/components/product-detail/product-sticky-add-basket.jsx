import React from "react";

const ProductStickyAddBasket = ({productName, productImage, productPrice}) => {
  return (
    <div className="product-detail__sticky">
      <div className="product-detail__sticky-info d-flex">
        <img src={productImage} width={50} alt=""/>
        <p className="product-detail__sticky-name ml-3 pt-3">{productName}</p>
      </div>
      <div className="quantity d-flex">
        <p className="quantity-action">-</p>
        <p className="quantity-value text-center">1</p>
        <p className="quantity-action">+</p>
      </div>
      <div className="d-flex align-items-center">
        <p className="product-detail__sticky-price mr-4">{productPrice}₺</p>
        <div className="product-detail__add-basket d-flex-center">
          <div className="spinner-border position-absolute" role="status"></div>
          <p>Sepete Ekle</p>
        </div>
      </div>
    </div>
  );
};

export default ProductStickyAddBasket;
