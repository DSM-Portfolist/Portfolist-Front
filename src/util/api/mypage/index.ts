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

export const putNotification = (data: boolean) => {
  return request({
    url: "/user/notification",
    method: "put",
    headers: { Authorization: token },
    data: { notification: data },
  });
};

export const postPasswordCheck = (password: string) => {
  return request({
    url: "/user/password",
    method: "post",
    headers: { Authorization: token },
    data: { now_password: password },
  });
};

export const patchPassword = (now_password: any, new_password: any) => {
  return request({
    url: "/user/password",
    method: "patch",
    headers: { Authorization: token },
    data: {
      now_password: now_password.password,
      new_password: new_password.password,
    },
  });
};
