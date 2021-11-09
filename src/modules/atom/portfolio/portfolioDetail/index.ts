import { atom, selector } from "recoil";
import { portfolioId } from "..";
import { getPortfolio } from "../../../../util/api/portfolio/portfolio";
import { PortfolioType } from "../../../../util/interface/portfolio/portfolioDetailType";

export const portfoilo = atom<PortfolioType>({
  key: "portfolioValue",
  default: {
    portfolio_id: 0,
    certificate_container_list: [
      {
        title: "",
        certificate_list: [""],
      },
    ],
    container_list: [
      {
        container_title: "",
        container_img: [""],
        container_text_list: [{ box_title: "", box_content: "" }],
      },
    ],
    create_date: "",
    field: [""],
    file: "",
    icon: "",
    introduce: "",
    is_mine: false,
    link: "",
    more_info_list: [{ name: "", content: "" }],
    name: "",
    profile_img: "",
    title: "",
    total_touching: 0,
    touched: false,
    user_id: 0,
  },
});

export const portField = atom<string[]>({
  key: "portField",
  default: [],
});

export const getPortfolioSelecor = selector<PortfolioType>({
  key: "portfolio/get",
  get: async ({ get }) => {
    const id = await get(portfolioId);
    const res = await getPortfolio(id);
    return res.data;
  },
});

/* export const getPortfolioSelecor = selectorFamily<PortfolioType, number>({
  key: "portfolio",
  get: (id: number) => async () => {
    const posts = await getPortfolio(id);
    return posts;
  },
}); */
