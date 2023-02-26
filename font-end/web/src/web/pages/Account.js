import TittleCollection from "../components/TittleCollection";
import userService from "./../../services/userService";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Account = () => {
  const userId = useSelector((state) => state.auth.userInfo.id);
  const navigate = useNavigate();

  const name = useRef();
  const address = useRef();
  const phone = useRef();

  const [userinfo, setUserinfo] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    userService.getinfo(userId).then((res) => setUserinfo(res));
  };

  const handleUpdateInfo = (e) => {
    e.preventDefault();

    userService
      .updateinfo(
        name.current.value,
        phone.current.value,
        address.current.value,
        userId
      )
      .then((res) => {
        if (res.errorCode === 1) {
          toast.success("Cập nhật thông tin thành công");
        }
      });
  };

  return (
    <>
      <>
        <div>
          <TittleCollection
            tittleClass="wrapper__newin-tittle wrapper_tittle"
            tittle="TÀI KHOẢN"
          />
          <section className="">
            <div className="container h-100 py-5">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-7 d-flex align-items-center">
                  <div className="card-body login__card--body text-black">
                    <div className="h2 text-center py-2">
                      Cập nhật thông tin tài khoản
                    </div>
                    <form>
                      <label className="login__card--label">Họ và tên</label>
                      <div className="form-outline mb-4 login__card--input">
                        <input
                          ref={name}
                          type="text"
                          required
                          defaultValue={userinfo.Name}
                        />
                      </div>
                      <label className="login__card--label">
                        Số điện thoại
                      </label>
                      <div className="form-outline mb-4 login__card--input">
                        <input
                          ref={phone}
                          type="text"
                          required
                          defaultValue={userinfo.Phone}
                        />
                      </div>
                      <label className="login__card--label">Địa chỉ</label>
                      <div className="form-outline mb-4 login__card--input">
                        <input
                          ref={address}
                          type="text"
                          required
                          defaultValue={userinfo.Address}
                        />
                      </div>

                      <div className="pt-1 mb-4 text-center">
                        <button
                          className="login__card--btn btn-dark btn-lg btn-block text-center"
                          type="submit"
                          onClick={(e) => handleUpdateInfo(e)}
                        >
                          Cập Nhật
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </>
  );
};

export default Account;
