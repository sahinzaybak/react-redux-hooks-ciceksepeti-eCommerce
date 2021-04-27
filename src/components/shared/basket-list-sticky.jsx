import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom';
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import basketImg from "../../assets/images/shopping-cart.svg";
import '../../assets/scss/layout/basket-list-sticky.scss'

let basketList;
let isActiveBasketList;

const BasketListSticky = () => {
  const dispatch = useDispatch() 
  const [totalPrice, setTotalPrice] = useState(0)
  basketList = useSelector(state => state.basket.basketList)
  isActiveBasketList = useSelector(state => state.basket.activeBasketList)

  function localClear(){
    if(basketList.length == 1) localStorage.removeItem('basket');
  }

  useEffect(() => { 
    setTotalPrice(basketList.reduce((a,v) =>  a + v.product.price, 0).toFixed(2)) //Ürün toplamı
  },[basketList])
  

  return (
    <div className={`basket-list-sticky ${isActiveBasketList ? "active" : ""}`}>
      <div className="d-flex align-items-center justify-content-between">
        <h3>Sepetim ({basketList.length})</h3>
        <CloseOutlined onClick={() => { 
          dispatch({ type: 'BASKET_LIST_OPEN', payload: false })
          dispatch({ type: 'ACTIVE_SHADOW', payload: false })
        }} />
      </div>
      {basketList.length != 0 ? 
        <div className="d-flex flex-column justify-content-between h-100">
          <div className="basket-list mt-3">
            {basketList.map((basket,index) => 
              <div className="basket-list__item" key={index}>
                <div className="d-flex">
                  <>
                    <img className="basket-list__img mr-2" src={basket.product.image} alt=""/>
                  </>
                  <div className="pr-2 d-flex flex-column w-100">
                    <p className="basket-list__name pt-2 pr-3">{basket.product.name}</p>
                    <div className="d-flex align-items-center justify-content-between mt-2">
                      <p className="basket-list__price">{basket.product.price.toFixed(2)} ₺</p>
                      <p className="basket-list__count ml-2">{basket.count} adet</p>
                      {<span className="d-flex cursor-pointer" onClick={() => {
                        localClear(); 
                        dispatch({ type: 'BASKET_ITEM_DELETE', payload: index })
                        }}>
                        <DeleteOutlined />  
                      </span>}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="basket-list__total-price">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h4>Toplam Fiyat:</h4>
              <p>{totalPrice }₺</p>
            </div>
            <div className="basket-list__action d-flex flex-column">
              <Link to={"/sepetim"} className="basket-list__view-button mb-3" onClick={() => {
                dispatch({ type: 'BASKET_LIST_OPEN', payload: false })
                dispatch({ type: 'SEARCH_LIST_CLEAR', payload: [] })
                dispatch({ type: 'SEARCH_LIST_RESULT_OPEN', payload: false })
                dispatch({ type: 'ACTIVE_SHADOW', payload: false })
              }}>Sepeti Görüntüle</Link>
              <Link to={"/odeme"} className="basket-list__payment-button"onClick={() => {
                dispatch({ type: 'BASKET_LIST_OPEN', payload: false })
                dispatch({ type: 'SEARCH_LIST_CLEAR', payload: [] })
                dispatch({ type: 'SEARCH_LIST_RESULT_OPEN', payload: false })
                dispatch({ type: 'ACTIVE_SHADOW', payload: false })
              }} >Ödeme Yap</Link>
            </div>
          </div>
        </div>
        :
        <div className="basket-list__emtpy">
          <div className="d-flex justify-content-between align-items-center basket-no-product p-4 flex-column flex-md-row mt-4 mt-md-5">
            <div className="d-flex mb-4 mb-md-0">
              <img className="mr-4" src={basketImg} alt="" />
              <h5>Sepetinizde ürün bulunmamaktadır.</h5>
            </div>
          </div> 
        </div>
      }  
  </div>
  ) 
}

export default BasketListSticky;
