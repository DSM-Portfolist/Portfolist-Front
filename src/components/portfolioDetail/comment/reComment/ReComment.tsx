import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ToastError, ToastSuccess } from "../../../../hook/toastHook";
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
  const [reCommentList, setReCommentList] = useState<ReCommentType[]>([]);
  const [reCommentText, setReCommentText] = useState<string>("");
  const commentRef = useRef(null);

  const reCommentDeleteHandler = (id: number) => {
    deleteReComment(id)
      .then(() => {
        ToastSuccess("답글이 삭제되었습니다.");
        reComment();
      })
      .catch((e) => {
        ToastError("답글 삭제가 실패했습니다.");
        console.log(e);
      });
  };

  const reCommentAddHandler = (e: any, id: number, value: string) => {
    e.preventDefault();

    if (commentRef) {
      postReComment(id, value)
        .then(() => {
          ToastSuccess("답글이 작성되었습니다.");
          setReCommentText("");
          reComment();
        })
        .catch(() => ToastError("답글 작성에 실패했습니다."));
    }
  };

  const reComment = useCallback(() => {
    getReComment(comment.comment_id).then((res) => setReCommentList(res.data));
  }, []);

  useLayoutEffect(() => {
    reComment();
  }, []);

  return (
    <>
      <S.CommentInputWrap>
        <S.Input
          type="text"
          placeholder="답글을 작성해 주세요"
          onChange={(e) => setReCommentText(e.target.value)}
          value={reCommentText}
          ref={commentRef}
        />
        <button
          onClick={(e) =>
            reCommentAddHandler(e, comment.comment_id, reCommentText)
          }
        >
          등록
        </button>

        {reCommentList?.map((rc) => (
          <S.ReComment key={rc.re_comment_id}>
            <S.Content>
              <img
                src={
                  rc?.user?.profile_img === null
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
                <span onClick={() => reCommentDeleteHandler(rc.re_comment_id)}>
                  삭제
                </span>
              )}

              <span>신고</span>
            </S.Util>
          </S.ReComment>
        ))}
      </S.CommentInputWrap>
    </>
  );
};

export default ReComment;
