import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import * as S from "./style";
import CommentItem from "./CommentItem";
import { CommentType } from "../../../util/interface/portfolio/commentType";
import { ToastSuccess } from "../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getComment, postComment } from "../../../util/api/portfolio/comment";
import { commentList } from "../../../modules/atom/portfolio/comment";

interface Props {
  id?: number;
}

const Comment = ({ id }: Props) => {
  const [comments, setComments] = useRecoilState(commentList);
  const [commentContent, setCommentContent] = useState<string>("");

  // 댓글 작성
  function CommentAdd(content: any, id: number) {
    postComment(id, content);
    getComment(id).then((res) => setComments(res?.data.comments));
    ToastSuccess("댓글이 작성되었습니다.");
  }

  /*   useEffect(() => {
    getComment(id).then((res) => setComments(res?.data.comments));
  }, [id, setComments]); */

  return (
    <>
      <ToastContainer />
      {/*   <S.CommentWrapper>
        <S.InputWrapper>
          <textarea
            placeholder="댓글을 입력해주세요"
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <button onClick={() => CommentAdd(commentContent, id)}>등록</button>
        </S.InputWrapper>
        <S.CommentList>
          <div className="comment-info">
            <span>댓글 {comments?.length}개</span>
          </div>
        </S.CommentList>
        {comments?.map((comment: CommentType) => (
          <CommentItem key={comment.comment_id} comment={comment} />
        ))}
        {comments?.length === 0 ? <>작성된 댓글이 없습니다.</> : ""}
        {comments?.length >= 5 ? <S.MoreButton>더보기</S.MoreButton> : ""}
      </S.CommentWrapper> */}
    </>
  );
};

export default Comment;
