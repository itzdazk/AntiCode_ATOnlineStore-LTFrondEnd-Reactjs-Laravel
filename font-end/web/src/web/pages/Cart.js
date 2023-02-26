import TittleCollection from "./../components/TittleCollection";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  getTotals,
  removeFromCart,
} from "../../store/reducers/cart";
import CardItem from "./../components/CardItem";
import "../css/cart.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Cart = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handlePayment = () => {
    if (isLoggedIn) {
      navigate("/payment");
    } else {
      toast.warn("Vui lòng đăng nhập trước khi đi đến thanh toán");
      navigate("/login");
    }
  };
  return (
    <>
      <div className="container">
        <TittleCollection
          tittleClass="wrapper__cart-tittle wrapper_tittle"
          tittle="Giỏ hàng của bạn"
        />
        <div className="content">
          <div className="row">
            <div className="col-md-8 col-xs-12 col-sm-8">
              <>
                <div className="content__title">
                  <p>
                    Hiện có {cart.cartTotalQuantity} sản phẩm trong giỏ hàng
                  </p>
                </div>
              </>

              <div className="content__item">
                <div className="row">
                  <table>
                    <tbody>
                      {cart.cartItems.length === 0
                        ? ""
                        : cart.cartItems?.map((cartItem) => {
                            return (
                              <>
                                <tr>
                                  <td className="content__item--image text-center">
                                    <a href="#">
                                      <img
                                        src={`http://localhost/clothes-stores-online-db/public/uploads/images/${cartItem.Image}`}
                                        alt
                                      />
                                    </a>
                                  </td>
                                  <td className="content__item--info">
                                    <span>{cartItem.Name}</span>
                                    <p className="m-0">{cartItem.Price}đ</p>
                                    <p className="m-0">
                                      {cartItem.Color} / {cartItem.Size}
                                    </p>
                                    <p className="item__info--quantity">
                                      <input
                                        type="number"
                                        min={1}
                                        defaultValue={cartItem.Quantity}
                                        id
                                      />
                                    </p>
                                  </td>
                                  <td>
                                    <span className="item__info--price">
                                      {cartItem.Quantity * cartItem.Price}.000 đ
                                    </span>
                                  </td>
                                  <td className="item__remove">
                                    <button
                                      className="border-0 bg-white"
                                      onClick={() =>
                                        handleRemoveFromCart(cartItem)
                                      }
                                    >
                                      <i className="fas fa-times" />
                                    </button>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="content__note mt-5">
                <label htmlFor="note--textarea">Ghi chú đơn hàng</label>
                <textarea
                  name="note--textarea"
                  id="note--textarea"
                  cols={30}
                  rows={10}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-4 mt-5">
              <div className="cart__order">
                <div className="cart__order--title">
                  <p>Thông tin đơn hàng</p>
                </div>
                <div className="cart__order--total">
                  <div>Tổng tiền:</div>
                  <span>{cart.cartTotalAmount}.000đ</span>
                </div>
                <div className="cart__order--submit mt-4">
                  <div className="text-black" onClick={() => handlePayment()}>
                    THANH TOAN
                  </div>
                </div>
                <div className="backpage">
                  <a href="/product-list/all">
                    {" "}
                    <i className="fa-solid fa-arrow-left" /> Tiếp tục mua hàng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
