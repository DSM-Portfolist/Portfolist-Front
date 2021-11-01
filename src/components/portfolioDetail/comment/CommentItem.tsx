import React from "react";
import { Profile } from "../../../util/assets";
import * as S from "./style";
import { CommentType } from "../../../util/interface/portfolio/commentType";
import { useMutation } from "react-query";
import { deleteComment } from "../../../util/api/portfolio/comment";

interface Props {
  comment: CommentType;
}

const CommentItem = ({ comment }: Props) => {
  const commentDelete = useMutation((id: number) => deleteComment(id));

  return (
    <S.CommentItemWrapper>
      <div className="comment">
        <S.Content>
          <img src={Profile} alt="프로필 사진" />
          <div className="content">
            <div className="user-name">
              <strong>{comment.name}</strong>
              <div className="comment-date">
                <span>{comment.cdate}</span>
              </div>
            </div>
            {comment?.comment_content === null ? (
              <p>삭제된 댓글 입니다.</p>
            ) : (
              <p>{comment?.comment_content}</p>
            )}
          </div>
        </S.Content>
        <S.Util>
          {comment?.is_mine ? (
            <span onClick={() => commentDelete.mutate(comment.comment_id)}>
              삭제
            </span>
          ) : (
            ""
          )}

          <span>신고</span>
        </S.Util>
      </div>
      {comment?.re_comment_list?.map((re_comment) => (
        <S.ReComment key={re_comment.re_comment_id}>
          <S.Content>
            <img src={Profile} alt="프로필 사진" />
            <div className="content">
              <div className="user-name">
                <strong>{re_comment.name}</strong>
                <div className="comment-date">
                  <span>{re_comment.rc_date}</span>
                </div>
              </div>
              <p>{re_comment.re_comment_content}</p>
            </div>
          </S.Content>
          <S.Util>
            {re_comment.is_mine ? <span>삭제</span> : ""}

            <span>신고</span>
          </S.Util>
        </S.ReComment>
      ))}
    </S.CommentItemWrapper>
  );
};

export default CommentItem;
