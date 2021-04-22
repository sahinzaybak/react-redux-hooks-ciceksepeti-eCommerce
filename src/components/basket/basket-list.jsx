import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux'

//Actions
import {fetchBasketItemActionCount} from '../../store/actions/basket'

const BasketList  = ({basketList}) => {
  debugger;
  const dispatch = useDispatch()
  const [productCount, setProductCount] = useState()

  function actionCount (productCount, productId){ //Ürün adedi arttır / azalt
    var newPrice = basketList.defaultPrice * productCount
    dispatch(fetchBasketItemActionCount(newPrice, productCount, productId));
  }

  useEffect(() => { 
    setProductCount(basketList.count) 
  })

  return (
    <>
    <div className="product-detail__sticky position-relative w-100 mb-4">
      <div className="product-detail__sticky-info d-flex">
        <img src={basketList.product.image} width={50} alt=""/>
        <p className="product-detail__sticky-name ml-3 pt-3">{basketList.product.name}</p>
      </div>
      <div className="quantity d-flex">
        <p className="quantity-action" onClick={() => {
          setProductCount(productCount -1); 
          actionCount(productCount -1, basketList.product.id)}
          }>
        -</p>
        <p className="quantity-value text-center">{productCount}</p>
        <p className="quantity-action" onClick={() => {
          setProductCount(productCount +1); 
          actionCount(productCount +1, basketList.product.id)}
          }>
       +</p>
      </div>
      <div className="d-flex align-items-center">
        <p className="product-detail__sticky-price mr-4">{basketList.product.price.toFixed(2)} ₺</p>
      </div>
    </div>
    </>
  );
};

export default BasketList;