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

export interface UserType {
  user_id: number;
  name: string;
  profile_image: string;
}
