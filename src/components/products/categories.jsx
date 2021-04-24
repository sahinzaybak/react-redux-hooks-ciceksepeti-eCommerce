import React from 'react';
import '../../assets/scss/categories.scss'
import {useDispatch} from 'react-redux'
import categories from '../../assets/images/category.svg'
import CategoriesContentLoader from '../content-loaders/categories'

const Categories = ({categoryList}) => {
  const dispatch = useDispatch()
  return (
    <div class="categories mt-2">
      <div className="custom-container">
        {categoryList.length == 0 ? <CategoriesContentLoader categoryList={categoryList} />
        :
        <>
          <div className="d-flex mb-3">
            <img src={categories} alt=""/>
            <h3 className="categories-title ml-2">Kategoriler</h3>
          </div>
          <div className="categories-wrp d-flex flex-wrap">
            <a className="categories-item">
              <p className="categories-item--active">Tüm Kategoriler</p>
            </a>
            {categoryList.map((category) =>
              <a className="categories-item" onClick={() => {
                dispatch({ type: 'FETCH_PRODUCT_FILTER', payload: category.categoryName})
              }}>
              <p>{category.categoryName}</p>
              </a>
            )}
          </div>
        </>
        }
      </div>
    </div>

  );
};

export default Categories;