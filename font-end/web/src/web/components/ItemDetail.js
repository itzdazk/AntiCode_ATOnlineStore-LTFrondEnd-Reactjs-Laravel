import React, { useState, useEffect } from "react";
import productService from "./../../services/productService";
import { addToCart } from "../../store/reducers/cart";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
const ItemDetail = (prop) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.isLoggedIn);
  const mainPhoto = document.getElementById("mainPhoto");
  function updateImage(event) {
    const image = event.target;

    mainPhoto.src = image.src;
  }

  useEffect(() => {
    loadData();
  }, []);

  const [sizet, Sizet] = useState(["S", "M", "L", "XL"]);
  const [size, setSize] = useState("");
  const [SKU, setSKU] = useState("SKU:");
  const [quantity, setQuantity] = useState(1);

  const [pquantity, setPquantity] = useState();

  const [detailID, setDetailId] = useState();

  const [image, setImage] = useState();
  const [item, setItem] = useState([]);

  const [products, setProducts] = useState({
    product: {},
    image: [{}, {}],
    detail: [{}],
  });

  const loadData = () => {
    productService.getDetail(prop.PRO_ID).then((res) => {
      setProducts(res);
    });
  };

  const handleIncrease = (size) => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = (size) => {
    if (quantity !== 1) setQuantity(quantity - 1);
  };

  const onchangeSize = (e, SKU) => {
    setSize(e.target.value);
    setSKU(`SKU: ${SKU}`);
    setImage(products.image[0].Image);
    products.detail.map((detail) => {
      if (detail.Size === e.target.value) {
        setPquantity(detail.Quantity);
        setDetailId(detail.PDETAIL_ID);
      }
    });
  };

  const handleAddToCart = () => {
    if (size === "") {
      toast.warning("Vui lòng chọn size");
    } else {
      let check = false;

      products.detail.map((detail) => {
        if (detail.Size === size && detail.Quantity >= quantity) {
          check = true;
        }
      });

      if (check === false) {
        toast.warning("Số lượng sản phẩm nhập vượt quá tồn kho");
      } else {
        if (cartItems.length > 0) {
          if (
            cartItems.find((item) => {
              return item.PDETAIL_ID === detailID;
            }) !== undefined
          ) {
            if (
              cartItems.find((item) => {
                return item.PDETAIL_ID === detailID;
              }).Quantity +
                quantity >
              pquantity
            ) {
              toast.warning(
                "Tổng số lượng sản phẩm nhập và trong giỏ hàng vượt quá tồn kho"
              );
            } else {
              dispatch(
                addToCart({
                  PRO_ID: prop.PRO_ID,
                  PDETAIL_ID: detailID,
                  Name: products.product.Name,
                  Price: products.product.Price,
                  Color: products.product.Color,
                  Size: size,
                  Quantity: quantity,
                  Image: image,
                })
              );
            }
          } else {
            dispatch(
              addToCart({
                PRO_ID: prop.PRO_ID,
                PDETAIL_ID: detailID,
                Name: products.product.Name,
                Price: products.product.Price,
                Color: products.product.Color,
                Size: size,
                Quantity: quantity,
                Image: image,
              })
            );
          }
        } else {
          dispatch(
            addToCart({
              PRO_ID: prop.PRO_ID,
              PDETAIL_ID: detailID,
              Name: products.product.Name,
              Price: products.product.Price,
              Color: products.product.Color,
              Size: size,
              Quantity: quantity,
              Image: image,
            })
          );
        }
      }
    }
  };

  return (
    <>
      {/* {console.log(products)} */}

      <div>
        <div className="row d-flex justify-content-evenly">
          <div className="col-12 col-md-7 d-lg-flex justify-content-lg-evenly">
            <section className="wrapper__product-item">
              <img
                id="mainPhoto"
                src={`http://localhost/clothes-stores-online-db/public/uploads/images/${products.image[0].Image}`}
              />
              <div className="image-wrapper flex-wrap d-flex justify-content-between justify-content-lg-start">
                {products.image.map((img, index) => {
                  return (
                    <>
                      <img
                        onClick={updateImage}
                        className="imgCarousel"
                        src={`http://localhost/clothes-stores-online-db/public/uploads/images/${img.Image}`}
                      />
                    </>
                  );
                })}
              </div>
            </section>
          </div>
          <div className="col-12 col-md-4">
            <p className="product-item-name">{products.product.Name}</p>
            <p className="product-item-sku"> {SKU} </p>
            <hr />
            <div className="product-price fw-bold">
              <p>{`${products.product.Price} đ`}</p>
            </div>
            <hr />
            <div className="product-item-size row">
              <form action className="form-circle-radio">
                <section className="form-circle_section row row-cols-4">
                  <div className="col-auto">
                    <div className="col">
                      <label htmlFor="black">{products.product.Color}</label>
                    </div>
                    <div className="col-auto">
                      <input
                        type="radio"
                        id="black"
                        name="product-size"
                        defaultValue="s"
                        defaultChecked
                      />
                      <label className="checkmark" htmlFor="black" />
                    </div>
                  </div>
                </section>
              </form>
            </div>
            <hr />
            <div className="product-item-size row">
              <form action className="form-square-radio">
                <section className="form-square-section row row-cols-4">
                  {sizet.map((sizen, sindex) => {
                    return products.detail.map((det, index) => {
                      if (sizen === det.Size) {
                        return (
                          <>
                            <div className="col-auto">
                              <input
                                type="radio"
                                id={`size-${det.Size}`}
                                name="product-size"
                                value={det.Size}
                                onChange={(e) => onchangeSize(e, det.SKU)}
                              />
                              <label htmlFor={`size-${det.Size}`}>
                                {det.Size}
                              </label>
                            </div>
                          </>
                        );
                      }
                    });
                  })}
                </section>
              </form>
            </div>
            <hr />
            <div className="product-item-quantity">
              <div className="input-group input-number-group-quantity">
                <div className="input-group-button-quantity">
                  <span
                    className="input-number-decrement "
                    onClick={handleDecrease}
                  >
                    -
                  </span>
                </div>
                <input
                  className="input-number-quantity"
                  type="number"
                  Value={quantity}
                  min={1}
                />
                <div className="input-group-button-quantity">
                  <span
                    className="input-number-increment"
                    onClick={handleIncrease}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className="product-item-quantity mt-2">
              <button onClick={handleAddToCart} className="addcart-item-btn">
                THEM VAO GIO
              </button>
            </div>
          </div>
          <div className="col-12 mt-5">
            <hr />
            <h4 className="my-2">Mô tả</h4>
            <p>Thông tin sản phẩm:</p>
            <p className="mt-5">{products.product.DES}</p>
            <p>Màu sắc: {products.product.Color}</p>
            <p>Size: S/M/L/XL</p>
            <p className="mt-5">HƯỚNG DẪN VỀ KÍCH THƯỚC (SIZE):</p>
            <p className="mt-1">
              Bảng size phù hợp với 89,5% người mua hàng tại XXME nếu bạn muốn
              mặc vừa người ( size hoàn hảo ). Nếu có nhu cầu mặc rộng hơn, hãy
              lựa chọn lớn hơn 1 size và muốn mặc chật hơn thì hãy lựa chọn nhỏ
              hơn 1 size để phù hợp nhất với nhu cầu của bạn nhé.
            </p>
            <p className="mt-1">
              Size S: Chiều cao dưới 1m60, cân nặng dưới 55kg.
            </p>
            <p className="mt-1">
              Size M: Chiều cao dưới 1m70, cân nặng dưới 65kg.
            </p>
            <p className="mt-1">
              Size L: Chiều cao dưới 1m80, cân nặng dưới 78kg.
            </p>
            <p className="mt-1">
              Size XL: Chiều cao trên 1m70, cân nặng dưới 98kg.
            </p>
            <p className="my-4">
              <span className="fw-bolder">ANTICODE</span> - 𝐓𝐡𝐮̛𝐨̛𝐧𝐠 𝐡𝐢𝐞̣̂𝐮 𝐭𝐡𝐨̛̀𝐢
              𝐭𝐫𝐚𝐧𝐠 𝐭𝐡𝐢𝐞̂́𝐭 𝐤𝐞̂́, 𝐬𝐭𝐫𝐞𝐞𝐭 𝐬𝐭𝐲𝐥𝐞 𝐡𝐚̀𝐧𝐠 𝐝𝐚̂̀𝐮 𝐝𝐚̀𝐧𝐡 𝐜𝐡𝐨 𝐠𝐢𝐨̛́𝐢 𝐭𝐫𝐞̉.
            </p>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
