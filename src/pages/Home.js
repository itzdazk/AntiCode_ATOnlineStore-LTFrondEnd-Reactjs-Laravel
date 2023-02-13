import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardItem from "../components/CardItem";
import TittleCollection from "../components/TittleCollection";
import TrendingCollection from "../components/TrendingCollection";
import NewCBanner from "../components/NewCBanner";
import Banner from "../components/Banner";
import banner_1 from "../img/banner3.png";
import banner_2 from "../img/banner4.png";
import banner_3 from "../img/banner5.png";
import carousel1 from "../img/carousel1.png";
import carousel2 from "../img/carousel2.png";

const Home = () => {
  useEffect(() => {
    const slider = document.querySelector(".newin__product-list");

    const disable = [];
    for (var i = 1; i <= 8; i++) {
      disable[i] = document.getElementById("disable-a" + i);
    }

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      // console.log("mousedown");
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
      // console.log("mouseleave");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");

      for (var i = 1; i <= 8; i++) {
        disable[i].setAttribute("style", "pointer-events:fill");
      }
      // console.log("mouseup");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      // console.log(slider.scrollLeft);

      for (var i = 1; i <= 8; i++) {
        disable[i].setAttribute("style", "pointer-events:none");
      }
      // console.log("mousemove");
    });
  }, []);

  return (
    <>
      <Header />
      <section className="section">
        <div
          id="carousel-s"
          className="carousel carousel-dark slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel-s"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carousel-s"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carousel1} className="d-block w-100" alt="slide1" />
            </div>
            <div className="carousel-item">
              <img src={carousel2} className="d-block w-100" alt="slide2" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carousel-s"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carousel-s"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="section__newin">
          <TittleCollection
            tittleClass="wrapper__newin-tittle wrapper_tittle"
            tittle="BIG_SALE"
          />
          <div className="wrapper_newin-collection d-flex justify-content-center">
            <div className="container d-flex justify-content-center px-lg-5">
              <div className="arrow-group justify-content-between row w-100 px-2 px-lg-0 d-flex px-lg-5">
                <button className="col-auto arrow-left">
                  <i className="fa-solid fa-arrow-left" />
                </button>
                <button className="col-auto arrow-right">
                  <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
              <div className="newin__product-list row row-cols-2 row-cols-lg-4 gx-4">
                <CardItem
                  classProduct="newin__product-item "
                  idWidth="slide-width"
                  aHref="product-detail"
                  dId="disable-a1"
                  imgSrc="//product.hstatic.net/1000383583/product/_5506_c92c7c96dd574f61ace222a43a4231d3_large.png"
                  itemSale="30%"
                  itemName="Ao thun portrait - Black"
                  itemPrice="245,000"
                />

                <CardItem
                  classProduct="newin__product-item"
                  idWidth=""
                  aHref="product-detail"
                  dId="disable-a2"
                  imgSrc="//product.hstatic.net/1000383583/product/_1568_5cc2b146c5c1493d920d6afcffafe9a3_large.png"
                  itemSale="30%"
                  itemName="Ao thun Tomorrow - White"
                  itemPrice="245,000"
                />
                <CardItem
                  classProduct="newin__product-item"
                  idWidth=""
                  aHref="product-detail"
                  dId="disable-a3"
                  imgSrc="//product.hstatic.net/1000383583/product/_5506_c92c7c96dd574f61ace222a43a4231d3_large.png"
                  itemSale="30%"
                  itemName="Ao thun portrait - Black"
                  itemPrice="245,000"
                />
                <CardItem
                  classProduct="newin__product-item"
                  idWidth=""
                  aHref="product-detail"
                  dId="disable-a4"
                  imgSrc="//product.hstatic.net/1000383583/product/_1568_5cc2b146c5c1493d920d6afcffafe9a3_large.png"
                  itemSale="30%"
                  itemName="Ao thun Tomorrow - White"
                  itemPrice="245,000"
                />
                <CardItem
                  classProduct="newin__product-item"
                  idWidth=""
                  aHref="product-detail"
                  dId="disable-a5"
                  imgSrc="//product.hstatic.net/1000383583/product/_5506_c92c7c96dd574f61ace222a43a4231d3_large.png"
                  itemSale="30%"
                  itemName="Ao thun portrait - Black"
                  itemPrice="245,000"
                />
                <CardItem
                  classProduct="newin__product-item"
                  idWidth=""
                  aHref="product-detail"
                  dId="disable-a6"
                  imgSrc="//product.hstatic.net/1000383583/product/_1568_5cc2b146c5c1493d920d6afcffafe9a3_large.png"
                  itemSale="30%"
                  itemName="Ao thun Tomorrow - White"
                  itemPrice="245,000"
                />
                <CardItem
                  classProduct="newin__product-item"
                  idWidth=""
                  aHref="product-detail"
                  dId="disable-a7"
                  imgSrc="//product.hstatic.net/1000383583/product/_5506_c92c7c96dd574f61ace222a43a4231d3_large.png"
                  itemSale="30%"
                  itemName="Ao thun portrait - Black"
                  itemPrice="245,000"
                />
                <CardItem
                  classProduct="newin__product-item"
                  idWidth=""
                  aHref="product-detail"
                  dId="disable-a8"
                  imgSrc="//product.hstatic.net/1000383583/product/_1568_5cc2b146c5c1493d920d6afcffafe9a3_large.png"
                  itemSale="30%"
                  itemName="Ao thun Tomorrow - White"
                  itemPrice="245,000"
                />
              </div>
            </div>
          </div>
          <div className="wrapper_newin-banner gy-5 gx-4">
            <TittleCollection
              tittleClass="wrapper__newin-banner-tittle wrapper_tittle"
              tittle="NEW-COLLECTION"
            />

            <NewCBanner
              imgSrc_1="https://file.hstatic.net/1000383583/file/home_page_poster_web_1_26a699b226b54612a24153b62263db98.jpg"
              imgSrc_2="https://file.hstatic.net/1000383583/file/home_page_poster_web_2_f26d40fd10724cf7bfce836c9abf9f09.jpg"
            />
          </div>
        </div>

        <TrendingCollection />
        <div className="section__banner mt-5">
          <Banner
            classBanner="banner-1"
            link="/product-list"
            imgSource={banner_1}
          />

          <Banner
            classBanner="banner-2"
            link="/product-list"
            imgSource={banner_2}
          />
          <Banner
            classBanner="banner-3"
            link="/product-list"
            imgSource={banner_3}
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
