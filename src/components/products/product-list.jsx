import React from 'react';
import {useSelector} from 'react-redux'
import productListIco from '../../assets/images/product-list-ico.svg'

//Component
import ProductCard from './product-card'


const ProductList = ({productList, categoryList}) => {

  return (
    <div className="product-list mt-2">
      <div className="custom-container">
        <div className="d-flex mb-3">
          <img src={productListIco} alt=""/>
          <h3 className="product-list-title ml-2">Tüm Kategoriler</h3>
        </div>
        <div className="product-list__wrp d-flex flex-wrap">
          {productList.map((product) => 
  
            <ProductCard product={product} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;