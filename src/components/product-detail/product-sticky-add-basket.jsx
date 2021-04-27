import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'

//Actions
import {fetchAddBasket, fetchBasketItemActionCount} from '../../store/actions/basket'

let basketList,selectedProduct;
const ProductStickyAddBasket = ({productId, productName, productImage, productPrice, product}) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [addBasketText, setAddBasketText] = useState("Sepete Ekle")
  const [productCount, setProductCount] = useState()
  basketList = useSelector(state => state.basket.basketList)
  selectedProduct = basketList.find(x => x.product.id == productId) // detayına girdiğim ürün, sepetimde var mı yok mu?

  async function addBasket(){
    await dispatch(fetchAddBasket(product, productPrice));
    localStorage.setItem("basket", JSON.stringify(basketList)); 
  }

  function actionCount (productCount, productId){ //Ürün adedi arttır / azalt
    var newPrice = productPrice * productCount
    dispatch(fetchBasketItemActionCount(newPrice, productCount, productId));
  }

  useEffect(() => { 
    selectedProduct == null ? setProductCount(1) : setProductCount(selectedProduct.count) 
  })

  useEffect(() => { 
    selectedProduct == null ? setLoading(false) : setAddBasketText('Sepete Ekle'); 
  },[selectedProduct])
  

  return (
    <div className={`product-detail__sticky ${selectedProduct == null ? "disabled" : ""}`}>
      <div className="product-detail__sticky-info">
        <img src={productImage} width={50} alt=""/>
        <p className="product-detail__sticky-name ml-3">{productName}</p>
      </div>
      <div className="quantity d-flex">
        <p className="quantity-action" onClick={() => {
          if(productCount != 1 ){
            setProductCount(productCount -1); 
            actionCount(productCount -1, productId)}}
          }>
        -</p>
        <p className="quantity-value text-center">{productCount}</p>
        <p className="quantity-action" onClick={() => {
          if(productCount != 6 ){
            setProductCount(productCount +1); 
            actionCount(productCount +1, productId)}}
          }>
       +</p>
      </div>
      <div className="d-flex align-items-center">
        {selectedProduct == null ? 
          <p className="product-detail__sticky-price mr-4">{productPrice.toFixed(2)}₺</p>
          :
          <p className="product-detail__sticky-price mr-4 pl-4 pd-md-0">{selectedProduct.product.price.toFixed(2)}₺</p>
        }
     
        {selectedProduct == null &&
          <div className="product-detail__add-basket d-flex-center" onClick={() => {
            setAddBasketText(''); 
            setLoading(true); 
            setTimeout(() => {
              addBasket();
              dispatch({ type: 'BASKET_LIST_OPEN' , payload: true})
            },2000)
          }}>
            <div className={`spinner-border position-absolute ${!loading ? "d-none" : ""}`} role="status"></div>
            <p>{addBasketText}</p>
          </div>
        }
      </div>
    </div>
  );
};

export default ProductStickyAddBasket;
