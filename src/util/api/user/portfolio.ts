import request, { token } from "../index";

export const getMyPortfolioList = () => {
  return request({
    url: "/user/portfolio",
    method: "get",
    headers: { Authorization: token },
  });
};
