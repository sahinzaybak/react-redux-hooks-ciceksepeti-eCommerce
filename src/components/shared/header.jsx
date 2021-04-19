import React, { PureComponent } from 'react'
import '../../assets/scss/layout/header.scss'
import logo from '../../assets/images/logo.svg'
import search from '../../assets/images/search.svg'
import shoppBag from '../../assets/images/shop-bag.svg'

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
              <div className="header-search d-flex align-items-center">
                <img src={search} alt=""/>
                <input type="text" placeholder="Ürün Ara.."/>
                <a href="#" className="button header-search__button">Ara</a>
              </div>
            </div>
            <div className="button header-bag cursor-pointer flex-shrink-0 flex-center">
              <img src={shoppBag} className="mr-1" alt=""/>
              <p className="header-bag__text">Sepetim</p>
              <span className="header-bag__count position-absolute flex-center">2</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default header;
