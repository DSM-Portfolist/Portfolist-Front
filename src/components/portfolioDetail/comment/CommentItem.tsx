import { useState } from "react";
import { DefaultProfile } from "../../../util/assets";
import * as S from "./style";
import { CommentType } from "../../../util/interface/portfolio/commentType";
import ReComment from "./reComment/ReComment";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  commentDeleteWarning_atom,
  commentReoprt,
} from "../../../modules/atom/portfolio/comment";
import { Link } from "react-router-dom";

interface Props {
  comment: CommentType;
  portfolioId: number;
}

const CommentItem = ({ comment }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const setReportCommentModal = useSetRecoilState(commentReoprt);
  const [commentInfo, setCommentInfo] = useRecoilState(
    commentDeleteWarning_atom
  );

  const deleteCommentHandle = (id: number) => {
    setCommentInfo({
      ...commentInfo,
      id: id,
      isOpen: true,
      isRecomment: false,
      isComment: true,
    });
  };

  return (
    <S.CommentItemWrapper>
      <div className="comment">
        <S.Content toggle={toggle}>
          <img
            src={
              comment?.user?.profile_img === null || comment?.user === null
                ? `${DefaultProfile}`
                : comment?.user?.profile_img
            }
            alt="프로필 사진"
          />
          <div className="content">
            <Link
              to={`/user-page/${comment?.user?.user_id}`}
              className="user-name"
            >
              <strong>{comment?.user?.name}</strong>
              <div className="comment-date">
                <span>{comment?.cdate}</span>
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
            <span onClick={() => deleteCommentHandle(comment?.comment_id)}>
              삭제
            </span>
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
