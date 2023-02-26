import api from "./api";

const login = (username, password) => {
  const data = { Username: username, Password: password };

  return api.post(api.url.login, data).then((res) => res.data);
};

const register = (email, username, password) => {
  const data = { Email: email, Username: username, Password: password };

  return api.post(api.url.register, data).then((res) => res.data);
};

const getinfo = (id) =>
  api.get(`${api.url.getuserinfo}/${id}`).then((res) => res.data);

const updateinfo = (name, phone, address, id) => {
  const data = { Name: name, Phone: phone, Address: address };

  return api.post(`${api.url.userupdate}/${id}`, data).then((res) => res.data);
};

const userService = {
  login,
  register,
  getinfo,
  updateinfo,
};

export default userService;
