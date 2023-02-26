import React from "react";

const BannerProduct = (prop) => {
  return (
    <div className="banner__collection-header">
      <img src={prop.imgsrc} alt className="img-fluid" />
    </div>
  );
};

export default BannerProduct;
