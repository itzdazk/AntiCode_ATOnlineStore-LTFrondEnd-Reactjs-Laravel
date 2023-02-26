import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemDetail from "../components/ItemDetail";
import CardItem from "../components/CardItem";
import TrendingCollection from "../components/TrendingCollection";
import TittleCollection from "../components/TittleCollection";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const { productID } = useParams();
  return (
    <>
      <section className="section mt-4">
        <div className="container main__product-item">
          <ItemDetail PRO_ID={productID} />

          <TrendingCollection ttitle="SAN PHAM LIEN QUAN" />
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
