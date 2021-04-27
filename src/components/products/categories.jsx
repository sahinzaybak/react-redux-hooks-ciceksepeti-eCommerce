import React, {useState, useEffect, useLayoutEffect}  from 'react';
import '../../assets/scss/categories.scss'
import {useDispatch} from 'react-redux'
import categories from '../../assets/images/category.svg'
import CategoriesContentLoader from '../content-loaders/categories'

const Categories = ({categoryList}) => {
  const dispatch = useDispatch()
  const [activeCategory, setActiveCategory] = useState()
  const [defaultSelectedCat, setDefaultSelectedCat] = useState()

  function selectCategory(catName, catId){
    localStorage.setItem("selectedCategory", JSON.stringify({catName, catId}))
  }
  
  useLayoutEffect(() => {
    const selectedCategory = JSON.parse(localStorage.getItem("selectedCategory"))
    if(selectedCategory != null){
      setActiveCategory(selectedCategory.catId -1)
      setDefaultSelectedCat(false)
    }
    else setDefaultSelectedCat(true)
  }, []);

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
                dispatch({ type: 'IS_CATEGORY_FILTERED', payload: false})
                setDefaultSelectedCat(true)
                setActiveCategory(-1)
                localStorage.removeItem('selectedCategory')
              }}>
              <p className={`p-0 categories-item${defaultSelectedCat ? "--active" : ""}`}>Tüm Kategoriler</p>
            </a>
            {categoryList.map((category,index) =>
              <a className="categories-item" key={category.id} onClick={() => {
                selectCategory(category.categoryName, category.id)
                setActiveCategory(index)
                setDefaultSelectedCat(false)
                dispatch({ type: 'FETCH_PRODUCT_FILTER', payload: category.categoryName})
                dispatch({ type: 'IS_CATEGORY_FILTERED', payload: true })
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