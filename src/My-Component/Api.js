import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:1919/api",
});

export default API;