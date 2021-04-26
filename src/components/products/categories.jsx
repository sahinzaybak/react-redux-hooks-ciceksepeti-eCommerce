import React, {useState}  from 'react';
import '../../assets/scss/categories.scss'
import {useDispatch} from 'react-redux'
import categories from '../../assets/images/category.svg'
import CategoriesContentLoader from '../content-loaders/categories'

const Categories = ({categoryList}) => {
  const dispatch = useDispatch()
  const [activeCategory, setActiveCategory] = useState()
  return (
    <div className="categories mt-2">
      <div className="custom-container">
        {categoryList.length == 0 ? <CategoriesContentLoader categoryList={categoryList} />
        :
        <>
          <div className="d-flex mb-3">
            <img src={categories} alt=""/>
            <h3 className="categories-title ml-2">Kategoriler</h3>
          </div>
          <div className="categories-wrp">
            <a className="categories-item" onClick={() => {
                dispatch({ type: 'FETCH_PRODUCT_FILTER', payload: "AllCategories"})
              }}>
              <p className="categories-item--active">Tüm Kategoriler</p>
            </a>
            {categoryList.map((category,index) =>
              <a className="categories-item" key={category.id} onClick={() => {
                setActiveCategory(index)
                dispatch({ type: 'FETCH_PRODUCT_FILTER', payload: category.categoryName})
              }}>
              <p className={`p-0 categories-item${index == activeCategory ? "--active" : ""}`}>{category.categoryName}</p>
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