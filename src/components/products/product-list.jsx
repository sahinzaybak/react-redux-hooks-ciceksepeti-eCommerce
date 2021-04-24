import React from 'react';
import productListIco from '../../assets/images/product-list-ico.svg'
import ProductLoader from '../content-loaders/products'

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
    </div>
  );
};

export default ProductList;