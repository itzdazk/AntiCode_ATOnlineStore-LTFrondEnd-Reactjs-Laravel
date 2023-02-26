import api from "./api";

const login = (username, password) => {
  const data = { Username: username, Password: password };

  return api.post(api.url.login, data).then((res) => res.data);
};

const userService = {
  login,
};

export default userService;
