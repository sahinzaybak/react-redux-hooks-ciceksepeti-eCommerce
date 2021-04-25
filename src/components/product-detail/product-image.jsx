import React from "react";

const ProductImage = ({productImage}) => {
  return (
    <div className="col-md-6">
      <div className="product-detail__image flex-center">
        <img loading="lazy" src={productImage}/>
      </div>
    </div>
  );
};

export default ProductImage;
