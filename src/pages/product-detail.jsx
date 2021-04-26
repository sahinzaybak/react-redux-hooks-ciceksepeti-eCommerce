import React, { PureComponent } from "react";
import { connect } from "react-redux"; 
import '../assets/scss/product-detail.scss'

//Components
import ProductImage from '../components/product-detail/product-image'
import ProductDetail from '../components/product-detail/product-info'
import ProductComments from '../components/product-detail/product-comments'
import ProductStickyAddBasket from '../components/product-detail/product-sticky-add-basket'
import ProductDetailLoader from '../components/content-loaders/product-detail'

//Actions
import {fetchProductDetail} from '../store/actions/products'

class productDetail extends PureComponent {
  componentDidMount() {
    this.props.fetchProductDetail(this.props.match.params.slug);
  }

  componentDidUpdate(prevSlug) {
    if(prevSlug.match.params.slug !== this.props.match.params.slug){ //aynı component farklı veri
      this.props.fetchProductDetail(this.props.match.params.slug);
    }
  }
 
  render() {
    return (
      <div className="product-detail">
        <div className="custom-container">
          {this.props.productDetail.length == 0  ? <ProductDetailLoader />
          :
          <>
            <ProductStickyAddBasket 
              productId={this.props.productDetail[0].id} 
              productName={this.props.productDetail[0].name} 
              productImage={this.props.productDetail[0].image} 
              productPrice={this.props.productDetail[0].price}
              product={this.props.productDetail[0]}/>
            <div className="row"> 
              <ProductImage productImage={this.props.productDetail[0].image} />
              <ProductDetail 
                productDetail={this.props.productDetail} 
                productComments={this.props.productDetail[0].comments} />
            </div>
            <ProductComments 
              product={this.props.productDetail[0]} 
              productComments={this.props.productDetail[0].comments}/>
          </>
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productDetail:state.products.productDetail
  };
};

const mapDispatchToProps = {
  fetchProductDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(productDetail);
