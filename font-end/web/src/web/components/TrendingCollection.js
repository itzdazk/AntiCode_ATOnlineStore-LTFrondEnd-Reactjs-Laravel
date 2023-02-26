import CardItem from "../components/CardItem";
import TittleCollection from "../components/TittleCollection";
import productService from "./../../services/productService";
import imageService from "./../../services/imageService";
import React, { useState, useEffect } from "react";
const TrendingCollection = (prop) => {
  useEffect(() => {
    loadData();
  }, []);

  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);

  const loadData = () => {
    productService.gettrendding().then((res) => {
      setProducts(res);
    });

    imageService.list().then((res) => {
      setImages(res);
    });
  };

  return (
    <>
      <div className="section__trending mt-5">
        <TittleCollection
          tittleClass="wrapper__trending-tittle wrapper_tittle"
          tittle={prop.ttitle}
        />
        <div className="wrapper_trending-collection">
          <div className="container">
            <div className="arrow-group" />
            <div className="trending__product-list row row-cols-2 row-cols-lg-3">
              {products.map((prod, index) => {
                const test = [];
                images.find((image, index) => {
                  if (image.PRO_ID === prod.PRO_ID) {
                    return test.push(image.Image);
                  }
                });
                return (
                  <>
                    <CardItem
                      classProduct="trending__product-item col mb-5"
                      idWidth=""
                      aHref={`/product-detail/${prod.PRO_ID}`}
                      dId=""
                      imgSrc={`http://localhost/clothes-stores-online-db/public/uploads/images/${test[0]}`}
                      itemName={prod.Name}
                      itemPrice={prod.Price}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingCollection;
