import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import TitleFilter from "./../../web/components/TittleFilter";

const initialState = {
  cartItems:
    localStorage.getItem("cartItems") === undefined
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.PDETAIL_ID === action.payload.PDETAIL_ID
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].Quantity += action.payload.Quantity;
        toast.success("Thêm số lượng thành công");
      } else {
        const tempProduct = {
          ...action.payload,
          Quantity: action.payload.Quantity,
        };
        state.cartItems.push(tempProduct);
        toast.success("Thêm sản phẩm thành công");
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.PDETAIL_ID !== action.payload.PDETAIL_ID
      );

      state.cartItems = nextCartItems;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success("Xóa sản phẩm thành công");
    },

    getTotals: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { Price, Quantity } = cartItem;
          const itemTotal = Price * Quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += Quantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },

    clearCart: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
  },
});

export const { addToCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
