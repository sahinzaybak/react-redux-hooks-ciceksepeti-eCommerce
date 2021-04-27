import React,{useEffect, useLayoutEffect, useState} from 'react';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import ProductLoader from '../content-loaders/products'

//Imagess
import productListIco from '../../assets/images/product-list-ico.svg'

//Component
import ProductCard from './product-card'
import Campaigns from '../shared/campaigns'

let isFilterProduct;
const ProductList = ({productList}) => {
  const dispatch = useDispatch()
  const [selectedCategory, setSelectedCategory] = useState()
  isFilterProduct = useSelector(state => state.products.isFilterProduct)

  useLayoutEffect(() => {
    if(productList.length != 0)
      setSelectedCategory(productList[0].category)

    const selectedCategory = JSON.parse(localStorage.getItem("selectedCategory"))
    if(selectedCategory != null)
      dispatch({ type: 'IS_CATEGORY_FILTERED', payload: true })
  }, [productList]);

  return (
    <div className="product-list mt-2">
      <div className="custom-container">
        {productList.length == 0 ? <ProductLoader loadProductCount={60} />
        :
        <>
          <div className="d-flex mb-3">
            <img src={productListIco} alt=""/>
            {isFilterProduct ? <h3 className="product-list-title ml-2">{selectedCategory}</h3> 
            :
              <h3 className="product-list-title ml-2">Tüm Kategoriler</h3> 
            }
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