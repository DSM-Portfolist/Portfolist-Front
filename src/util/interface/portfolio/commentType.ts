export interface CommentType {
  filter?: any;
  cdate: string;
  comment_content: string;
  comment_id: number;
  is_mine: boolean;
  name: string;
  profile_img: string | null;
  re_comment_list: ReCommentType[];
}

export interface ReCommentType {
  is_mine: boolean;
  name: string;
  profile_img: string | null;
  rc_date: string;
  re_comment_id: number;
  re_comment_content: string;
}
