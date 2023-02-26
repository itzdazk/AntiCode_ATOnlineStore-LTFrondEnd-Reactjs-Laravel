import api from "./api";

const list = () => api.get(api.url.productdetail).then((res) => res.data);

const get = (id) =>
  api.get(`${api.url.productdetail}/${id}`).then((res) => res.data);

const add = (data) =>
  api.post(api.url.productdetail, data).then((res) => res.data);

const update = (id, data) =>
  api.put(`${api.url.productdetail}/${id}`, data).then((res) => res.data);

const remove = (id) =>
  api.delete(`${api.url.productdetail}/${id}`).then((res) => res.data);

const productdetail = {
  list,
  get,
  add,
  update,
  remove,
};

export default productdetail;
