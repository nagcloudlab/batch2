import client from "./client";

const login = (email, password) => {
  return client.post("/users/login", { email, password })
};

export default {
  login,
};
