import request, { token } from "../index";

// 마이페이지 유저 정보
export const getUser = () => {
  return request({
    url: "/user/info",
    method: "get",
    headers: { Authorization: token },
  });
};
