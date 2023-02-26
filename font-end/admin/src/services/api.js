import axios from "axios";

const url = {
  baseUrl: "http://localhost/clothes-stores-online-db/public/api",
  login: "/login",
  product: "/product",
  allimageproduct: "/productImage",
  alldetail: "/productDetail",
  category: "/category",
  image: "/image",
  imageall: "/imageAll",
  productdetail: "/productdetail",
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
