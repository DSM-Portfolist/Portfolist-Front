import { MoreInfoType } from "../portfolio/portfolioDetailType";

export interface PostType {
  user_id: number;
  name: string;
  profile_img: string;
  icon: string;
  title: string;
  introduce: string;
  field: number[];
  is_open: boolean;
  more_info: MoreInfoType[];
}

