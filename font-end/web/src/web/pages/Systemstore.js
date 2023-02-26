import React from "react";
import anticode from "../img/CODE.gif";
import Header from "../components/Header";
import Footer from "../components/Footer";
const SystemStore = () => {
  return (
    <div>
      <div className="container-fluid text-center title-container">
        <div className="container">
          <div className="title h1">Hệ thống cửa hàng</div>
        </div>
      </div>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <img src={anticode} className="img-fluid" />
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="contact__address">
                <p>
                  <span className="text-muted">Địa chỉ chúng tôi</span> <br />
                  <span className="fw-bold">
                    ANTICODE - Thương hiệu thời trang thiết kế, street style
                    dành cho giới trẻ. <br />
                    📍 Store HCM : Công viên Phần Mềm Quang Trung, Lô 14 Đường
                    Số 5, Tân Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh <br />
                    📍 Store HCM: Công viên Phần Mềm Quang Trung, Lô 14 Đường Số
                    5, Tân Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh <br />
                    📍 Store HCM: Công viên Phần Mềm Quang Trung, Lô 14 Đường Số
                    5, Tân Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh <br />
                  </span>
                </p>
                <p>
                  <span className="text-muted">Email chúng tôi</span> <br />
                  <span className="fw-bold">xxx.vn@gmail.com</span>
                </p>
                <p>
                  <span className="text-muted">Điện thoại</span> <br />
                  <span className="fw-bold">000 000 0000</span>
                </p>
                <p>
                  <span className="text-muted">Thời gian làm việc</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact__map">
        <div className="container-fluid">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15673.966400095193!2d106.62520662747339!3d10.850164576343278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529deaaaaaaab%3A0xce800a25143c8e3a!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIFPDoGkgR8Oybg!5e0!3m2!1svi!2s!4v1677387725979!5m2!1svi!2s"
              width="100%"
              height={500}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="contact-query">
        <div className="container">
          <div className="title-query">Gửi thắc mắc cho chúng tôi</div>
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <input
                type="text"
                className="contact__send--input"
                placeholder="Tên của bạn"
              />
            </div>
            <div className="col-md-4 col-xs-12">
              <input
                type="text"
                className="contact__send--input"
                placeholder="Email của bạn"
              />
            </div>
            <div className="col-md-4 col-xs-12">
              <input
                type="text"
                className="contact__send--input"
                placeholder="Số điện thoại"
              />
            </div>
            <div className="col py-2">
              <textarea
                className="contact--comments"
                style={{ background: "#fff" }}
                placeholder="Nội dung"
                defaultValue={""}
              />
            </div>
          </div>
          <button className="contact__send--btn ">Gửi</button>
        </div>
      </div>
    </div>
  );
};

export default SystemStore;
