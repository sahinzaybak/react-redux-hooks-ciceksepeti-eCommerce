import React from 'react';
import shoppBag from '../../assets/images/shop-bag.svg'

const Search = ({text}) => {
  return (
    <div className="button header-bag cursor-pointer flex-shrink-0 d-flex-center">
      <img src={shoppBag} className="mr-1" alt=""/>
      <p className="header-bag__text">Sepetim</p>
      <span className="header-bag__count position-absolute d-flex-center">2</span>
    </div>
  );
};

export default Search;