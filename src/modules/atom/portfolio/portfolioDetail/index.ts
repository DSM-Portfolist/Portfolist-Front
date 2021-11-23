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
    user: {
      name: "",
      profile_img: "",
      user_id: 0,
    },
    title: "",
    total_touching: 0,
    touched: false,
  },
});

export const portField = atom<string[]>({
  key: "portField",
  default: [],
});

export const getPortfolioSelecor = selector<PortfolioType>({
  key: "portfolio/get",
  get: async ({ get }) => {
    try {
      const id = await get(portfolioId);
      const res = await getPortfolio(id);
      return res.data;
    } catch (e) {
      console.log();
    }
  },
});
/* export const getPortfolioSelecor = selectorFamily<PortfolioType, number>({
  key: "portfolio",
  get:
    (id: number) =>
    ({ get }) => {
      const atom = get(portfoilo(id));
      return atom;
    },
  set:
    (id: number) =>
    async ({ set }) => {
      const res = await getPortfolio(id);
      set(portfoilo(id), res.data);
    },
}); */
