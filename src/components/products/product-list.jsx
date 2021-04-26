import React,{useEffect, useState} from 'react';
import ProductLoader from '../content-loaders/products'

//Imagess
import productListIco from '../../assets/images/product-list-ico.svg'

//Component
import ProductCard from './product-card'
import Campaigns from '../shared/campaigns'

const ProductList = ({productList, categoryList}) => {
  const [selectedCategory, setSelectedCategory] = useState()
  useEffect(() => {
    if(productList.length != 0){
      setSelectedCategory(productList[0].category)
    }
  }, [productList]);

  useEffect(() => {
    setSelectedCategory("Tüm Kategoriler")
}, []);

  return (
    <div className="product-list mt-2">
      <div className="custom-container">
        {productList.length == 0 ? <ProductLoader />
        :
        <>
          <div className="d-flex mb-3">
            <img src={productListIco} alt=""/>
            <h3 className="product-list-title ml-2">{selectedCategory}</h3>
          </div>
          <div className="product-list__wrp d-flex flex-wrap">
            {productList.map((product) => 
              <ProductCard product={product} key={product.id} />
            )}
          </div>
        </>
      }
      </div>
      <Campaigns />
    </div>
  );
};

export default ProductList;