import request, { token } from "../index";

export const getMonthPortfolio = () => {
  return request({
    url: "/portfolio/month",
    method: "get",
    headers: { Authorization: token },
  });
};

export const getRecentPortfolio = () => {
  return request({
    url: "/portfolio/recent",
    method: "get",
    headers: { Authorization: token },
  });
};

export const getNotification = () => {
  return request({
    url: "/user/notification",
    method: "get",
    headers: { Authorization: token },
  });
};
