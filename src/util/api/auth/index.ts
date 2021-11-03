import axios, { AxiosRequestConfig } from "axios";
import { MAINURL } from "..";

export const accessClient = axios.create({
  baseURL: `${MAINURL}`,
  timeout: 180000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token_portfolist")}`,
  },
});

// 요청을 보내기전 인스턴스 내부의 header의 token 변경
accessClient.interceptors.request.use(function (config: AxiosRequestConfig) {
  const token = localStorage.getItem("access_token_portfolist");
  config.headers.Authorization = "Bearer" + token;

  return config;
});

accessClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return new Promise((resolve, reject) => {
      const originalReq = err.config;
      if (
        err.response.status === 401 &&
        err.confing &&
        !err.config.__isRetryRequest
      ) {
        originalReq._retry = true;

        let res = axios
          .post("/refresh", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "access_token_portfolist"
              )}`,
            },
            body: {
              refresh: localStorage.getItem("refresh_token_portfolist"),
            },
          })
          .then((res) => {
            console.log(res);
            localStorage.setItem("access_token_portfolist", res.data);
            originalReq.headers["Authorization"] = "Bearer " + res.data;

            return axios(originalReq);
          });

        resolve(res);
      }

      return reject(err);
    });
  }
);
