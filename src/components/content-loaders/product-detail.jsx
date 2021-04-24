
import React from 'react';
import ContentLoader from 'react-content-loader'

const ProductDetailLoader = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <ContentLoader speed={1} viewBox="0 0 800 800">
          <rect x="0" y="18" rx="12" ry="12" width="100%" height="800" />
        </ContentLoader>
      </div>
      <div className="col-12 col-md-6">
        <ContentLoader speed={2} viewBox="0 0 800 800">
          <rect x="0" y="18" rx="0" ry="0" width="50%" height="20" />
          <rect x="0" y="58" rx="0" ry="0" width="50%" height="20" />
          <rect x="0" y="68" rx="0" ry="0" width="50%" height="20" />
          <rect x="0" y="110" rx="0" ry="0" width="50%" height="20" />
          <rect x="0" y="170" rx="0" ry="0" width="50%" height="26" />
          <rect x="0" y="180" rx="0" ry="0" width="50%" height="25" />
          <rect x="0" y="240" rx="0" ry="0" width="80%" height="26" />
          <rect x="0" y="330" rx="0" ry="0" width="50%" height="30" />
          <rect x="0" y="380" rx="0" ry="0" width="50%" height="30" />
          <rect x="0" y="455" rx="5" ry="5" width="50%" height="50" />
          <rect x="0" y="530" rx="5" ry="5" width="80%" height="50" />
          <rect x="0" y="610" rx="5" ry="5" width="80%" height="50" />
          <rect x="0" y="680" rx="5" ry="5" width="80%" height="50" />
        </ContentLoader>
      </div>
  </div>
  );
};

export default ProductDetailLoader;