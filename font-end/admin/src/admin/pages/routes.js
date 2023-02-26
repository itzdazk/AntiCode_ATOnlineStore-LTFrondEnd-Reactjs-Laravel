import Home from "./Home";
import Product from "./Product";
import Category from "./Category";
import Order from "./Order";
import User from "./User";

const routes = [
  { path: "", component: <Home /> },
  { path: "/home", component: <Home /> },
  { path: "/order", component: <Order /> },
  { path: "/user", component: <User /> },
  { path: "/product", component: <Product /> },
  { path: "/category", component: <Category /> },
];

export default routes;
