import axios from "axios";
// import {API_ORIGIN} from "../config";

// export const instance = axios.create({
//   baseURL: 'http://localhost:8080',
//   withCredentials: true,
//   headers: {
//     "Content-Type": 'application/json;charset=utf-8',
//   },
// });

export const instance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  headers: {
    "Content-Type": 'application/json;charset=utf-8',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export const setTokenToRequests = (token) => {
  Object.assign(instance.defaults, {
    headers: {
      authorization: `Basic ${token}`,
      'X-Requested-With': 'XMLHttpRequest',
    },
  });
}