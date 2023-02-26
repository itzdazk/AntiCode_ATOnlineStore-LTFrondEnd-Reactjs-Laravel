import axios from "axios";

const url = {
  baseUrl: "http://localhost/clothes-stores-online-db/public/api",
  login: "/clogin",
  register: "/cregister",
  userupdate: "/cupdate",
  getuserinfo: "/getinfo",
  product: "/product",
  findproduct: "/findproduct",
  newproduct: "/getnewproduct",
  trendingproduct: "/gettrendingproduct",
  allimageproduct: "/productImage",
  alldetail: "/productDetail",
  category: "/category",
  cateproduct: "/cateProduct",
  image: "/image",
  imageall: "/imageAll",
  productdetail: "/productdetail",
  order: "/order",
  orderdetail: "/orderdetail",
};

const instance = axios.create({
  baseURL: url.baseUrl,
  header: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const api = {
  url: url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  patch: instance.patch,
};

export default api;
