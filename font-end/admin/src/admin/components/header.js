import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/reducers/auth";
const Header = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="home">
          Management
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/order">
                Order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user">
                User
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/category">
                Category
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/product">
                Product
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                welcome {userInfo.Username}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => dispatch(logout())}>
                <i class="fa-solid fa-right-from-bracket"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
