import axios from "axios";

const API = axios.create({
  baseURL: "https://lms-backend-production-ada7.up.railway.app/api",
});

export default API;