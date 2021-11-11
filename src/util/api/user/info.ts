import request, { token } from "../index";

// 마이페이지 유저 정보
export const getUser = () => {
  return request({
    url: "/user/info",
    method: "get",
    headers: { Authorization: token },
  });
};

export const getUserInfo = (userId: number) => {
  return request({
    url: `/info/user/${userId}`,
    method: "get",
    headers: { Authorization: token },
  });
};

export const getMyInfo = () => {
  return request({
    url: "/user/info",
    method: "get",
    headers: { Authorization: token },
  });
};
