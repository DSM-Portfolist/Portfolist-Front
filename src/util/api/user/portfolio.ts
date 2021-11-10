import request, { token } from "../index";

export const getMyPortfolioList = () => {
  return request({
    url: "/user/portfolio",
    method: "get",
    headers: { Authorization: token },
  });
};

export const getMyTouchingPortfolioList = () => {
  return request({
    url: "/user/touching?page=0&size=5",
    method: "get",
    headers: { Authorization: token },
  });
};

export const getUserPortfolioList = (userId: number) => {
  return request({
    url: `/user/porfolio/${userId}`,
    method: "get",
    headers: { Authorization: token },
  });
};
