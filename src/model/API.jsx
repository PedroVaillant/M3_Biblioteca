import axios from "axios";

const API = axios.create({
  baseURL: "https://m3bibliotecadb.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;