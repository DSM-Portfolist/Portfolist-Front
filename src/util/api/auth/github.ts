import axios from "axios";
import request from "../index";

export const github = async (data: any) => {
  return await request({
    url: "/login/github",
    method: "post",
    data: { code: data },
  }).then((res) => {
    localStorage.setItem("access_token_portfolist", res.data.access_token);
    localStorage.setItem("refresh_token_portfolist", res.data.refresh_token);
  });
};

export const githubToken = (
  id: string,
  code: string | any,
  client_secret: string
) => {
  return axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${id}&client_secret=${client_secret}&code=${code}`
    )
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};
