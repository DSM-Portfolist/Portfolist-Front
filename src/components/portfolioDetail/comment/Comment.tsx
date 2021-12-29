import { useCallback, useLayoutEffect, useRef, useState } from "react";
import * as S from "./style";
import CommentItem from "./CommentItem";
import { CommentType } from "../../../util/interface/portfolio/commentType";
import { ToastError, ToastSuccess } from "../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getComment, postComment } from "../../../util/api/portfolio/comment";
import { useLocation } from "react-router";
import QueryString from "query-string";

const Comment = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [commentContent, setCommentContent] = useState<string>("");
  const commentRef = useRef(null);

  const location = useLocation();
  const queryData = QueryString.parse(location.search);
  const id: any = queryData.id;

  function submit(content: string, id: number, e: any) {
    e.preventDefault();

    if (commentRef) {
      postComment(id, content)
        .then(() => {
          ToastSuccess("댓글이 작성되었습니다.");
          setCommentContent("");
          getTest();
        })
        .catch((e) => {
          ToastError("댓글 작성에 실패했습니다.");
          setCommentContent("");
          console.log(e);
        });
    }
  }

  const getTest = useCallback(() => {
    getComment(id).then((res) => setComments(res.data.comments));
  }, []);

  useLayoutEffect(() => {
    getTest();
  }, []);

  return (
    <>
      <ToastContainer />
      <S.CommentWrapper>
        <S.InputWrapper>
          <textarea
            placeholder="댓글을 입력해주세요"
            onChange={(e) => setCommentContent(e.target.value)}
            value={commentContent}
            ref={commentRef}
          />
          <button onClick={(e) => submit(commentContent, id, e)}>등록</button>
        </S.InputWrapper>
        <S.CommentList>
          <div className="comment-info">
            <span>댓글 {comments?.length}개</span>
          </div>
        </S.CommentList>
        {comments?.length === 0 ? (
          <span className="no_comment">작성된 댓글이 없습니다.</span>
        ) : (
          <>
            {comments?.map((comment: CommentType, index: number) => (
              <CommentItem
                key={index}
                comment={comment}
                portfolioId={id}
                getTest={getTest}
              />
            ))}
          </>
        )}
      </S.CommentWrapper>
    </>
  );
};

export default Comment;
