import { UserType } from "../user";

export interface MyPortfolioType {
  id: number;
  title: string;
  total_comment: number;
  total_touching: number;
  date: string | undefined;
  field: string[];
  icon: string;
  introduce: string;
  thumbnail: string | "";
  user?: UserType;
}

export interface MyTouchingPortfolioType extends MyPortfolioType {}
