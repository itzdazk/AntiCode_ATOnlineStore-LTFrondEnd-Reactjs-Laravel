import React, { useState, useEffect, useRef } from "react";
import TitleFilter from "../components/TittleFilter";
import CardItem from "../components/CardItem";
import BannerProduct from "../components/BannerProduct";
import productService from "./../../services/productService";
import imageService from "./../../services/imageService";
import categoryService from "./../../services/categoryService";
import { useParams } from "react-router-dom";
const ProductList = () => {
  const { cateName } = useParams();
  const [cateId, setCateid] = useState();
  const [category, setCategory] = useState([
    // {
    //   CATE_ID: 0,
    // },
  ]);
  const [products, setProducts] = useState([]);
  const [cateImg, setCateimg] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    if (cateName !== "all") {
      var cateid = "";
      for (let i = 0; i < cateName.length; i++) {
        if (!isNaN(cateName[i])) cateid += cateName[i];
      }
      setCateid(Number(cateid.trim()));
      categoryService
        .listproduct(Number(cateid.trim()))
        .then((res) => setProducts(res));
      categoryService
        .get(Number(cateid.trim()))
        .then((res) => setCategory(res));
    } else {
      productService.list().then((res) => setProducts(res));
    }
    imageService.list().then((res) => {
      setImages(res);
    });
  };

  return (
    <>
      {console.log(typeof category.CATE_ID === "undefined")}
      <section className="section">
        {typeof category.CATE_ID === "undefined" ? (
          <>
            <BannerProduct imgsrc="https://file.hstatic.net/1000383583/file/all_product_web_0036b75c72094c239789226354d0e581.jpg" />
          </>
        ) : (
          <>
            <BannerProduct
              imgsrc={`http://localhost/clothes-stores-online-db/public/uploads/cateImages/${category.Image}`}
            />
          </>
        )}

        <div className="product__main">
          <div className="container">
            {typeof category.CATE_ID === "undefined" ? (
              <>
                <TitleFilter ftitle="Tất cả sản phẩm" />
              </>
            ) : (
              <>
                <TitleFilter ftitle={category.Name} />
              </>
            )}

            <div className="product__main-list row row-cols-2 row-cols-lg-4 mt-5">
              {products.map((prod, index) => {
                const imgs = [];
                images.find((image, index) => {
                  if (image.PRO_ID === prod.PRO_ID) {
                    return imgs.push(image.Image);
                  }
                });
                return (
                  <>
                    <CardItem
                      classProduct="product-item col mt-5"
                      aHref={`/product-detail/${prod.PRO_ID}`}
                      imgSrc={`http://localhost/clothes-stores-online-db/public/uploads/images/${imgs[0]}`}
                      itemName={prod.Name}
                      itemPrice={prod.Price}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
