import { Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./web/pages/Home";
import ProductList from "./web/pages/ProductList";
import ProductDetail from "./web/pages/ProductDetail";
import NotFound from "./web/components/NotFound";
import Sigin from "./web/pages/Signin";
import Register from "./web/pages/Register";
import SystemStore from "./web/pages/Systemstore";
import Payment from "./web/pages/Payment";
import Cart from "./web/pages/Cart";
import FindProduct from "./web/pages/FindProduct";
import Recruitment from "./web/pages/Recruitment";
import BrandStory from "./web/pages/BrandStory";
import Account from "./web/pages/Account";
import Header from "./web/components/Header";
import Footer from "./web/components/Footer";
import { useSelector } from "react-redux";
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Sigin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        {/* {isLoggedIn ? (
          <Route path="/payment" element={<Payment />} />
        ) : (
          <Navigate to="/login" />
        )} */}
        <Route path="/payment" element={<Payment />} />
        <Route path="/systemstore" element={<SystemStore />} />
        <Route path="/find-product/:value" element={<FindProduct />} />
        <Route path="/product-list/:cateName" element={<ProductList />} />
        <Route path="/product-detail/:productID" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/brandstory" element={<BrandStory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
