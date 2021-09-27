import React, { useState } from "react";
import CommentItem from "./CommentItem";
import * as S from "./style";
import { comment } from "../dummy.json";
import { CommentType } from "../../../util/interface/main/commentType";

const Comment = () => {
  /* const [commentContent, setCommentContent] = useState<CommentType>({
    user: {
      c_user_id: 1,
      c_name: "강은빈",
      c_profile: "sdfsdf",
    },
    comment_id: 1,
    comment_content: "ㄴㅇㄹㄴㄹㄴㅇㄹ",
    c_date: "20201",
    re_comment: [
      {
        user: {
          rc_user_id: 1,
          rc_name: "강은빈",
          rc_profile: "djfdjkshflahd.com",
        },
        re_comment_id: 1,
        re_comment_content: "에라이",
        rc_date: "2021-09-26",
      },
    ],
  }); */
  const [commentContent, setCommentContent] = useState<string>("");
  const [commentList, setCommentList] = useState<CommentType[]>(comment);

  function CommentAdd(commentContent: any, e: any) {
    e.preventDefault();
    setCommentList(commentList.concat(commentContent));
    console.log(commentList);
  }

  function CommentDelete(id: number) {
    setCommentList(commentList.filter((c_id: any) => c_id.comment_id !== id));
  }

  function ReCommentDelete(c_id: number, re_id: number) {
    console.log(re_id);
    /* setCommentList(
      commentList.filter(
        (r_id: any) =>
          c_id.comment_id === re_id && r_id.re_comment.re_comment_id !== re_id
      )
    ); */
  }

  return (
    <>
      <S.CommentWrapper>
        <S.InputWrapper>
          <textarea
            placeholder="댓글을 입력해주세요"
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <button onClick={(e) => CommentAdd(commentContent, e)}>등록</button>
        </S.InputWrapper>
        <S.CommentList>
          <div className="comment-info">
            <span>댓글 {commentList.length}개</span>
          </div>
        </S.CommentList>
        {commentList.map((comment: CommentType) => (
          <CommentItem
            key={comment.comment_id}
            comment={comment}
            setCommentList={setCommentList}
            CommentDelete={CommentDelete}
            ReCommentDelete={ReCommentDelete}
          />
        ))}
        {commentList.length === 0 ? <>작성된 댓글이 없습니다.</> : ""}
        {commentList.length >= 5 ? <S.MoreButton>더보기</S.MoreButton> : ""}
      </S.CommentWrapper>
    </>
  );
};

export default Comment;
