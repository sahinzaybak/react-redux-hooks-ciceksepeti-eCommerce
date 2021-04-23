import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import '../../assets/scss/layout/basket-list-sticky.scss'

let basketList;
let isActivebasketList;
const BasketListSticky = () => {
  const dispatch = useDispatch() 
  const [totalPrice, setTotalPrice] = useState(0)
  basketList = useSelector(state => state.basket.basketList)
  isActivebasketList = useSelector(state => state.basket.activeBasketList)

  function localClear(){
    if(basketList.length == 1) localStorage.clear();
  }

  useEffect(() => { 
    setTotalPrice(basketList.reduce((a,v) =>  a + v.product.price, 0).toFixed(2)) //Ürün toplamı
  },[basketList])

  return (
    <>
    <div className={`shadow-bg ${isActivebasketList ? "active" : ""}`} 
      onClick={() => dispatch({ type: 'BASKET_LIST_OPEN' , payload: false })}>
    </div>

    <div className={`basket-list-sticky ${isActivebasketList ? "active" : ""}`}>
      <div className="d-flex align-items-center justify-content-between">
        <h3>Sepetim ({basketList.length})</h3>
        <CloseOutlined onClick={() => dispatch({ type: 'BASKET_LIST_OPEN', payload: false })} />
      </div>
      <div className="d-flex flex-column justify-content-between h-100">
        <div className="basket-list mt-3">
          {basketList.map((basket,index) => 
            <div className="basket-list__item">
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
            <a className="basket-list__view-button mb-3">Sepeti Görüntüle</a>
            <a className="basket-list__payment-button">Ödeme Yap</a>
          </div>
        </div>
    </div>
  </div>
  </>
  ) 
}

export default BasketListSticky;
