import { selector, selectorFamily } from "recoil";
import { getSearch } from "../../../util/api/portfolio/portfolio";
import { PortListType } from "../../../util/interface/portfolio/portListType";

/* export const getSearchPortfolio = selectorFamily<PortListType[], string>({
  key: "serarch/get",
  get: (query: string, type: string) => async () => {
    const lists = await getSearch(query, type);
    return lists;
  },
});
 */
