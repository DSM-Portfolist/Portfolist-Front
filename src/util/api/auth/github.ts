import axios from "axios";

export const github = (data: any) => {
  return axios
    .post("/login/github", { data: data })
    .then((res) => {
      console.log(res);
      localStorage.setItem("access_token_portfolist", res.data.access_token);
      localStorage.setItem("refresh_token_portfolist", res.data.refresh_token);
    })
    .catch((e) => console.log(e));
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
