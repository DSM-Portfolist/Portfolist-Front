// 마이페이지 유저 정보
export interface UserInfoType {
  field: string[];
  introduce: string;
  name: string;
  profile_img: string;
  github_user?: false;
}

export interface UserType {
  user_id: number;
  name: string;
  profile_img: string;
}
