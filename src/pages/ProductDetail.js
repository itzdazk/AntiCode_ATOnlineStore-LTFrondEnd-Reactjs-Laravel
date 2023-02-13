import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemDetail from "../components/ItemDetail";
import CardItem from "../components/CardItem";
import TrendingCollection from "../components/TrendingCollection";
import TittleCollection from "../components/TittleCollection";
const ProductDetail = () => {
  return (
    <>
      <Header />
      <section className="section mt-4">
        <div className="container main__product-item">
          <ItemDetail />

          <TittleCollection
            tittleClass="wrapper__trending-tittle wrapper_tittle"
            tittle="SAN PHAM LIEN QUAN"
          />
          <div className="product__main-list row row-cols-2 row-cols-lg-3">
            <CardItem
              classProduct="trending__product-item col mb-5"
              idWidth=""
              aHref="product-detail"
              dId=""
              imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
              itemSale="30%"
              itemName="Áo thun Enjoy De Live"
              itemPrice="350,000"
            />
            <CardItem
              classProduct="trending__product-item col mb-5"
              idWidth=""
              aHref="product-detail"
              dId=""
              imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
              itemSale="30%"
              itemName="Áo thun Enjoy De Live"
              itemPrice="350,000"
            />{" "}
            <CardItem
              classProduct="trending__product-item col mb-5"
              idWidth=""
              aHref="product-detail"
              dId=""
              imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
              itemSale="30%"
              itemName="Áo thun Enjoy De Live"
              itemPrice="350,000"
            />{" "}
            <CardItem
              classProduct="trending__product-item col mb-5"
              idWidth=""
              aHref="product-detail"
              dId=""
              imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
              itemSale="30%"
              itemName="Áo thun Enjoy De Live"
              itemPrice="350,000"
            />{" "}
            <CardItem
              classProduct="trending__product-item col mb-5"
              idWidth=""
              aHref="product-detail"
              dId=""
              imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
              itemSale="30%"
              itemName="Áo thun Enjoy De Live"
              itemPrice="350,000"
            />{" "}
            <CardItem
              classProduct="trending__product-item col mb-5"
              idWidth=""
              aHref="product-detail"
              dId=""
              imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
              itemSale="30%"
              itemName="Áo thun Enjoy De Live"
              itemPrice="350,000"
            />{" "}
            <CardItem
              classProduct="trending__product-item col mb-5"
              idWidth=""
              aHref="product-detail"
              dId=""
              imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
              itemSale="30%"
              itemName="Áo thun Enjoy De Live"
              itemPrice="350,000"
            />{" "}
            <CardItem
              classProduct="trending__product-item col mb-5"
              idWidth=""
              aHref="product-detail"
              dId=""
              imgSrc="https://product.hstatic.net/1000383583/product/tak_3307_copy_6d6999c1e1d443c59e99d43d58cd66a0_large.png"
              itemSale="30%"
              itemName="Áo thun Enjoy De Live"
              itemPrice="350,000"
            />{" "}
            <CardItem
              classProduct="trending__product-item col mb-5"
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
      </section>
      <TrendingCollection />
      <Footer />
    </>
  );
};

export default ProductDetail;
