import request, { token } from "../index";

export const getMonthPortfolio = () => {
  return request({
    url: "/portfolio/month",
    method: "get",
  });
};

export const getRecentPortfolio = () => {
  return request({
    url: "/portfolio/recent",
    method: "get",
  });
};

export const getNotification = () => {
  return request({
    url: "/user/notification",
    method: "get",
    headers: { Authorization: token },
  });
};

export const patchUserInfo = (
  field: number[],
  name: string,
  introduce: string
) => {
  return request({
    url: "/user/info",
    method: "patch",
    headers: { Authorization: token },
    data: {
      field: field,
      introduce: introduce,
      name: name,
    },
  });
};

export const deleteUser = () => {
  return request({
    url: "/user",
    method: "delete",
    headers: { Authorization: token },
  });
};

export const getNotificationStatus = () => {
  return request({
    url: "/user/notification/status",
    method: "get",
    headers: { Authorization: token },
  });
};
