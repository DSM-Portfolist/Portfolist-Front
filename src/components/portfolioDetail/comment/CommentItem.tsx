import { useState } from "react";
import { DefaultProfile } from "../../../util/assets";
import * as S from "./style";
import { CommentType } from "../../../util/interface/portfolio/commentType";
import { deleteComment } from "../../../util/api/portfolio/comment";
import { ToastError, ToastSuccess } from "../../../hook/toastHook";
import ReComment from "./reComment/ReComment";
import { useSetRecoilState } from "recoil";
import { commentReoprt } from "../../../modules/atom/portfolio/comment";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";

interface Props {
  comment: CommentType;
  portfolioId: number;
}

const CommentItem = ({ comment }: Props) => {
  const queryClient = useQueryClient();
  const [toggle, setToggle] = useState<boolean>(false);
  const setReportCommentModal = useSetRecoilState(commentReoprt);

  const { mutate: deleteComments } = useMutation(
    (id: number) => deleteComment(id),
    {
      onSuccess: () => {
        ToastSuccess("댓글이 삭제되었습니다.");

        queryClient.invalidateQueries("comment");
      },
      onError: () => {
        ToastError("댓글 삭제 요청에 실패했습니다.");
      },
    }
  );

  return (
    <S.CommentItemWrapper>
      <div className="comment">
        <S.Content toggle={toggle}>
          <img
            src={
              comment.user.profile_img === null
                ? `${DefaultProfile}`
                : comment.user.profile_img
            }
            alt="프로필 사진"
          />
          <div className="content">
            <Link
              to={`/user-page/${comment.user.user_id}`}
              className="user-name"
            >
              <strong>{comment.user.name}</strong>
              <div className="comment-date">
                <span>{comment.cdate}</span>
              </div>
            </Link>
            {comment?.comment_content === null ? (
              <p className="comment-delete">삭제된 댓글 입니다.</p>
            ) : (
              <pre>{comment?.comment_content}</pre>
            )}
          </div>
        </S.Content>
        <S.Util>
          {comment?.mine && (
            <span onClick={() => deleteComments(comment.comment_id)}>삭제</span>
          )}
          <span onClick={() => setReportCommentModal(true)}>신고</span>
        </S.Util>
      </div>

      <button className="more_text" onClick={() => setToggle(!toggle)}>
        {toggle ? "- 답글 접기" : "+ 답글 달기"}
      </button>

      <S.ReCommentWrap toggle={toggle}>
        <ReComment comment={comment} />
      </S.ReCommentWrap>
    </S.CommentItemWrapper>
  );
};

export default CommentItem;
