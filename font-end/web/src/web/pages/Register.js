import Logo from "../img/CODE.gif";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import userService from "./../../services/userService";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm_password, setConfirm_password] = useState();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === confirm_password) {
      userService.register(email, username, password).then((res) => {
        if (res.errorCode === 1) {
          setUsername("");
          setEmail("");
          setPassword("");
          setConfirm_password("");
          toast.success("Tạo tài khoản thành công");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          toast.error("Tạo tài khoản không thành công, vui lòng thử lại");
        }
      });
    } else {
      alert("Mật khẩu không khớp");
    }
  };

  return (
    <>
      <div>
        <section className="vh-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div
                  className="card reg__card"
                  style={{ borderRadius: "1rem", height: "455px" }}
                >
                  <div className="row g-0">
                    <div className="logo col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src={Logo}
                        alt="logo"
                        className="img-fluid"
                        style={{ borderRadius: "1rem 0 0 1rem", height: "90%" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body reg__card--body text-black">
                        <div className="h2 text-center py-2">Đăng Ký</div>
                        <form onSubmit={handleRegister}>
                          <div className="form-outline mb-2 reg__card--input">
                            <input
                              type="text"
                              className
                              required
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="reg__card--label">Email</label>
                          </div>
                          <div className="form-outline mb-2 reg__card--input">
                            <input
                              type="text"
                              className
                              required
                              onChange={(e) => setUsername(e.target.value)}
                            />
                            <label className="reg__card--label">
                              Tên Đăng Nhập
                            </label>
                          </div>

                          <div className="form-outline mb-2 reg__card--input">
                            <input
                              type="password"
                              className
                              required
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className="reg__card--label">Mật Khẩu</label>
                          </div>
                          <div className="form-outline mb-2 reg__card--input">
                            <input
                              type="password"
                              className
                              required
                              onChange={(e) =>
                                setConfirm_password(e.target.value)
                              }
                            />
                            <label className="reg__card--label">
                              Nhập Lại Mật Khẩu
                            </label>
                          </div>
                          <div className="pt-1 mb-2 text-center">
                            <button
                              className="reg__card--btn btn-dark btn-lg btn-block text-center"
                              type="submit"
                            >
                              Đăng Ký
                            </button>
                          </div>
                          <div className="text-center">
                            <p className="mb-5 pb-lg-2">
                              Đã Có Tài Khoản?
                              <a
                                href="/login"
                                className="text-decoration-none text-secondary"
                              >
                                Đăng Nhập
                              </a>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
