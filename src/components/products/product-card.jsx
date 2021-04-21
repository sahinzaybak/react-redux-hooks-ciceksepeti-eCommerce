import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom';

//Actions
import {fetchAddBasket} from '../../store/actions/basket'

let basketList;
const ProductCard = ({product}) => {
  basketList = useSelector(state => state.basket.basketList)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [showCount, setShowCount] = useState(false)
  const [addBasketText, setAddBasketText] = useState("Sepete Ekle")
  const [productCount, setProductCount] = useState(1)
  const [changedPrice, setChangedPrice] = useState(0)

  if(basketList.length != 0)
    localStorage.setItem("basket", JSON.stringify(basketList)); // state basketList yenilendiğinde localStorage'de yenilenir.

  async function addBasket(){
    await dispatch(fetchAddBasket(product));
    localStorage.setItem("basket", JSON.stringify(basketList)); 
  }

  return (
    <div to={`/detail/${product.slug}`} className="product-list__cell">
      <div className={`product-list__item d-flex flex-column justify-content-between ${showCount ? "selected" : ""}`}>
        <>
        <Link to={`/detail/${product.slug}`}>
          <img src={product.image} alt={product.name} /> 
        </Link>
        <p className="category mt-2">Moda, Aksesuar</p>
        <h2 className="product-list__name mt-2" alt={product.name}>{product.name}</h2>
        </>
        <>
          <p className="product-list__price mb-1">{product.price}₺</p>
          {!showCount ?
            <div className="button product-list__add-basket d-flex-center" onClick={() => {
              setAddBasketText(''); 
              setLoading(true); 
              setTimeout(() => {
                addBasket();
                setShowCount(true)
              },2000)
            }}>
              <div className={`spinner-border position-absolute ${!loading ? "d-none" : ""}`} role="status"></div>
              <p>{addBasketText}</p>
            </div>
            :
            <div className="quantity d-flex w-100">
              <p className="quantity-action" onClick={() => setProductCount(productCount -1)}>-</p>
              <p className="quantity-value text-center">{productCount}</p>
              <p className="quantity-action" onClick={() => setProductCount(productCount +1)}>+</p>
            </div>
          }
        </>
      </div>
    </div> 
  );
};


export default ProductCard;