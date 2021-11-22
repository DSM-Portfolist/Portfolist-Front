import request from "../index";

const token = `Bearer ${localStorage.getItem("access_token_portfolist")}`;

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
    url: `/portfolio/user/${userId}`,
    method: "get",
    headers: { Authorization: token },
  });
};
