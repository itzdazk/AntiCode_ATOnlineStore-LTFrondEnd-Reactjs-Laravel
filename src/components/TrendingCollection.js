import CardItem from "../components/CardItem";
import TittleCollection from "../components/TittleCollection";
const TrendingCollection = () => {
  return (
    <div className="section__trending mt-5">
      <TittleCollection
        tittleClass="wrapper__trending-tittle wrapper_tittle"
        tittle="TRENDING NOW"
      />
      <div className="wrapper_trending-collection">
        <div className="container">
          <div className="arrow-group" />
          <div className="trending__product-list row row-cols-2 row-cols-lg-3">
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCollection;
