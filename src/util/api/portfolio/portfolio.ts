import axios from "axios";
import request, { MAINURL } from "../common/index";

const token = `Bearer ${localStorage.getItem("access_token_portfolist")}`;

export function getPortfolioList(
  field: string[],
  sort: string,
  query: any,
  type: string,
  page: number
) {
  return request({
    url: `/portfolio/list?page=${page}&size=12&field=${
      field === undefined ? "" : field
    }&sort=date,${sort}&query=${query}&searchType=${type}`,
    method: "get",
    headers: { Authorization: token },
  });
}

export function getField() {
  return axios(`${MAINURL}/field`);
}

export function getPortfolio(id: number) {
  return request({
    url: `/portfolio/${id}`,
    method: "get",
  });
}

export function deletePortfolio(id: number) {
  return request({
    url: `/portfolio/${id}`,
    method: "delete",
  });
}
