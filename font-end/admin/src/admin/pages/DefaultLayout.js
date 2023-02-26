import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "../components/header";
import routes from "./routes";
import { useSelector } from "react-redux";

const DefaultLayout = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <Routes>
            {routes.map((route, idx) => (
              <Route
                key={idx}
                path={route.path}
                element={route.component}
              ></Route>
            ))}
          </Routes>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default DefaultLayout;
