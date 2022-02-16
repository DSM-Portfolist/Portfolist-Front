import { useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ToastError, ToastSuccess } from "../../../../hook/toastHook";
import {
  commentDeleteWarning_atom,
  commentReoprt,
} from "../../../../modules/atom/portfolio/comment";
import {
  getReComment,
  postComment,
} from "../../../../util/api/portfolio/comment";
import { DefaultProfile } from "../../../../util/assets";
import {
  CommentType,
  ReCommentType,
} from "../../../../util/interface/portfolio/commentType";
import * as S from "./style";

interface Props {
  comment: CommentType;
  portfolioId: number;
}

const ReComment = ({ comment, portfolioId }: Props) => {
  const queryClient = useQueryClient();
  const setReportCommentModal = useSetRecoilState(commentReoprt);
  const commentRef = useRef<null | any>(null);
  const [commentInfo, setCommentInfo] = useRecoilState(
    commentDeleteWarning_atom
  );

  const { data: reCommentValue } = useQuery(
    ["recomment_value", comment.comment_id],
    () => getReComment(comment.comment_id),
    {
      cacheTime: Infinity,
      staleTime: Infinity,
      keepPreviousData: true,
      enabled: comment.re_comment_exist && !!comment.comment_id,
    }
  );

  // 대댓글 작성
  const { mutate: postComments } = useMutation(
    () =>
      postComment(portfolioId, comment.comment_id, commentRef.current.value),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("recomment_value");
        ToastSuccess("댓글이 작성되었습니다.");

        commentRef.current.value = null;
      },
      onError: () => {
        ToastError("댓글 작성에 실패했습니다.");
      },
    }
  );

  const deleteCommentHandle = (id: number) => {
    setCommentInfo({
      ...commentInfo,
      id: id,
      isOpen: true,
    });
  };

  const reCommentAddHandler = (e: any) => {
    e.preventDefault();

    if (commentRef.current.value === "") {
      ToastError("답변할 내용을 입력해주세요.");
    } else {
      postComments(commentRef.current.value);
    }
  };

  return (
    <>
      <S.CommentInputWrap>
        <S.Input
          type="text"
          placeholder="답글을 작성해 주세요"
          ref={commentRef}
        />
        <button onClick={(e) => reCommentAddHandler(e)}>등록</button>

        {comment.re_comment_exist && (
          <>
            {reCommentValue?.data?.map((rc: ReCommentType) => (
              <S.ReComment key={rc.re_comment_id}>
                <S.Content>
                  <img
                    src={
                      rc?.user?.profile_img === null || rc?.user === null
                        ? `${DefaultProfile}`
                        : rc.user.profile_img
                    }
                    alt="프로필 사진"
                  />
                  <div className="content">
                    <Link
                      to={`/user-page/${rc.user.user_id}`}
                      className="user-name"
                    >
                      <strong>{rc.user.name}</strong>
                      <div className="comment-date">
                        <span>{rc.rc_date}</span>
                      </div>
                    </Link>
                    <pre>{rc.re_comment_content}</pre>
                  </div>
                </S.Content>
                <S.Util>
                  {rc?.mine && (
                    <span onClick={() => deleteCommentHandle(rc.re_comment_id)}>
                      삭제
                    </span>
                  )}

                  <span onClick={() => setReportCommentModal(true)}>신고</span>
                </S.Util>
              </S.ReComment>
            ))}
          </>
        )}
      </S.CommentInputWrap>
    </>
  );
};

export default ReComment;
