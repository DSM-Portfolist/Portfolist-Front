import axios from "axios";
import { MAINURL, token } from "..";

export async function getComment(id: number) {
  console.log(id);
  return await axios(`${MAINURL}/comment/${id}`, {
    headers: { Authorization: token },
  });
}

export const postComment = async (id: number, content: string) => {
  return await axios.post(
    `${MAINURL}/comment/${id}`,
    { content: content },
    { headers: { Authorization: token } }
  );
};

export const deleteComment = async (id: number) => {
  return await axios.delete(`${MAINURL}/comment/${id}`, {
    headers: { Authorization: token },
  });
};
