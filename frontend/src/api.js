import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // 🌟 Must match your Postman URL
});

export default api;