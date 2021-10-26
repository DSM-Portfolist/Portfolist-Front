import axios from "axios";
import { useQuery } from "react-query";
import { MAINURL, token } from "..";

const getList = async () => {
  const { data } = await axios.get(
    `${MAINURL}/portfolio/list?page=1&size=5&field=WEB`,
    {
      headers: { Authorization: token },
    }
  );

  return data;
};

export const useList = () => {
  return useQuery("lists", getList);
};

/* function unTouching(id: number) {
  return useMutation("unTouching", () =>
    axios.delete(`${MAINURL}/touching/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          "access_token_portfolist"
        )}`,
      },
    })
  );
}


const touching = useMutation("touching", () =>
    axios.post(
      `${MAINURL}/touching/${list.id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "access_token_portfolist"
          )}`,
        },
      }
    )
  );

  const unTouching = useMutation("touching", () =>
    axios.delete(`${MAINURL}/touching/${list.id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          "access_token_portfolist"
        )}`,
      },
    })
  ); */
