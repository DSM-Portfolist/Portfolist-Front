import request from "../index";

export const github = async (data: string) => {
  return await request({
    url: "/login/github",
    method: "post",
    data: { github_token: data },
  });
};
