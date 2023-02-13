import { useState } from "react";
const ItemDetail = (prop) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity !== 1) setQuantity(quantity - 1);
  };

  const [imgSource, setimgSource] = useState(
    "https://product.hstatic.net/1000383583/product/_5506_c92c7c96dd574f61ace222a43a4231d3_master.png"
  );

  const updateImage = (event) => {
    const image = event.target.src;
    setimgSource(image);
  };
  return (
    <div>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-7 d-lg-flex justify-content-lg-evenly">
          <section className="wrapper__product-item">
            <img id="mainPhoto" src={imgSource} />
            <div className="image-wrapper flex-wrap d-flex justify-content-between justify-content-lg-start">
              <img
                onClick={updateImage}
                className="imgCarousel img-fluid"
                src="https://product.hstatic.net/1000383583/product/_5506_c92c7c96dd574f61ace222a43a4231d3_master.png"
              />
              <img
                onClick={updateImage}
                className="imgCarousel"
                src="https://product.hstatic.net/1000383583/product/_5126_3e8cc86b09944f6c9a905a214586a9bc_master.png"
              />
              <img
                onClick={updateImage}
                className="imgCarousel"
                src="https://product.hstatic.net/1000383583/product/_5186_0bdbb1ccc0a64329b8bf4ebd148ce0ba_master.png"
              />
              <img
                onClick={updateImage}
                className="imgCarousel"
                src="https://product.hstatic.net/1000383583/product/_5674_deb517e017944560b6784213ff1bdbd2_master.png"
              />
            </div>
          </section>
        </div>
        <div className="col-12 col-md-4">
          <p className="product-item-name">Ao Thun Portrait-Black</p>
          <p className="product-item-sku">SKU:ATTDE2895</p>
          <hr />
          <div className="product-price">
            <p>235.000d</p>
          </div>
          <hr />
          <div className="product-item-size row">
            <form action className="form-circle-radio">
              <section className="form-circle_section row row-cols-4">
                <div className="col-auto">
                  <div className="col">
                    <label htmlFor="black">Black</label>
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
                <div className="col-auto">
                  <div className="col">
                    <label htmlFor="white">White</label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="radio"
                      id="white"
                      name="product-size"
                      defaultValue="s"
                    />
                    <label className="checkmark" htmlFor="white" />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="col">
                    <label htmlFor="html">Blue</label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="radio"
                      id="blue"
                      name="product-size"
                      defaultValue="s"
                    />
                    <label className="checkmark" htmlFor="blue" />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="col">
                    <label htmlFor="html">Red</label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="radio"
                      id="red"
                      name="product-size"
                      defaultValue="s"
                    />
                    <label className="checkmark" htmlFor="red" />
                  </div>
                </div>
              </section>
            </form>
          </div>
          <hr />
          <div className="product-item-size row">
            <form action className="form-square-radio">
              <section className="form-square-section row row-cols-4">
                <div className="col-auto">
                  <input
                    type="radio"
                    id="size-s"
                    name="product-size"
                    defaultValue="s"
                    defaultChecked="true"
                  />
                  <label htmlFor="size-s">S</label>
                </div>
                <div className="col-auto">
                  <input
                    type="radio"
                    id="size-m"
                    name="product-size"
                    defaultValue="m"
                  />
                  <label htmlFor="size-m">M</label>
                </div>
                <div className="col-auto">
                  <input
                    type="radio"
                    id="size-l"
                    name="product-size"
                    defaultValue="l"
                  />
                  <label htmlFor="size-l">L</label>
                </div>
                <div className="col-auto">
                  <input
                    type="radio"
                    id="size-xl"
                    name="product-size"
                    defaultValue="xl"
                  />
                  <label htmlFor="size-xl">XL</label>
                </div>
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
            <button className="addcart-item-btn">THEM VAO GIO</button>
          </div>
        </div>
        <div className="col-12 mt-5">
          <hr />
          <h4 className="my-2">Mô tả</h4>
          <p>Thông tin sản phẩm:</p>
          <p className="mt-5">
            Chất liệu: 100% Cotton - Chất vải mịn, dày dặn, công nghệ in cao cấp
            mang trải nghiệm tuyệt vời nhất.
          </p>
          <p>Màu sắc: Black</p>
          <p>Size: S/M/L/XL</p>
          <p className="mt-5">HƯỚNG DẪN VỀ KÍCH THƯỚC (SIZE):</p>
          <p className="mt-1">
            Bảng size phù hợp với 89,5% người mua hàng tại XXME nếu bạn muốn mặc
            vừa người ( size hoàn hảo ). Nếu có nhu cầu mặc rộng hơn, hãy lựa
            chọn lớn hơn 1 size và muốn mặc chật hơn thì hãy lựa chọn nhỏ hơn 1
            size để phù hợp nhất với nhu cầu của bạn nhé.
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
            𝐗𝐗𝐌𝐄®️ - 𝐓𝐡𝐮̛𝐨̛𝐧𝐠 𝐡𝐢𝐞̣̂𝐮 𝐭𝐡𝐨̛̀𝐢 𝐭𝐫𝐚𝐧𝐠 𝐭𝐡𝐢𝐞̂́𝐭 𝐤𝐞̂́, 𝐬𝐭𝐫𝐞𝐞𝐭 𝐬𝐭𝐲𝐥𝐞 𝐡𝐚̀𝐧𝐠 𝐝𝐚̂̀𝐮 𝐝𝐚̀𝐧𝐡
            𝐜𝐡𝐨 𝐠𝐢𝐨̛́𝐢 𝐭𝐫𝐞̉.
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
