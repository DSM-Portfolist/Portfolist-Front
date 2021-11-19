import request from "../index";

const token = `Bearer ${localStorage.getItem("access_token_portfolist")}`;

export const deleteProfileImage = () => {
  return request({
    url: "/user/profile",
    method: "delete",
    headers: { Authorization: token },
  });
};

export const postProfileImage = (file: File) => {
  return request({
    url: "/user/profile",
    method: "post",
    headers: { Authorization: token },
    data: { file },
  });
};
