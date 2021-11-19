import axios, { AxiosError } from "axios";
import { ToastError } from "../../hook/toastHook";

export const MAINURL = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: MAINURL,
  timeout: 10000,
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error: AxiosError) {
    const status = error.response?.status;

    if (status === 400) {
      ToastError("유효하지 않은 요청이 발생했습니다.");
    } else if (status === 401) {
      // alert("로그인 후 이용해주세요.");
      //window.location.href = "/";
    } else if (status === 403) {
      alert("잘못된 접근 입니다.");
      window.location.href = "/";
    } else if (status === 407) {
      ToastError("서버에 요류가 발생했습니다.");
    } else if (status === 429) {
      ToastError("한 번에 너무 많은 요청이 발생했습니다.");
    }

    return Promise.reject(error);
  }
);

export default instance;
