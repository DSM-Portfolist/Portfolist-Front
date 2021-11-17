import request from "../index";

const token = `Bearer ${localStorage.getItem("access_token_portfolist")}`;

export function getPortfolioList(field: string[]) {
  return request({
    url: `/portfolio/list?page=0&size=5&field=${
      field === undefined ? "" : field
    }`,
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

export function deletePortfolio(id: number) {
  return request({
    url: `/portfolio/id`,
    method: "delete",
    headers: { Authorization: token },
  });
}
