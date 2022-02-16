import request from "../common/index";

const token = `Bearer ${localStorage.getItem("access_token_portfolist")}`;

export const deleteProfileImage = () => {
  return request({
    url: "/user/profile",
    method: "delete",
    headers: { Authorization: token },
  });
};

export const postProfileImage = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  return request({
    url: "/user/profile",
    method: "post",
    data: formData,
  });
};
