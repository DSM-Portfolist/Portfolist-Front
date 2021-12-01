import React from "react";
import { DefaultProfile } from "../../../util/assets";
import * as S from "./style";
import { CommentType } from "../../../util/interface/portfolio/commentType";
import { deleteComment } from "../../../util/api/portfolio/comment";
import { ToastSuccess } from "../../../hook/toastHook";
import ReComment from "./ReComment";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  commentReoprt,
  reCommentControl,
} from "../../../modules/atom/portfolio/comment";

interface Props {
  comment: CommentType;
  portfolioId: number;
  getTest: () => void;
}

const CommentItem = ({ comment, getTest }: Props) => {
  const [reComment, setReComment] = useRecoilState(reCommentControl);
  const setReportCommentModal = useSetRecoilState(commentReoprt);

  const CommentDelete = (id: number) => {
    deleteComment(id)
      .then(() => {
        ToastSuccess("댓글이 삭제되었습니다.");
        getTest();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <S.CommentItemWrapper>
      <div className="comment">
        <S.Content reComment={reComment}>
          <img
            src={
              comment.user.profile_img === null
                ? `${DefaultProfile}`
                : comment.user.profile_img
            }
            alt="프로필 사진"
          />
          <div className="content">
            <div className="user-name">
              <strong>{comment.user.name}</strong>
              <div className="comment-date">
                <span>{comment.cdate}</span>
              </div>
            </div>
            {comment?.comment_content === null ? (
              <p>삭제된 댓글 입니다.</p>
            ) : (
              <pre>{comment?.comment_content}</pre>
            )}
          </div>
        </S.Content>
        <S.Util>
          {comment?.mine ? (
            <span onClick={() => CommentDelete(comment.comment_id)}>삭제</span>
          ) : (
            ""
          )}

          <span onClick={() => setReportCommentModal(true)}>신고</span>
        </S.Util>
      </div>

      <ReComment comment={comment} getTest={getTest} />
    </S.CommentItemWrapper>
  );
};

export default CommentItem;
