export interface PortListType {
  date: string;
  field: [];
  introduce: string;
  id: number;
  thumbnail: string;
  title: string;
  total_comment: number;
  total_touching: number;
  touched: boolean;
  user: {
    user_id: number;
    name: string;
    profile_img: string | null;
  };
}
