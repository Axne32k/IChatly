import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  });

  API.interceptors.request.use((req) => {
    const user = JSON.parse(localStorage.getItem("user"));
      if (user?.token) {
          req.headers.Authorization = `Bearer ${user.token}`;
            }
              return req;
              });

              export default API;