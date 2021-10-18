import { UserType } from "../main/userType";

export interface PortListType {
  id: number;
  url: string;
  field: [];
  title: string;
  introduce: string;
  touching: number;
  touched: boolean;
  user: UserType;
}
