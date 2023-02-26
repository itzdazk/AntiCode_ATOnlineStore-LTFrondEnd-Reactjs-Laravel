import React from "react";
import Input from "../components/input";
import { useState, useEffect, useRef } from "react";
import userService from "./../../services/userService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/auth";
const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const userName = useRef("");
  const passWord = useRef("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const username = userName.current.value;
    const password = passWord.current.value;
    userService.login(username, password).then((res) => {
      if (res.errorCode === 1) {
        setMessage("");
        dispatch(
          login({
            token: res.userInfo.token,
            userInfo: res.userInfo,
          })
        );
        navigate("/home");
      } else {
        setMessage("Wrong username or password");
      }
    });
  };

  useEffect(() => {
    userName.current.focus();
  });

  return (
    <div className="login-form">
      <div
        className="container-fluid 
       center-div h-100
       "
      >
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-sm-8 col-lg-5">
            <div className="card bg-black border border-dark">
              <div className="card-header text-white">
                <h4 className="card-title mb-0">Login</h4>
              </div>
              <div className="card-body bg-light text-black rounded-bottom ">
                <form onSubmit={formSubmitHandler}>
                  <div className="text-center my-2 text-danger">{message}</div>
                  <Input inputRef={userName} id="userName" label="Username" />
                  <Input
                    inputRef={passWord}
                    id="passWord"
                    label="Password"
                    type="password"
                  />
                  <div className="row justify-content-center">
                    <div className=" col-auto">
                      <button
                        type="submit"
                        className="login-btn btn bg-black text-light "
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
