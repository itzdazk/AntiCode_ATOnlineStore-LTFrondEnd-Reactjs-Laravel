import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, getTotals } from "../../store/reducers/cart";
import userService from "./../../services/userService";
import orderService from "../../services/orderService";
import orderdetailService from "../../services/orderdetailService";
import { toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
const PayMent = () => {
  const [modalShow, setShowModal] = useState(true);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const userId = useSelector((state) => state.auth.userInfo.id);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const [order, setOder] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const [userinfo, setUserinfo] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    userService.getinfo(userId).then((res) => setUserinfo(res));
  };

  const handSubmit = (e) => {
    e.preventDefault();
    orderService
      .add({
        USER_ID: userId,
        Status: 0,
        HTTT: "Tiền mặt",
      })
      .then((res) => {
        cart.cartItems.map((item) => {
          orderdetailService
            .add({
              OD_ID: res.OD_ID,
              PDETAIL_ID: item.PDETAIL_ID,
              Quantity: item.Quantity,
              Price: item.Price,
            })
            .then((res) => console.log(res));
        });

        if (res.errorCode === 1) {
          dispatch(clearCart());
          toast.success("Đặt hàng thành công");
        } else {
          toast.success("Đặt hàng không thành công, vui lòng thử lại");
        }
      });
  };

  return (
    <div>
      <div className="container container__payment">
        <div className="row">
          <input id="show" type="checkbox" />
          <label
            className="d-flex justify-content-between"
            htmlFor="show"
            id="show-content"
          >
            <span>
              <i className="fa-solid fa-cart-shopping" /> Hiển thị thông tin đơn
              hàng
            </span>
            <span className="text-black h4">
              {cart.cartTotalAmount > 0 ? cart.cartTotalAmount + 28 : 0}.000đ
            </span>
          </label>
          <div className="col-12 col-lg-7 main">
            <div id="content" className="pt-5">
              <a href="/" className="text-decoration-none text-black h4 w-100">
                ANTICODE
              </a>
            </div>
            <div className="content-title h5">Thông tin giao hàng </div>
            <div className="my-2">
              Để thay đổi thông tin giao hàng vui lòng truy cập mục{" "}
              <a href="/account" className="fw-bold">
                Tài Khoản
              </a>
            </div>
            <div className="main__content">
              <div className="form-outline">
                <input
                  type="text"
                  id="form7Example1"
                  className="form-control"
                  placeholder="Họ và tên"
                  disabled
                  value={userinfo.Name}
                />
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form7Example3"
                      className="form-control"
                      disabled
                      value={userinfo.Email}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form7Example4"
                      className="form-control"
                      disabled
                      placeholder="Số điện thoại"
                      value={userinfo.Phone}
                    />
                  </div>
                </div>
              </div>
              <div className="form-outline">
                <input
                  type="email"
                  id="form7Example5"
                  className="form-control"
                  disabled
                  placeholder="Địa chỉ"
                  required
                  value={userinfo.Address}
                />
              </div>

              <div className="content__title h5">Phương thức vận chuyển</div>
              <div className="content__transport">
                <div className="content__select--transport">
                  <label htmlFor className="content__select--label">
                    <div className="content__select--input">
                      <input
                        type="radio"
                        className="content__select--radio"
                        defaultChecked
                      />
                      <span className="ps-2">Giao hàng tận nơi</span>
                    </div>
                    <div className="content__ship">28,000đ</div>
                  </label>
                </div>
              </div>
              <div className="content__title h5 pay">Thông tin thanh toán</div>
              <div className="content__payment">
                <label htmlFor className="content__select--label">
                  <div className="content__select--input">
                    <input
                      type="radio"
                      className="content__select--radio"
                      defaultChecked
                    />
                    <span className="ps-2">Thanh toán khi giao hàng</span>
                  </div>
                </label>
              </div>
              <div className="content-submit d-flex justify-content-between align-items-center">
                <a className="content__submit" href="/cart">
                  <i className="fa-solid fa-arrow-left" /> Giỏ hàng
                </a>
                <button onClick={(e) => handSubmit(e)} className="btn-submit">
                  Hoàn tất đơn hàng
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 navside">
            <nav id="sidebar">
              <div className="p-4 pt-5">
                {cart.cartItems.length === 0 ? (
                  <>
                    <div className="col">
                      <p>Hiện chưa có sản phẩm</p>
                    </div>
                  </>
                ) : (
                  cart.cartItems?.map((cartItems) => {
                    return (
                      <>
                        <div className="table">
                          <div className="sidebar__product--img">
                            <img
                              src={`http://localhost/clothes-stores-online-db/public/uploads/images/${cartItems.Image}`}
                              className="img-thumbnail"
                              alt="/"
                            />
                          </div>
                          <div className="sidebar__product--desc">
                            <span className="sidebar__product--name text-uppercase fw-bold ">
                              {cartItems.Name}
                            </span>
                            <span className="sidebar__product--info fw-bolder">
                              {cartItems.Color} / {cartItems.Size}
                            </span>
                            <br />
                            <span className="sidebar__product--info bg-black text-light py-1 px-2">
                              {cartItems.Quantity}
                            </span>
                          </div>
                          <div className="sidebar__product--price">
                            {`${cartItems.Price * cartItems.Quantity}.000đ`}
                          </div>
                        </div>
                        <hr />
                      </>
                    );
                  })
                )}

                <div className="product__bill">
                  <div className="d-flex justify-content-between">
                    <div className="bill--desc">Tạm tính</div>
                    <div className="bill--price">
                      {cart.cartTotalAmount}.000đ
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <div className="bill--desc">Phí vận chuyển</div>
                    <div className="bill--trans">
                      {" "}
                      {cart.cartTotalAmount > 0 ? 28 : 0}.000đ{" "}
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mt-2">
                    <div className="bill--total">Tổng cộng</div>
                    <div className="bill--totalfin">
                      <span className="bill--vnd">VNĐ</span>
                      <span className="bill--pricefin">
                        {" "}
                        {cart.cartTotalAmount > 0
                          ? cart.cartTotalAmount + 28
                          : 0}
                        .000đ
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <Modal
        show={modalShow}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="container py-5 ">
            <div className="row text-center">
              <h1 className=" text-cart-succes text-black ">
                <i class="fa-sharp fa-solid fa-circle-check"></i>
              </h1>
            </div>
            <div className="row text-center my-4">
              <h1>Đặt hàng thành công</h1>
              <p className="mt-2">
                Cảm ơn bạn <span className="fw-bold h5">{userinfo.Name}</span>{" "}
                đã đặt thành công đơn hàng, tổng giá trị đơn hàng là{" "}
                <span className="ms-1 fw-bold">
                  {cart.cartTotalAmount > 0 ? cart.cartTotalAmount + 28 : 0}
                  .000đ
                </span>
              </p>{" "}
              <p className="mt-2">
                Sau khi ANTICODE xác nhận đơn hàng, sản phẩm sẽ được giáo đến
                địa chỉ {userinfo.Address} trong thời gian sớm nhất
              </p>
              <p className="mt-2">
                Bạn có thể theo dõi đơn hàng tại{" "}
                <a href="#" className="fw-bold ">
                  {" "}
                  đây
                </a>{" "}
                hoặc chọn
              </p>
              <p className="mt-2">
                <span className="fw-bold">
                  Tên Tài Khoản &gt; Theo dõi đơn hàng
                </span>{" "}
                ở góc trên
              </p>
            </div>
          </div>
          <div className="row text-center my-2">
            <a href="/home">
              <button className="bg-black text-light py-2 px-2 fw-bold">
                Tiếp tục mua hàng
              </button>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PayMent;
