import React from "react";
import LogoAnti from "../img/CODE.gif";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      const headerNavbar = document.querySelector(".header__navbar");
      if (window.scrollY > 400) {
        headerNavbar.style.position = "fixed";
        headerNavbar.style.top = "0";
        headerNavbar.style.animation = "flyout 0.5s linear";
      } else {
        headerNavbar.style.position = "relative";
        headerNavbar.style.animation = "none";
      }
    });
  });

  const showCart = () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
    const hiddenMenu = document.querySelector(".header__navbar-hidden-menu");
    hiddenMenu.style.display = "none";
    const cart = document.querySelector(".header__navbar-hidden-cart");
    cart.style.display = "block";
  };

  const showMenu = () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
    const cart = document.querySelector(".header__navbar-hidden-cart");
    cart.style.display = "none";
    const hiddenMenu = document.querySelector(".header__navbar-hidden-menu");
    hiddenMenu.style.display = "block";
  };

  // hide hidden menu-xs

  const hideHiddenBar = () => {
    const overlay = document.querySelector(".modal__overlay");
    overlay.style.animation = "fadeOut 0.5s linear";
    const body = document.querySelector(".modal__body");
    body.style.animation = "flyLeftToRight ease-in 0.5s";
    setTimeout(() => {
      const modal = document.querySelector(".modal");
      modal.style.display = "none";
      overlay.style.animation = "fadeIn 1s linear";
      body.style.animation = "flyRightToLeft ease-in 0.5s";
    }, 500);
  };

  const dropdown = (name) => {
    console.log("hehe");
    var dropdown = document.querySelector(name);
    dropdown.classList.toggle("show-dropdown");
  };

  return (
    <div>
      <header className="header">
        {/* Header topbar */}
        <div className="header__topbar py-2">
          <div className="container">
            <div className="row">
              <div className="header__discount col-12 col-md-8 text-center text-md-start">
                <h6>SALE UP TO 50% NGAY HÔM NAY !!!</h6>
              </div>
              <div className="header__account col-12 col-md-4 mt-3 mt-md-0 text-center text-md-end">
                <a href="#" className="px-3 py-2 bg-white text-black">
                  <span>
                    {" "}
                    <i className="fa-solid fa-user me-2" /> Tài khoản{" "}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Header navbar */}
        <div className="header__navbar bg-black">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="header__navbar-tmp d-none d-lg-flex col-lg-1" />
              <div className="header__navbar-icon d-flex justify-content-center align-items-center col-3 col-md-2 col-lg-1">
                <a href="/">
                  <img src={LogoAnti} alt className="img-fluid" />
                </a>
              </div>
              <div className="header__navbar-searchbar p-0 d-flex justify-content-center align-items-center col-6 col-md-8">
                <form action className="search-box w-100 position-relative">
                  <input
                    type="text"
                    className="search-text form-control text-white bg-black border rounded-pill py-2"
                    placeholder="Tìm kiếm..."
                  />
                  <button className="search-btn position-absolute top-50 end-0 translate-middle-y me-1 border bg-black rounded-pill text-light py-1 px-2">
                    <span className="search-btn-span">
                      <i className="fas fa-search" />
                    </span>
                  </button>
                </form>
              </div>
              <div className="header__navbar-tools row d-flex justify-content-center align-items-center col-3 col-md-2 col-lg-2">
                <div className="header__navbar-tools__cart col-6 col-lg-12">
                  <button
                    onClick={() => showCart()}
                    className="cart-btn bg-transparent border-0 d-flex justify-content-center align-items-center row"
                    data-mdb-ripple-color="light"
                  >
                    <span className="header__navbar-tools__cart-icon text-light border rounded-pill py-2 col-auto">
                      <i className="fa-solid fa-cart-shopping" />
                    </span>
                    <span className="header__navbar-tools__cart-items text-start d-none d-lg-block text-light col">
                      <p>Giỏ hàng</p>
                      <p>0 sản phẩm</p>
                    </span>
                  </button>
                </div>
                <div className="header__navbar-tools__expand-menu-xs d-flex d-lg-none col-6">
                  <button
                    onClick={() => showMenu()}
                    className="expand-menu-xs-btn bg-transparent border-0"
                  >
                    <span className="text-light bar-icon">
                      <i className="fa-sharp fa-solid fa-bars display-6" />
                    </span>
                    <span className="text-light bar-icon-after">
                      <i className="fa-sharp fa-solid fa-bars-staggered display-6" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="header__navbar-menu-lg row d-none d-lg-flex text-light justify-content-center pb-1 ms-4">
                <div className="col-auto header__navbar-menu-item">
                  <a href className>
                    Sale
                  </a>
                </div>
                <div className="col-auto header__navbar-menu-item header__navbar-menu-item-new position-relative">
                  <a
                    href="/"
                    className="header__navbar-menu-item-new-link text-light"
                  >
                    New Collection
                    <i className="chevron-down-icon fa-solid fa-chevron-down" />
                  </a>
                  {/* header navbar new list what's new  */}
                  <div className="header__new">
                    <div className="header__new-list bg-light row p-0 list-unstyled shadow-lg bg-body">
                      <a href="#" className="header__new-list-item">
                        WEEÉ COLLECTION
                      </a>
                      <a href="#" className="header__new-list-item">
                        PINNANCLE COLLECTION
                      </a>
                      <a href="#" className="header__new-list-item">
                        X2 MONOGRAM COLLECTION
                      </a>
                      <a href="#" className="header__new-list-item">
                        THE MUSEUM OF BROKEN HEART COLLECTIOn
                      </a>
                      <a href="#" className="header__new-list-item">
                        DAILY CLOTHES
                      </a>
                      <a href="#" className="header__new-list-item">
                        DAZK COLLECTION
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-auto header__navbar-menu-item header__navbar-menu-item-new position-relative">
                  <a
                    href="/product-list"
                    className="header__navbar-menu-item-new-link text-light"
                  >
                    Tất cả sản phẩm
                    <i className="chevron-down-icon fa-solid fa-chevron-down" />
                  </a>
                  <div className="header__new">
                    <div className="header__new-list bg-light row p-0 list-unstyled shadow-lg bg-body">
                      <a href="#" className="header__new-list-item">
                        T-Shirts &amp; Polo Shirts
                      </a>
                      <a href="#" className="header__new-list-item">
                        Sweatshirts &amp; Hoodies
                      </a>
                      <a href="#" className="header__new-list-item">
                        Cardigans
                      </a>
                      <a href="#" className="header__new-list-item">
                        Outerwear{" "}
                      </a>
                      <a href="#" className="header__new-list-item">
                        Shirts
                      </a>
                      <a href="#" className="header__new-list-item">
                        Croptops
                      </a>
                      <a href="#" className="header__new-list-item">
                        Accesories
                      </a>
                      <a href="#" className="header__new-list-item">
                        Bags
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-auto header__navbar-menu-item">
                  <a href="#">ANTICODE GROUP</a>
                </div>
                <div className="col-auto header__navbar-menu-item">
                  <a href="#">Hệ thống cửa hàng</a>
                </div>
                <div className="col-auto header__navbar-menu-item">
                  <a href="#">Câu chuyện thương hiệu</a>
                </div>
                <div className="col-auto header__navbar-menu-item">
                  <a href="#">Tuyển dụng</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="modal menu__modal">
        <div
          className="modal__overlay menu__overlay"
          onClick={() => hideHiddenBar()}
        />
        <div className="modal__body menu__body">
          <div className="modal__inner">
            <div className="header__navbar-hidden-menu">
              <div className="container">
                <h5 className="hidden-menu-tittle">MENU</h5>
                <ul className="hidden-menu-list">
                  <li className="hidden-menu-item row">
                    <a href="#" className="col">
                      {" "}
                      Sale{" "}
                    </a>
                  </li>
                  <li className="hidden-menu-item">
                    <div className="item-dropdown row">
                      <a href="#" className="col-9">
                        New Collection
                      </a>
                      <span
                        onClick={() => dropdown(".new-collection-list")}
                        className="col-3 dropdown-icon "
                      >
                        <i className="chevron-down-icon fa-solid fa-angle-down" />
                      </span>
                    </div>
                    <ul className="hidden-menu-item-list new-collection-list show-dropdown">
                      <li className="hidden-menu-item-item row">
                        <a href="#" className="col">
                          {" "}
                          WEEÉ COLLECTION{" "}
                        </a>
                      </li>
                      <li className="hidden-menu-item-item row">
                        <a href="#" className="col">
                          PINANNCLE COLLECTION{" "}
                        </a>
                      </li>
                      <li className="hidden-menu-item-item row">
                        <a href="#" className="col">
                          {" "}
                          X2 MONOGRAM COLLECTION{" "}
                        </a>
                      </li>
                      <li className="hidden-menu-item-item row ">
                        <a href="#" className="col">
                          THE MUSEUM OF BROKEN HEART COLLECTION
                        </a>
                      </li>
                      <li className="hidden-menu-item-item row ">
                        <a href="#" className="col">
                          {" "}
                          DAILY CLOTHES{" "}
                        </a>
                      </li>
                      <li className="hidden-menu-item-item row ">
                        <a href="#" className="col">
                          {" "}
                          DAZK COLLECTION{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="hidden-menu-item">
                    <div className="item-dropdown row">
                      <a href="#" className="col-9">
                        Tất cả sản phẩm
                      </a>
                      <span
                        onClick={() => dropdown(".all-collection-list")}
                        className="col-3"
                      >
                        <i className="chevron-down-icon fa-solid fa-angle-down" />
                      </span>
                    </div>
                    <ul className="hidden-menu-item-list all-collection-list show-dropdown">
                      <li className="hidden-menu-item-item row">
                        <a href="#" className="col">
                          {" "}
                          T-Shirts &amp; Polo Shirts{" "}
                        </a>
                      </li>
                      <li className="hidden-menu-item-item row">
                        <a href="#" className="col">
                          Sweatshirts &amp; Hoodies{" "}
                        </a>
                      </li>
                      <li className="hidden-menu-item-item row">
                        <a href="#" className="col">
                          {" "}
                          Cardigans{" "}
                        </a>
                      </li>
                      <li className="hidden-menu-item-item row ">
                        <a href="#" className="col">
                          Outerwear
                        </a>
                      </li>
                      <li className="hidden-menu-item-item row ">
                        <a href="#" className="col">
                          {" "}
                          Shirts{" "}
                        </a>
                      </li>
                      <li className="hidden-menu-item-item row ">
                        <a href="#" className="col">
                          {" "}
                          Croptops{" "}
                        </a>
                      </li>
                      <li className="hidden-menu-item-item row ">
                        <a href="#" className="col">
                          {" "}
                          Accesories{" "}
                        </a>
                      </li>
                      <li className="hidden-menu-item-item row ">
                        <a href="#" className="col">
                          {" "}
                          Bags{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="hidden-menu-item">
                    <a href="#" className>
                      {" "}
                      ANTICODE GROUP
                      <p />{" "}
                    </a>
                  </li>
                  <li className="hidden-menu-item">
                    <a href="#" className>
                      {" "}
                      Hệ thống cửa hàng
                      <p />{" "}
                    </a>
                  </li>
                  <li className="hidden-menu-item">
                    <a href="#" className>
                      {" "}
                      Câu chuyện thương hiệu
                      <p />{" "}
                    </a>
                  </li>
                  <li className="hidden-menu-item">
                    <a href="#" className>
                      {" "}
                      Tuyển dụng
                      <p />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="header__navbar-hidden-cart">
              <h5 className="hidden-menu-tittle">GIỎ HÀNG</h5>
              <div className="cart-item">
                <div className="container">
                  <div className="row px-3">
                    <div className="col">
                      <p>Hiện chưa có sản phẩm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price_total">
                <div className="container">
                  <div className="row px-4">
                    <div className="col">
                      <h4>TỔNG TIỀN:</h4>
                    </div>
                    <div className="col">
                      <h4 className="text-end">0đ</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-group">
                <div className="container">
                  <div className="row px-3 row-btn">
                    <div className="col">
                      <button>XEM GIỎ HÀNG</button>
                    </div>
                    <div className="col">
                      <button>THANH TOÁN</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
