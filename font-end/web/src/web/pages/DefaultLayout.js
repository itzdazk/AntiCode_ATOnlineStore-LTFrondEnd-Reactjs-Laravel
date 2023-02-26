import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Home from "./Home";
import Sigin from "./Signin";
import Register from "./Register";
import SystemStore from "./Systemstore";
import Payment from "./Payment";

import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
const DefaultLayout = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="login" element={<Sigin />} />
      <Route path="register" element={<Register />} />
      <Route path="payment" element={<Payment />} />
      <Route path="systemstore" element={<SystemStore />} />
      <Route path="product-list" element={<ProductList />} />
      <Route path="product-detail" element={<ProductDetail />} />
    </Routes>
  );
};

export default DefaultLayout;
