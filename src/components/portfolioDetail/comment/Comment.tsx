import React from "react";
import CommentItem from "./CommentItem";
import * as S from "./style";
import { comment } from "../dummy.json";

const Comment = () => {
  return (
    <>
      <S.CommentWrapper>
        <S.InputWrapper>
          <textarea placeholder="댓글을 입력해주세요" />
          <button>등록</button>
        </S.InputWrapper>
        <S.CommentList>
          <div className="comment-info">
            <span>댓글 2개</span>
          </div>
        </S.CommentList>
        {/*  {comment.map((comment) => (
          <CommentItem comment={comment} />
        ))} */}
        {comment.length >= 5 ? <S.MoreButton>더보기</S.MoreButton> : ""}
      </S.CommentWrapper>
    </>
  );
};

export default Comment;
