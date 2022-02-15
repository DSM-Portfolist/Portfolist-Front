import { useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { ToastError, ToastSuccess } from "../../../../hook/toastHook";
import { commentReoprt } from "../../../../modules/atom/portfolio/comment";
import {
  deleteReComment,
  getReComment,
  postReComment,
} from "../../../../util/api/portfolio/comment";
import { DefaultProfile } from "../../../../util/assets";
import {
  CommentType,
  ReCommentType,
} from "../../../../util/interface/portfolio/commentType";
import * as S from "./style";

interface Props {
  comment: CommentType;
}

const ReComment = ({ comment }: Props) => {
  const queryClient = useQueryClient();
  const setReportCommentModal = useSetRecoilState(commentReoprt);
  const commentRef = useRef<null | any>(null);

  const { data: reCommentValue } = useQuery(
    ["recomment_value", comment.comment_id],
    () => getReComment(comment.comment_id),
    {
      cacheTime: Infinity,
      staleTime: Infinity,
      keepPreviousData: true,
      enabled: !!comment.comment_id,
    }
  );

  const { mutate: deleteReComments } = useMutation(
    (id: number) => deleteReComment(id),
    {
      onSuccess: () => {
        ToastSuccess("답글이 삭제되었습니다.");

        queryClient.invalidateQueries("recomment_value");
      },
      onError: () => {
        ToastError("답글 삭제가 실패했습니다.");
      },
    }
  );

  const { mutate: postReComments } = useMutation(
    () => postReComment(comment.comment_id, commentRef.current.value),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("recomment_value");
        ToastSuccess("답글이 작성되었습니다.");

        commentRef.current.value = null;
      },
      onError: () => {
        ToastError("답글 작성에 실패했습니다.");
      },
    }
  );

  const reCommentAddHandler = (e: any) => {
    e.preventDefault();

    if (commentRef.current.value === "") {
      ToastError("답변할 내용을 입력해주세요.");
    } else {
      postReComments(commentRef.current.value);
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
                <span onClick={() => deleteReComments(rc.re_comment_id)}>
                  삭제
                </span>
              )}

              <span onClick={() => setReportCommentModal(true)}>신고</span>
            </S.Util>
          </S.ReComment>
        ))}
      </S.CommentInputWrap>
    </>
  );
};

export default ReComment;
