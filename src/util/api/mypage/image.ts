import request, { token } from "../index";

export const deleteProfileImage = () => {
  return request({
    url: "/user/profile",
    method: "delete",
    headers: { Authorization: token },
  });
};
