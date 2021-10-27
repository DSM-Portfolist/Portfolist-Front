import axios from "axios";
import { MAINURL, token } from "..";

export const getList = async () => {
  const { data } = await axios.get(
    `${MAINURL}/portfolio/list?page=1&size=5&field=WEB`,
    {
      headers: { Authorization: token },
    }
  );

  return data;
};
