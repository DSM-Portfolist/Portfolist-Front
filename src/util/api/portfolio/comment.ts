import request from "../common/index";

export async function getComment(id: number) {
  return await request({
    url: `/comment/${id}`,
    method: "get",
  });
}

export const postComment = (
  portfolioId: number,
  commentId: number | null,
  content: string
) => {
  return request({
    url: `/comment/${portfolioId}`,
    method: "post",
    data: { comment_id: commentId, content: content },
  });
};

export const deleteComment = (id: number) => {
  return request({
    url: `/comment/${id}`,
    method: "delete",
  });
};

export const getReComment = (id: number) => {
  return request({
    url: `/re-comment/${id}`,
  });
};
export const postReComment = (id: number, content: string) => {
  return request({
    url: `/re-comment/${id}`,
    method: "post",
    data: { content: content },
  });
};

export const deleteReComment = (id: number) => {
  return request({
    url: `/re-comment/${id}`,
    method: "delete",
  });
};
