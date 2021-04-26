import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from "react-router";
import search from '../../assets/images/search.svg'
import { debounce } from 'lodash'

//Actions
import {fetchSearchedProduct} from '../../store/actions/products'

let searchedProductList,isActiveShadow,searchListOpen
const Search = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const [loading, setLoading] = useState(false)
  searchedProductList = useSelector(state => state.products.searchedProductList)
  isActiveShadow = useSelector(state => state.basket.activeShadow)
  searchListOpen = useSelector(state => state.basket.searchListOpen)

  const searchText = debounce(async (search) => { //async debounce
    const searchedProduct = search.target.value;
    if(searchedProduct.length >= 3){ //length 3 ten büyükse arama yap.
      setLoading(true)
      await dispatch(fetchSearchedProduct(searchedProduct))
      setLoading(false)
      dispatch({ type: 'ACTIVE_SHADOW', payload: true })
      dispatch({ type: 'SEARCH_LIST_RESULT_OPEN', payload: true })
    }
  
    //length 3'ten küçükse ise search array temizle
    if(searchedProduct < 3){
      dispatch({ type: 'SEARCH_LIST_CLEAR', payload: [] })
      dispatch({ type: 'ACTIVE_SHADOW', payload: false })
      dispatch({ type: 'SEARCH_LIST_RESULT_OPEN', payload: false })
    }
  },600)

  return (
    <div className="header-search d-flex-center flex-column">
      <div className="d-flex align-items-center w-100">
        <img src={search} alt="" className={`${loading ? "invisible" : ""}`}/>
        <div className={`spinner-border position-absolute ${!loading ? "invisible" : ""}`}></div>
        <input type="text" placeholder="Ürün Ara.." onChange={e => searchText(e)} />
        <a href="#" className="button header-search__button">Ara</a>
      </div>

    {searchedProductList.length != 0 ?
      <div className={`header-search__result ${isActiveShadow  ? "active" : ""}`}>
        {searchedProductList.map((searchList) => 
          <div className="search-item d-flex align-items-center" key={searchList.id} onClick={()=>{
            history.push(`/urunler/${searchList.slug}`)
            dispatch({ type: 'SEARCH_LIST_CLEAR', payload: [] })
            dispatch({ type: 'ACTIVE_SHADOW', payload: false })
            dispatch({ type: 'SEARCH_LIST_RESULT_OPEN', payload: false })
            }}>
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center">
                <img className="mr-2" src={searchList.image} alt={searchList.image}/>
                <h3>{searchList.name}</h3>
              </div>
            <div>
              <p>{searchList.category}</p>
            </div>
          </div>
        </div>
        )}
      </div>
      :
      <div className={`header-search__result ${searchListOpen  ? "active" : ""}`}>
        <div className="search-item d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center">
              <h3>Aradığınız ürün bulunamadı..</h3>
            </div>
        </div>
      </div>
    </div>
    }
    </div>
  );
};

export default Search;