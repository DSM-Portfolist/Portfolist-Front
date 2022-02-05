import request from "../common/index";

const token = `Bearer ${localStorage.getItem("access_token_portfolist")}`;

export const portfolioModifySubmit = (data: any, portfolioId: string) => {
    return request({
      url: `/portfolio/${portfolioId}`,
      method: "put",
      data: data,
      headers: { Authorization: token },
    });
  };
  