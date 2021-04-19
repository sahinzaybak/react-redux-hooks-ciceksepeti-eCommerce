import React from 'react';
import '../../assets/scss/categories.scss'
import categories from '../../assets/images/category.svg'

const ProductList = () => {
  return (
    <div class="categories mt-2">
      <div className="custom-container">
        <div className="d-flex mb-3">
          <img src={categories} alt=""/>
          <h3 className="categories-title ml-2">Kategoriler</h3>
        </div>
        <div className="categories-wrp d-flex flex-wrap">
          <a className="categories-item"><p className="categories-item--active">Tüm Kategoriler</p></a>
          <a className="categories-item"><p>TElektronik</p></a>
          <a className="categories-item"><p>TEv ve Yaşam</p></a>
          <a className="categories-item"><p>TEvcil Hayvan</p></a>
          <a className="categories-item"><p>TTüm Kategoriler</p></a>
          <a className="categories-item"><p>TElektronik</p></a>
          <a className="categories-item"><p>TEv ve Yaşam</p></a>
          <a className="categories-item"><p>TEvcil Hayvan</p></a>
          <a className="categories-item"><p>TTüm Kategoriler</p></a>
          <a className="categories-item"><p>TElektronik</p></a>
          <a className="categories-item"><p>TEv ve Yaşam</p></a>
          <a className="categories-item"><p>TEvcil Hayvan</p></a>
          <a className="categories-item"><p>TEv ve Yaşam</p></a>
          <a className="categories-item"><p>TEvcil Hayvan</p></a>
        </div>
      </div>
    </div>
  );
};

export default ProductList;