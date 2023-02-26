import api from "./api";

const list = () => api.get(api.url.image).then((res) => res.data);

const get = (id) => api.get(`${api.url.image}/${id}`).then((res) => res.data);

const getall = () => api.get(api.url.imageall).then((res) => res.data);

const add = (data) => api.post(api.url.image, data).then((res) => res.data);

const update = (id, data) =>
  api.post(`${api.url.image}/${id}`, data).then((res) => res.data);

const remove = (id) =>
  api.delete(`${api.url.image}/${id}`).then((res) => res.data);

const imageService = {
  list,
  get,
  add,
  update,
  remove,
  getall,
};

export default imageService;
