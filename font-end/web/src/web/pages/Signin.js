import React, { useState, useEffect, useRef } from "react";
import Logo from "../img/CODE.gif";
import userService from "./../../services/userService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/auth";
import { toast } from "react-toastify";
const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();

    userService.login(username, password).then((res) => {
      if (res.errorCode === 1) {
        dispatch(
          login({
            token: res.userInfo.token,
            userInfo: res.userInfo,
          })
        );
        setUsername("");
        setPassword("");
        navigate("/home");
      } else {
        toast.error("Tài khoản hoặc mật khẩu không đúng");
      }
    });
  };

  return (
    <>
      <div>
        <section className="py-5 my-5">
          <div className="container h-100 py-5 my-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div
                  className="card login__card"
                  style={{ borderRadius: "1rem", height: "386px" }}
                >
                  <div className="row g-0">
                    <div className="logo col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src={Logo}
                        alt="logo"
                        className="img-fluid img"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body login__card--body text-black">
                        <div className="h2 text-center py-2">Đăng Nhập</div>
                        <form onSubmit={handleLogin}>
                          <div className="form-outline mb-4 login__card--input">
                            <input
                              type="text"
                              required
                              onChange={(e) => setUsername(e.target.value)}
                            />
                            <label className="login__card--label">
                              Tên Đăng Nhập
                            </label>
                          </div>
                          <div className="form-outline mb-4 login__card--input">
                            <input
                              type="password"
                              required
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className="login__card--label">
                              Mật Khẩu
                            </label>
                          </div>
                          <a
                            className="small text-muted text-decoration-none"
                            href="#"
                          >
                            Quên Mật Khẩu?
                          </a>
                          <div className="pt-1 mb-4 text-center">
                            <button
                              className="login__card--btn btn-dark btn-lg btn-block text-center"
                              type="submit"
                            >
                              Đăng nhập
                            </button>
                          </div>
                          <div className="text-center">
                            <p className="mb-5 pb-lg-2">
                              Chưa Có Tài Khoản?
                              <a
                                href="/register"
                                className="text-decoration-none text-secondary"
                              >
                                Đăng Ký
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

export default Login;
