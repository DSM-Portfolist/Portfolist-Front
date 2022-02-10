import axios from "axios";
import { MAINURL } from "../common";

const token = `Bearer ${localStorage.getItem("access_token_portfolist")}`;

export const postTouching = async (id: number) => {
  return await axios.post(
    `${MAINURL}/touching/${id}`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const deleteTouching = async (id: number) => {
  return await axios.delete(`${MAINURL}/touching/${id}`, {
    headers: {
      Authorization: token,
    },
  });
};
