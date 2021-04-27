import React, {useState, useEffect} from 'react';
import {DeleteOutlined } from '@ant-design/icons';
import {useDispatch} from 'react-redux'

//Actions
import {fetchBasketItemActionCount} from '../../store/actions/basket'

const BasketList  = ({basketList,index,basketCount}) => {
  const dispatch = useDispatch()
  const [productCount, setProductCount] = useState()

  function actionCount (productCount, productId){ //Ürün adedi arttır / azalt
    var newPrice = basketList.defaultPrice * productCount
    dispatch(fetchBasketItemActionCount(newPrice, productCount, productId));
  }

  function localClear(){
    if(basketCount == 1) localStorage.removeItem('basket');
  }

  useEffect(() => { 
    setProductCount(basketList.count) 
  })

  return (
    <>
    <div className="product-detail__sticky position-relative w-100 mb-4">
      <div className="product-detail__sticky-info d-flex align-items-center">
        <img src={basketList.product.image} width={50} alt=""/>
        <p className="product-detail__sticky-name ml-3">{basketList.product.name}</p>
      </div>
    <div className="d-flex flex-md-row flex-column align-items-center justify-content-between">
      <div className="quantity d-flex">
        <p className="quantity-action" onClick={() => {
           if(productCount != 1 ){
            setProductCount(productCount -1); 
            actionCount(productCount -1, basketList.product.id)}}
          }>
        -</p>
        <p className="quantity-value text-center">{productCount}</p>
        <p className="quantity-action" onClick={() => {
          if(productCount != 6 ){
            setProductCount(productCount +1); 
            actionCount(productCount +1, basketList.product.id)}}
          }>
       +</p>
      </div>
      <div className="d-flex align-items-center">
        <p className="product-detail__sticky-price mr-0 mr-md-4">{basketList.product.price.toFixed(2)} ₺</p>
      </div>
      {<span className="d-flex cursor-pointer" onClick={() => {
          localClear(); 
          dispatch({ type: 'BASKET_ITEM_DELETE', payload: index })
        }}>
        <DeleteOutlined />  
      </span>}
    </div>
     
    </div>
    </>
  );
};

export default BasketList;