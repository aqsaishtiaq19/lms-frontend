import axios from "axios";

const API = axios.create({
  baseURL: "https://lms-backend-momin2.vercel.app/api/",
});

export default API;