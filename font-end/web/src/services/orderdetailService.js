import api from "./api";

const list = () => api.get(api.url.orderdetail).then((res) => res.data);

const get = (id) =>
  api.get(`${api.url.orderdetail}/${id}`).then((res) => res.data);

const getall = () => api.get(api.url.imageall).then((res) => res.data);

const add = (data) =>
  api.post(api.url.orderdetail, data).then((res) => res.data);

const update = (id, data) =>
  api.post(`${api.url.orderdetail}/${id}`, data).then((res) => res.data);

const remove = (id) =>
  api.delete(`${api.url.orderdetail}/${id}`).then((res) => res.data);

const orderdetailService = {
  list,
  get,
  add,
  update,
  remove,
  getall,
};

export default orderdetailService;
