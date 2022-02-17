import { UserType } from "../user";

export interface CommentType {
  filter?: any;
  cdate: string;
  comment_content: string;
  comment_id: number;
  mine: boolean;
  re_comment_list: ReCommentType[];
  user: UserType;
  re_comment_exist: boolean;
}

export interface ReCommentType {
  mine: boolean;
  rc_date: string;
  re_comment_content: string;
  re_comment_id: number;
  user: UserType;
}

export interface CommentDeleteWraningType {
  isOpen: boolean;
  id: number | null;
}
