import axios from "axios";
import { header, MAINURL } from "..";

export const postComment = async (content: string) => {
  return await axios.post(
    `${MAINURL}/comment/11`,
    { content: content },
    { headers: header }
  );
};

export const deleteComment = async (id: number) => {
  return await axios.delete(`${MAINURL}/comment/${id}`, { headers: header });
};
