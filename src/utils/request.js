import axios from "axios";
import store from "../store";
let baseURL = "";
if (process.env.NODE_ENV === "development") {
  // 编译环境
  baseURL = "/api";
} else {
  if (location.origin == "https://app.tuomaimai.com") {
    baseURL = "https://supershop.tuomaimai.com";
  } else if (location.origin == "https://app.simplego.top") {
    baseURL = "https://ht.simplego.top";
  } else {
    baseURL = location.origin;
  }
}

// create an axios instance
const service = axios.create({
  baseURL: baseURL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.state.userInfo && store.state.userInfo.uuid) {
      config.headers["appUser"] = store.state.userInfo.uuid;
    }
    return config;
  },
  error => {
    // do something with request error
    // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    return res;
  },

  error => {
    // for debug
    return Promise.reject(error);
  }
);

export default service;
