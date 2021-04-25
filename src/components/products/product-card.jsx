import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom';
import LazyLoad from 'react-lazyload';

//Actions
import {fetchAddBasket, fetchBasketItemActionCount} from '../../store/actions/basket'

let basketList
const ProductCard = ({product}) => {
  basketList = useSelector(state => state.basket.basketList)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [showCount, setShowCount] = useState(false)
  const [addBasketText, setAddBasketText] = useState("Sepete Ekle")
  const [defaultPrice, setDefaultPrice] = useState()
  const [productCount, setProductCount] = useState(1)


  async function addBasket(){ //sepete ekle
    await dispatch(fetchAddBasket(product, defaultPrice));
    localStorage.setItem("basket", JSON.stringify(basketList)); 
  }

  function actionCount (productCount, productId){ //Ürün adedi arttır / azalt
    var newPrice = defaultPrice * productCount
    dispatch(fetchBasketItemActionCount(newPrice, productCount, productId));
  }

  useEffect(() => {
    setDefaultPrice(product.price)
  }, []);

  useEffect(() => {
    const isProductinBasketBool = basketList.some(item => item.product.id == product.id) //basket'te varsa ürünü seçili yap.
    setShowCount(isProductinBasketBool)

    const getBasketData = basketList.find(item => item.product.id == product.id) //seçili ürünün adet bilgisini getir.
    if(isProductinBasketBool) setProductCount(getBasketData.count)
  });

  useEffect(() => {
    setLoading(false) 
    setAddBasketText('Sepete Ekle'); 
  },[basketList]);

  return (
    <>
    {product != null && 
      <div to={`/detail/${product.slug}`} className="product-list__cell">
        <div className={`product-list__item d-flex flex-column justify-content-between ${showCount ? "selected" : ""}`}>
          <>
            <Link to={`/detail/${product.slug}`}>
              <LazyLoad height={200}>
                <img src={product.image} alt={product.name} />            
              </LazyLoad>
            </Link>
            <p className="category mt-2">{product.category}</p>
            <h2 className="product-list__name mt-2" alt={product.name}>{product.name}</h2>
            </>
          <>
          <p className="product-list__price mb-1">{defaultPrice}₺</p>
          {!showCount ?
            <div className="button product-list__add-basket d-flex-center" onClick={() => {
              setAddBasketText(''); 
              setLoading(true); 
              setTimeout(() => {
                addBasket();
                setShowCount(true)
                dispatch({ type: 'BASKET_LIST_OPEN', payload: true})
              },2000)
            }}>
              <div className={`spinner-border position-absolute ${!loading ? "d-none" : ""}`} role="status"></div>
              <p>{addBasketText}</p>
            </div>
            :  
            <div className="quantity d-flex w-100">
              <p className="quantity-action" onClick={() => {
                setProductCount(productCount -1); 
                actionCount(productCount -1, product.id)} 
                }>
              -</p>
              <p className="quantity-value text-center">{productCount}</p>
              <p className="quantity-action" onClick={() => {
                setProductCount(productCount +1); 
                actionCount(productCount +1, product.id); 
                }}>
              +</p>
            </div>
            }
          </>
        </div>
      </div> 
    }
    </>
  );
};

export default ProductCard;