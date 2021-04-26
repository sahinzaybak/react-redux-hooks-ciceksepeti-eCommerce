import React, { PureComponent } from "react";
import { connect } from "react-redux"; 

import '../assets/scss/products.scss'

//Components
import BlueTitle from '../components/products/blue-title'
import BreadCrumb from '../components/products/bread-crumb'
import Categories from '../components/products/categories'
import ProductList from '../components/products/product-list'

//Actions
import {fetchCategoryList} from '../store/actions/categories'
import {fetchProductList} from '../store/actions/products'
import {getBasketStorage} from '../store/actions/basket'

class products extends PureComponent {
  componentDidMount(){
    this.props.fetchCategoryList()
    this.props.fetchProductList()
  }

  render() {
    return (
      <div>
        <BlueTitle text="Çiçek Sepeti" />
        <BreadCrumb />
        <Categories categoryList={this.props.categoryList} />
        <ProductList productList={this.props.productList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categoryList: state.categories.categoryList,
    productList: state.products.productList
  };
};

const mapDispatchToProps = {
  fetchCategoryList,
  fetchProductList,
  getBasketStorage
};

export default connect(mapStateToProps, mapDispatchToProps)(products);
