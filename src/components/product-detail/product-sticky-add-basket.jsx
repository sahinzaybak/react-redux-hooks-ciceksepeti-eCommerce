import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'

//Actions
import {fetchBasketItemActionCount} from '../../store/actions/basket'

let basketList;
let selectedProduct;
const ProductStickyAddBasket = ({productId, productName, productImage, productPrice}) => {
  const dispatch = useDispatch()
  const [productCount, setProductCount] = useState()
  basketList = useSelector(state => state.basket.basketList)
  selectedProduct = basketList.find(x => x.product.id == productId) // detayına girdiğim ürün sepetimde var mı yok mu?

  useEffect(() => { 
    selectedProduct == null ? setProductCount(1) : setProductCount(selectedProduct.count) 
  })
  
  function actionCount (productCount, productId){ //Ürün adedi arttır / azalt
    var newPrice = productPrice * productCount
    dispatch(fetchBasketItemActionCount(newPrice, productCount, productId));
  }

  return (
    <div className="product-detail__sticky">
      <div className="product-detail__sticky-info d-flex">
        <img src={productImage} width={50} alt=""/>
        <p className="product-detail__sticky-name ml-3 pt-3">{productName}</p>
      </div>
      <div className="quantity d-flex">
        <p className="quantity-action" onClick={() => {
          setProductCount(productCount-1); 
          actionCount(productCount -1, productId)}
          }>
        -</p>
        <p className="quantity-value text-center">{productCount}</p>
        <p className="quantity-action" onClick={() => {
          setProductCount(productCount +1); 
          actionCount(productCount +1, productId)}
          }>
       +</p>
      </div>
      <div className="d-flex align-items-center">
        <p className="product-detail__sticky-price mr-4">{productPrice}₺</p>
        {selectedProduct == null &&
          <div className="product-detail__add-basket d-flex-center">
            <div className="spinner-border position-absolute" role="status"></div>
            <p>Sepete Ekle</p>
          </div>
        }
      </div>
    </div>
  );
};

export default ProductStickyAddBasket;
