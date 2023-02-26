import api from "./api";

const list = () => api.get(api.url.product).then((res) => res.data);

const get = (id) => api.get(`${api.url.product}/${id}`).then((res) => res.data);

const getDetail = (id) =>
  api.get(`${api.url.alldetail}/${id}`).then((res) => res.data);

const getallImage = (id) =>
  api.get(`${api.url.allimageproduct}/${id}`).then((res) => res.data);

const add = (data) => api.post(api.url.product, data).then((res) => res.data);

const update = (id, data) =>
  api.put(`${api.url.product}/${id}`, data).then((res) => res.data);

const remove = (id) =>
  api.delete(`${api.url.product}/${id}`).then((res) => res.data);

const productService = {
  list,
  get,
  add,
  update,
  remove,
  getallImage,
  getDetail,
};

export default productService;
