import CardItem from "./CardItem";
import TittleCollection from "./TittleCollection";
import NewCBanner from "./NewCBanner";
import { useEffect } from "react";
const NewInCollection = () => {
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
    <div>
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
  );
};

export default NewInCollection;
