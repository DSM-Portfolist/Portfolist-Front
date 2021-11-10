import { UserType } from "../user";

export interface MyPortfolioType {
  id: number;
  title: string;
  comment: number;
  date: string | undefined;
  field: string[];
  icon: string;
  introduce: string;
  touching: number;
  url: string;
  user?: UserType;
}

export interface MyTouchingPortfolioType {
  id: number;
  title: string;
  comment: number;
  date: string | undefined;
  field: string[];
  icon: string;
  introduce: string;
  touching: number;
  url: string;
  user: UserType;
}
