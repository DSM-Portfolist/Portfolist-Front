import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { Mutation } from "react-query/types/core/mutation";
import { MAINURL, token } from "..";

const postTouching = async (id: number) => {
  const { data } = await axios.post(
    `${MAINURL}/touching/${id}`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );

  return data;
};

export const useTouching = (id: number) => {
  return useMutation("touching", postTouching);
};
