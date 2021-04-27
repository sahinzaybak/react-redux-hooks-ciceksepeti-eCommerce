import React, { PureComponent } from "react";
import { connect } from "react-redux"; 
import '../assets/scss/product-detail.scss'

//Components
import ProductLoader from '../components/content-loaders/products'
import ProductImage from '../components/product-detail/product-image'
import ProductDetail from '../components/product-detail/product-info'
import ProductComments from '../components/product-detail/product-comments'
import ProductStickyAddBasket from '../components/product-detail/product-sticky-add-basket'
import ProductDetailLoader from '../components/content-loaders/product-detail'
import ProductCard from '../components/product-detail/product-suggestion-card'

//Actions
import {fetchProductSuggestion,fetchProductDetail} from '../store/actions/products'

class productDetail extends PureComponent {
  async componentDidMount() {
    await this.props.fetchProductDetail(this.props.match.params.slug);
    await this.props.fetchProductSuggestion()
  }

  componentDidUpdate(prevSlug) {
    if(prevSlug.match.params.slug !== this.props.match.params.slug){ //aynı component farklı veri
      this.props.fetchProductDetail(this.props.match.params.slug);
    }
  }
 
  render() {
    return (
      <>
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
          <div className="product mt-5">
            <h3 className="text-center">İlginizi çekebilecek ürünler</h3>
            <div className="product-list mt-4">
              {this.props.productListSuggestion.length == 0 ? <ProductLoader loadProductCount={24} />
              :
              <>
                <div className="product-list__wrp d-flex flex-wrap">
                  {this.props.productListSuggestion.map((product) => 
                    <ProductCard product={product} key={product.id} />
                  )}
                </div>
              </>
            }
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productDetail:state.products.productDetail,
    productListSuggestion: state.products.productListSuggestion
  };
};

const mapDispatchToProps = {
  fetchProductSuggestion,
  fetchProductDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(productDetail);
