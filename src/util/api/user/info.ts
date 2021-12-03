import request from "../common/index";

// 마이페이지 유저 정보
export const getUser = () => {
  return request({
    url: "/user/info",
    method: "get",
  });
};

export const getUserInfo = (userId: number) => {
  return request({
    url: `/info/user/${userId}`,
    method: "get",
  });
};
