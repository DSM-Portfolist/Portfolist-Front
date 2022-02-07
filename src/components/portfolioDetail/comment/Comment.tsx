import { useRef } from "react";
import * as S from "./style";
import CommentItem from "./CommentItem";
import { CommentType } from "../../../util/interface/portfolio/commentType";
import { ToastError, ToastSuccess } from "../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getComment, postComment } from "../../../util/api/portfolio/comment";
import { useLocation } from "react-router";
import QueryString from "query-string";
import { useMutation, useQuery, useQueryClient } from "react-query";

const Comment = () => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const commentRef = useRef<null | any>(null);

  const queryData = QueryString.parse(location.search);
  const id: any = queryData.id;

  const { data: comments } = useQuery(["comment", id], () => getComment(id));

  const { mutate: postComments } = useMutation(
    (content: string) => postComment(id, content),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("comment");
        ToastSuccess("댓글이 작성되었습니다.");

        commentRef.current.value = null;
      },
      onError: () => {
        ToastError("댓글 작성에 실패했습니다.");
      },
    }
  );

  return (
    <>
      <ToastContainer />
      <S.CommentWrapper>
        <S.InputWrapper>
          <textarea placeholder="댓글을 입력해주세요" ref={commentRef} />
          <button
            onClick={(e) => {
              e.preventDefault();
              postComments(commentRef.current.value);
            }}
          >
            등록
          </button>
        </S.InputWrapper>
        <S.CommentList>
          <div className="comment-info">
            <span>댓글 {comments?.data.comments.length}개</span>
          </div>
        </S.CommentList>
        {comments?.data?.comments?.length === 0 ? (
          <span className="no_comment">작성된 댓글이 없습니다.</span>
        ) : (
          <>
            {comments?.data.comments.map(
              (comment: CommentType, index: number) => (
                <CommentItem key={index} comment={comment} portfolioId={id} />
              )
            )}
          </>
        )}
      </S.CommentWrapper>
    </>
  );
};

export default Comment;
