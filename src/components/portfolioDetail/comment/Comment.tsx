import { useRef } from "react";
import * as S from "./style";
import CommentItem from "./CommentItem";
import { CommentType } from "../../../util/interface/portfolio/commentType";
import { ToastError, ToastSuccess } from "../../../hook/toastHook";
import { getComment, postComment } from "../../../util/api/portfolio/comment";
import { useLocation } from "react-router";
import QueryString from "query-string";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { BarLoader } from "react-spinners";
import { mainColor } from "../../../util/css/color/color";
import CommentDeleteWarningModal from "./CommentDeleteWarning";

const Comment = () => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const commentRef = useRef<null | any>(null);

  const queryData = QueryString.parse(location.search);
  const id: any = queryData.id;

  const { data: comments, isLoading } = useQuery(
    ["comment", id],
    () => getComment(id),
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

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

  if (isLoading)
    return <BarLoader color={mainColor} height="4px" width="100px" />;

  const commentAddHandle = (e: any) => {
    e.preventDefault();

    if (commentRef.current.value === "") {
      ToastError("작성할 내용을 입력해주세요.");
    } else {
      postComments(commentRef.current.value);
    }
  };

  return (
    <>
      <CommentDeleteWarningModal />
      <S.CommentWrapper>
        <S.InputWrapper>
          <textarea placeholder="댓글을 입력해주세요" ref={commentRef} />
          <button onClick={(e) => commentAddHandle(e)}>등록</button>
        </S.InputWrapper>
        <S.CommentList>
          <div className="comment-info">
            <span>댓글 {comments?.data.comments.length}개</span>
          </div>
        </S.CommentList>
        {comments?.data?.comments?.length === 0 ? (
          <p className="no_comment">작성된 댓글이 없습니다.</p>
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
