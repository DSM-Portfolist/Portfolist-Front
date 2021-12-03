import { UserType } from "../user";

export interface CommentType {
  filter?: any;
  cdate: string;
  comment_content: string;
  comment_id: number;
  mine: boolean;
  re_comment_list: ReCommentType[];
  user: UserType;
}

export interface ReCommentType {
  mine: boolean;
  rc_date: string;
  re_comment_id: number;
  re_comment_content: string;
  user: UserType;
}
