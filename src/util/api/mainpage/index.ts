import axios from "axios";
import { MAINURL } from "../common";

export const getMonthPortfolio = () => {
  return axios(`${MAINURL}/portfolio/month`);
};

export const getRecentPortfolio = () => {
  return axios(`${MAINURL}/portfolio/recent`);
};
