import axios from "axios";
import { MAINURL, header } from "..";

export const getList = async () => {
  const { data } = await axios.get(
    `${MAINURL}/portfolio/list?page=1&size=5&field=`,
    {
      headers: { header },
    }
  );

  return data;
};

export const getField = async () => {
  return await axios.get(`${MAINURL}/field`);
};

export const getPortfolist = async () => {
  return await axios.get(`${MAINURL}/portfolio/2`, {
    headers: { header },
  });
};
