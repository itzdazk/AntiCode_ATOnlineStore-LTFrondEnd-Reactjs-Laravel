import React from "react";
import $ from "jquery";

const Footer = () => {
  $(document).ready(function ($) {
    $("#coin").on("click", function () {
      var flipResult = Math.random();
      $("#coin").removeClass();
      setTimeout(function () {
        if (flipResult <= 0.5) {
          $("#coin").addClass("heads");
          console.log("it is head");
        } else {
          $("#coin").addClass("tails");
          console.log("it is tails");
        }
      }, 100);
    });
  });
  return (
    <footer className="footer mt-5">
      <div className="footer__contacts pt-5">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3 footer__contacts-col">
              <h5 className="contacts--tittle">GIỚI THIỆU</h5>
              <p className="contats--pa">
                ANTICODE là thương hiệu được thành lập dựa trên niềm đam mê thời
                trang streetwear, với mục đích lan toả phong cách, xu hướng thời
                trang tương lai đến giới trẻ Việt Nam. Nhằm giúp thế hệ trẻ
                khẳng định được sự tinh tế, chỉnh chu trong cách ăn mặc. Đồng
                thời giúp các bạn cập nhật được xu hướng ăn mặc thịnh hành trên
                thế giới một cách nhanh nhất, chất lượng tốt nhất thông qua
                brand ANTICODE
              </p>
              <p className="contats--pa">
                Hi vọng ANTICODE sẽ càng lúc càng đem xu hướng thời trang thế
                giới về Việt Nam sớm nhất, nhanh nhất theo một phong cách riêng
                do chính ANTICODE thiết kế.
              </p>
            </div>
            <div className="col-6 col-md-3 footer__contacts-col">
              <h5 className="contacts--tittle">XEM THÊM</h5>
              <ul className="contats--pa-list">
                <li className="contats--pa contats--pa-item">
                  <a href>Hệ thống cửa hàng</a>
                </li>
                <li className="contats--pa contats--pa-item">
                  <a href>Tìm kiếm</a>
                </li>
                <li className="contats--pa contats--pa-item">
                  <a href> Giới thiệu</a>
                </li>
                <li className="contats--pa contats--pa-item">
                  <a href> Chính sách đổi trả</a>
                </li>
                <li className="contats--pa contats--pa-item">
                  <a href>Chính sách bảo mật</a>
                </li>
                <li className="contats--pa contats--pa-item">
                  <a href>Điều khoản dịch vụ</a>
                </li>
                <li className="contats--pa contats--pa-item">
                  <a href>Chính sách vận chuyển</a>
                </li>
                <li className="contats--pa contats--pa-item">
                  <a href>Chính sách thanh toán</a>
                </li>
                <li className="contats--pa contats--pa-item">
                  <a href>Tuyển dụng nhân sự</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3 footer__contacts-col">
              <h5 className="contacts--tittle">THÔNG TIN LIÊN HỆ</h5>
              <p className="contats--pa">
                ANTICODE - Thương hiệu thời trang thiết kế, street style dành
                cho giới trẻ.
              </p>
              <p className="contats--pa">
                <i className="fa-solid fa-location-dot" /> ANTICODE Sài Gòn :
                <br />
                - 264 Tân Sơn Nhì, quận Tân Phú - #Thenewplayground 26 Lý Tự
                Trọng, quận 1. <br />
                - #Thenewplayground Central Market cổng đường Lê Lai, quận 1 (
                đối diện 90 Lê Lai ). <br />- #GTown 136 Nguyễn Hồng Đào, quận
                Tân Bình.
              </p>
              <p className="contats--pa">
                <i className="fa-solid fa-phone" /> 000 000 0000
              </p>
              <p className="contats--pa">
                <i className="fa-solid fa-address-book" /> xxx xxxx xxxxx
              </p>
              <p className="contats--pa">
                <i className="fa-solid fa-envelope" /> anticode.vn@gmail.com
              </p>
            </div>
            <div className="col-6 col-md-3 footer__contacts-col px-4">
              <h5 className="contacts--tittle">FANPAGE</h5>
              <div className="row gx-0 contacts-button-group">
                <a className="col-4">
                  <button className="button-contacts-icon">
                    <i className="fa-brands fa-facebook-f" />
                  </button>
                </a>
                <a className="col-4">
                  <button className="button-contacts-icon">
                    <i className="fa-brands fa-instagram" />
                  </button>
                </a>
                <a className="col-4">
                  <button className="button-contacts-icon">
                    <i className="fab fa-linkedin-in" />
                  </button>
                </a>
                <a className="col-4">
                  <button className="button-contacts-icon">
                    <i className="fa-brands fa-wolf-pack-battalion" />
                  </button>
                </a>
                <a className="col-4">
                  <button className="button-contacts-icon">
                    <i className="fa-brands fa-twitter" />
                  </button>
                </a>
                <a className="col-4">
                  <button className="button-contacts-icon">
                    <i className="fa-solid fa-p" />
                  </button>
                </a>
              </div>
              <div className="row mt-4 h-50 justify-content-center align-items-center">
                <div id="coin">
                  <div className="side-a" />
                  <div className="side-b" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__letter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="footer__letter-area col-10 col-lg-8 row">
              <div className="letter-area-left col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start align-items-center">
                <span className="letter-icon">
                  <i className="fa-solid fa-envelope" />
                </span>
                <h4 className="letter-tittle">Đăng ký nhận tin</h4>
              </div>
              <div className="letter-area-right col-12 col-lg-7 d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  className="text__email-receive"
                  placeholder="Nhập email của bạn..."
                />
                <button className="submit-btn-email">
                  <i className="fa-regular fa-envelope" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="container-fluid">
          <div className="row">
            <div className="col footer_copyright-col">
              Copyright © 2023 ANTICODE. Powered by Dazk
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
