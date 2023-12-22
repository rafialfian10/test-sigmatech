import axios from "axios";

export const API = axios.create({
  baseURL: "http://universities.hipolabs.com",
});

