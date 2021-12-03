import request from "../common/index";

const token = `Bearer ${localStorage.getItem("access_token_portfolist")}`;

export async function getComment(id: number) {
  return await request({
    url: `/comment/${id}`,
    method: "get",
    headers: { Authorization: token },
  });
}

export const postComment = (id: number, content: string) => {
  return request({
    url: `/comment/${id}`,
    method: "post",
    data: { content: content },
    headers: { Authorization: token },
  });
};

export const deleteComment = (id: number) => {
  return request({
    url: `/comment/${id}`,
    method: "delete",
    headers: { Authorization: token },
  });
};

export const postReComment = (id: number, content: string) => {
  return request({
    url: `/re-comment/${id}`,
    method: "post",
    data: { content: content },
    headers: { Authorization: token },
  });
};

export const deleteReComment = (id: number) => {
  return request({
    url: `/re-comment/${id}`,
    method: "delete",
    headers: { Authorization: token },
  });
};
