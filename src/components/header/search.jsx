import React from 'react';
import search from '../../assets/images/search.svg'

const Search = ({text}) => {
  return (
    <div className="header-search d-flex align-items-center">
      <img src={search} alt=""/>
      <input type="text" placeholder="Ürün Ara.."/>
      <a href="#" className="button header-search__button">Ara</a>
    </div>
  );
};


export default Search;