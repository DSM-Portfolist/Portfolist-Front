export interface CommentType {
  filter?: any;
  user: CommentUser;
  comment_id: number;
  comment_content: string;
  c_date: string;
  re_comment: ReCommentType[];
}

export interface ReCommentType {
  user: ReCommentUser;
  re_comment_id: number;
  re_comment_content: string;
  rc_date: string;
}

export interface CommentUser {
  c_user_id: number;
  c_name: string;
  c_profile: string;
}

export interface ReCommentUser {
  rc_user_id: number;
  rc_name: string;
  rc_profile: string;
}
