import axios from "axios";
import { header, MAINURL } from "..";

export const getComment = async (id: number) => {
  return await axios(`${MAINURL}/comment/${id}`, { headers: header });
};

export const postComment = async (id: number, content: string) => {
  return await axios.post(
    `${MAINURL}/comment/${id}`,
    { content: content },
    { headers: header }
  );
};

export const deleteComment = async (id: number) => {
  return await axios.delete(`${MAINURL}/comment/${id}`, { headers: header });
};
