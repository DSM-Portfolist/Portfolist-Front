import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useMutation } from "react-query";
import CommentItem from "./CommentItem";
import * as S from "./style";
import { CommentType } from "../../../util/interface/portfolio/commentType";
import { PortfolioType } from "../../../util/interface/portfolio/portfolioDetailType";
import { ToastSuccess } from "../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { comment_List, portfoilo } from "../../../modules/atom/portfolio";
import { postComment } from "../../../util/api/portfolio/comment";

const Comment = () => {
  const portfolioValue = useRecoilValue<PortfolioType>(portfoilo);
  const [commentList, setCommentList] = useRecoilState(comment_List);
  const [commentContent, setCommentContent] = useState<string>("");

  const commentAdd = useMutation((content: string) => postComment(content));

  // 댓글 작성
  function CommentAdd(content: any) {
    commentAdd.mutate(content);
    ToastSuccess("댓글이 작성되었습니다.");
  }

  useEffect(() => {
    setCommentList(portfolioValue?.comment_list);
  }, [portfolioValue?.comment_list, setCommentList]);

  return (
    <>
      <ToastContainer />
      <S.CommentWrapper>
        <S.InputWrapper>
          <textarea
            placeholder="댓글을 입력해주세요"
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <button onClick={() => CommentAdd(commentContent)}>등록</button>
        </S.InputWrapper>
        <S.CommentList>
          <div className="comment-info">
            <span>댓글 {commentList?.length}개</span>
          </div>
        </S.CommentList>
        {commentList?.map((comment: CommentType) => (
          <CommentItem key={comment.comment_id} comment={comment} />
        ))}
        {commentList?.length === 0 ? <>작성된 댓글이 없습니다.</> : ""}
        {commentList?.length >= 5 ? <S.MoreButton>더보기</S.MoreButton> : ""}
      </S.CommentWrapper>
    </>
  );
};

export default Comment;
