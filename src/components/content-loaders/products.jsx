
import React from 'react';
import ContentLoader from 'react-content-loader'

const ProductsLoader = ({loadProductCount}) => {
  
  return (
    <div className="row">
      <ContentLoader speed={1} viewBox="0 0 1400 40" primarycolor="#242b34" secondarycolor="#343d4c">
       <rect x="15" y="0" rx="12" ry="12" width="200" height="20" />
      </ContentLoader>
        
    {[...Array(loadProductCount)].map((x, i) =>
      <div className="col-6 col-md-2" key={i}>
        <ContentLoader speed={1} viewBox="0 0 400 700" primarycolor="#242b34" secondarycolor="#343d4c">
            <rect x="0" y="0" rx="20" ry="20" width="400" height="676" />
        </ContentLoader>
      </div>
    )}
  </div>
  );
};

export default ProductsLoader;