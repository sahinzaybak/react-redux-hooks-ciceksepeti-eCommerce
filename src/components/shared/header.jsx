import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import '../../assets/scss/layout/header.scss'
import logo from '../../assets/images/logo.svg'

//Components
import Search from '../header/search'
import Basket from '../header/basket'
import ProgressBar from '../header/progress'
import BasketSticky from './basket-list-sticky'

let isActiveShadow,isActiveBasketList,searchListOpen;
const Header = () => {
  const dispatch = useDispatch() 
   isActiveShadow = useSelector(state => state.basket.activeShadow)
   isActiveBasketList = useSelector(state => state.basket.activeBasketList)
   searchListOpen = useSelector(state => state.basket.searchListOpen)
    return (
      <>
      <div className={`header d-flex align-items-center ${searchListOpen ? "active" : ""}`}>
        <div className="custom-container">
          <div className="d-flex">
            <div className="d-flex align-items-center w-100">
              <div className="header-logo">
                <img src={logo} alt=""/>
              </div>
              <Search />
            </div>
            <Basket />
          </div>
         <ProgressBar />
        </div>
      </div>
      <div className={`shadow-bg ${isActiveBasketList || isActiveShadow ? "active" : ""}`} 
        onClick={() => {
          dispatch({ type: 'BASKET_LIST_OPEN', payload: false })
          dispatch({ type: 'SEARCH_LIST_CLEAR', payload: [] })
          dispatch({ type: 'SEARCH_LIST_RESULT_OPEN', payload: false })
          dispatch({ type: 'ACTIVE_SHADOW', payload: false })
        }}>
      </div>
      <BasketSticky /> 
      </>
    )
  }

export default Header;
