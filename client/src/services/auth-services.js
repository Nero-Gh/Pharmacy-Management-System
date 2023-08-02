import axios from "axios";
import { API_URL } from "../pages/global/util";

const login = (email, password) => {
  return axios
    .post(`${API_URL}/auth/login`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.userToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout,
};

export default authService;
