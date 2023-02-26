import api from "./api";

const list = () => api.get(api.url.order).then((res) => res.data);

const get = (id) => api.get(`${api.url.order}/${id}`).then((res) => res.data);

const getall = () => api.get(api.url.imageall).then((res) => res.data);

const add = (data) => api.post(api.url.order, data).then((res) => res.data);

const update = (id, data) =>
  api.post(`${api.url.order}/${id}`, data).then((res) => res.data);

const remove = (id) =>
  api.delete(`${api.url.order}/${id}`).then((res) => res.data);

const orderService = {
  list,
  get,
  add,
  update,
  remove,
  getall,
};

export default orderService;
