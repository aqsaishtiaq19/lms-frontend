import axios from "axios";

const API = axios.create({
  baseURL: "https://my-projects.bonto.run/",
});

export default API;