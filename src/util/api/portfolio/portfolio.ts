import request from "../index";
import { token } from "..";

export function getPortfolioList() {
  return request({
    url: "/portfolio/list?page=0&size=5&field=",
    method: "get",
    headers: { Authorization: token },
  });
}

export function getField() {
  return request({
    url: "/field",
    method: "get",
  });
}

export function getPortfolio(id: number) {
  return request({
    url: `/portfolio/${id}`,
    method: "get",
    headers: { Authorization: token },
  });
}
