import React, { useState, useEffect, useRef } from "react";
import TitleFilter from "../components/TittleFilter";
import CardItem from "../components/CardItem";
import TittleCollection from "../components/TittleCollection";
import { useParams } from "react-router-dom";
import productService from "./../../services/productService";
import imageService from "./../../services/imageService";
import categoryService from "./../../services/categoryService";

const FindProduct = () => {
  const { value } = useParams();
  const [valuef, setValuef] = useState(value);
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setValuef(value);
    productService.findproduct(value).then((res) => {
      setProducts(res);
    });
    imageService.list().then((res) => {
      setImages(res);
    });
  };

  return (
    <>
      <div className="product__main">
        <div className="container">
          {products.length > 0 ? (
            <>
              <TitleFilter ftitle={`Có ${products.length} sản phẩm tìm kiếm`} />
            </>
          ) : (
            <>
              <TittleCollection tittle={`Không tìm thấy sản phẩm yêu cầu`} />
              <div>
                <p className="text-center">
                  Không tìm thấy "<span className="fw-bolder">{value}</span> ".
                  Vui lòng kiểm tra chính tả, sử dụng các từ tổng quát hơn và
                  thử lại!{" "}
                </p>
              </div>

              <div className=" d-flex justify-content-center">
                <a href="/home" class="text-decoration-none text-light py-5">
                  <button class="backhomepage-btn">TRỞ VỀ TRANG CHỦ</button>
                </a>
              </div>
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
    </>
  );
};
export default FindProduct;
