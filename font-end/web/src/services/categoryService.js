import api from "./api";

const list = () => api.get(api.url.category).then((res) => res.data);

const listproduct = (id) =>
  api.get(`${api.url.cateproduct}/${id}`).then((res) => res.data);

const get = (id) =>
  api.get(`${api.url.category}/${id}`).then((res) => res.data);

const add = (data) => api.post(api.url.category, data).then((res) => res.data);

const update = (id, data) =>
  api.post(`${api.url.category}/${id}`, data).then((res) => res.data);

const remove = (id) =>
  api.delete(`${api.url.category}/${id}`).then((res) => res.data);

const productService = {
  list,
  get,
  add,
  update,
  remove,
  listproduct,
};

export default productService;
