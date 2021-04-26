
import React from 'react';
import ContentLoader from 'react-content-loader'

const CategoriesLoader = () => {
  return (
    <div className="categories-loader">
      <div className="row">
        <ContentLoader height={175} width={1480} speed={1} viewBox="0 0 100% 175" primarycolor="#242b34" secondarycolor="#343d4c">
          <rect x="15" y="10" rx="12" ry="12"width="200" height="20" />

          <rect x="15" y="44" rx="12" ry="12" width="13%" height="45" />
          <rect x="193" y="44" rx="12" ry="12" width="13%" height="45" />
          <rect x="370" y="44" rx="12" ry="12" width="13%" height="45" />
          <rect x="548" y="44" rx="12" ry="12" width="13%" height="45" />
          <rect x="726" y="44" rx="12" ry="12" width="13%" height="45" />
          <rect x="903" y="44" rx="12" ry="12" width="13%" height="45" />
          <rect x="1081" y="44" rx="12" ry="12" width="13%" height="45" />
      
          <rect x="15" y="109" rx="12" ry="12" width="13%" height="45" />
          <rect x="193" y="109" rx="12" ry="12" width="13%" height="45" />
          <rect x="370" y="109" rx="12" ry="12" width="13%" height="45" />
          <rect x="548" y="109" rx="12" ry="12" width="13%" height="45" />
          <rect x="726" y="109" rx="12" ry="12" width="13%" height="45" />
          <rect x="903" y="109" rx="12" ry="12" width="13%" height="45" />
          <rect x="1081" y="109" rx="12" ry="12" width="13%" height="45" />
        </ContentLoader>
      </div>
    </div>
   

  );
};

export default CategoriesLoader;