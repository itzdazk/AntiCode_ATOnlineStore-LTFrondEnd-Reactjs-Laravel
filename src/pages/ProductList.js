import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleFilter from "../components/TittleFilter";
import CardItem from "../components/CardItem";
import BannerProduct from "../components/BannerProduct";
const ProductList = () => {
  return (
    <>
      <Header />
      <section className="section">
        <BannerProduct />
        <div className="product__main">
          <div className="container">
            <TitleFilter />
            <div className="product__main-list row row-cols-2 row-cols-lg-3">
              <CardItem
                classProduct="trending__product-item col mt-5"
                idWidth=""
                aHref="product-detail"
                dId=""
                imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
                itemSale="30%"
                itemName="Áo thun Enjoy De Live"
                itemPrice="350,000"
              />

              <CardItem
                classProduct="trending__product-item col mt-5"
                idWidth=""
                aHref="product-detail"
                dId=""
                imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
                itemSale="30%"
                itemName="Áo thun Enjoy De Live"
                itemPrice="350,000"
              />

              <CardItem
                classProduct="trending__product-item col mt-5"
                idWidth=""
                aHref="product-detail"
                dId=""
                imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
                itemSale="30%"
                itemName="Áo thun Enjoy De Live"
                itemPrice="350,000"
              />

              <CardItem
                classProduct="trending__product-item col mt-5"
                idWidth=""
                aHref="product-detail"
                dId=""
                imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
                itemSale="30%"
                itemName="Áo thun Enjoy De Live"
                itemPrice="350,000"
              />

              <CardItem
                classProduct="trending__product-item col mt-5"
                idWidth=""
                aHref="product-detail"
                dId=""
                imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
                itemSale="30%"
                itemName="Áo thun Enjoy De Live"
                itemPrice="350,000"
              />

              <CardItem
                classProduct="trending__product-item col mt-5"
                idWidth=""
                aHref="product-detail"
                dId=""
                imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
                itemSale="30%"
                itemName="Áo thun Enjoy De Live"
                itemPrice="350,000"
              />

              <CardItem
                classProduct="trending__product-item col mt-5"
                idWidth=""
                aHref="product-detail"
                dId=""
                imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
                itemSale="30%"
                itemName="Áo thun Enjoy De Live"
                itemPrice="350,000"
              />

              <CardItem
                classProduct="trending__product-item col mt-5"
                idWidth=""
                aHref="product-detail"
                dId=""
                imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
                itemSale="30%"
                itemName="Áo thun Enjoy De Live"
                itemPrice="350,000"
              />

              <CardItem
                classProduct="trending__product-item col mt-5"
                idWidth=""
                aHref="product-detail"
                dId=""
                imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
                itemSale="30%"
                itemName="Áo thun Enjoy De Live"
                itemPrice="350,000"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductList;
