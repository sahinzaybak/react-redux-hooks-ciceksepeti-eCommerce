import React, { PureComponent } from 'react'
import '../../assets/scss/layout/header.scss'
import logo from '../../assets/images/logo.svg'

//Components
import Search from '../header/search'
import Basket from '../header/basket'
import ProgressBar from '../header/progress'
import BasketSticky from './basket-list-siticky'

class header extends PureComponent {
  render() {
    return (
      <div className="header d-flex align-items-center">
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
        <BasketSticky /> 
      </div>
    )
  }
}

export default header;
