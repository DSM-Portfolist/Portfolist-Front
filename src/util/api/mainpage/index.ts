import request from "../index";

export const getMonthPortfolio = () => {
  return request({
    url: "/porfolio/month",
    method: "get",
  });
};
