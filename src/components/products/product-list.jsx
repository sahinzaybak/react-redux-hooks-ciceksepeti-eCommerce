import React from 'react';
import productListIco from '../../assets/images/product-list-ico.svg'
import {Link} from 'react-router-dom';

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
            <Link to={`/detail/${product.slug}`} className="product-list__cell">
             <div className="product-list__item d-flex flex-column justify-content-between">
               <>
                <img src={product.image} alt={product.name} />
                <p className="category mt-2">Moda, Aksesuar</p>
                <h2 className="product-list__name mt-2" alt={product.name}>{product.name}</h2>
               </>
               <>
                 <p className="product-list__price mb-1">{product.price}₺</p>
                 <div className="button product-list__add-basket d-flex-center">
                   <div className="spinner-border position-absolute" role="status"></div>
                   <p>Sepete Ekle</p>
                 </div>
               </>
             </div>
           </Link> 
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;