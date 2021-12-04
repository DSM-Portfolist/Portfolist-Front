import { useCallback, useLayoutEffect, useState } from "react";
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
  const [reCommentText, setReCommentText] = useState<string>("");
  const [reCommentList, setReCommentList] = useState<ReCommentType[]>([]);

  const reComment = useCallback(() => {
    getReComment(comment.comment_id).then((res) => {
      setReCommentList(res.data);
    });
  }, []);

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

  const reCommentAddHandler = (e: any) => {
    const { value } = e.target;
    setReCommentText(value);

    if (e.key === "Enter") {
      postReComment(comment.comment_id, reCommentText)
        .then(() => {
          ToastSuccess("답글이 작성되었습니다.");
          reComment();
        })
        .catch(() => ToastError("답글 작성에 실패했습니다."));
    }
  };

  useLayoutEffect(() => {
    reComment();
    console.log(reCommentList);
  }, []);

  return (
    <S.ReCommentWrap>
      <S.CommentInputWrap>
        <S.Input
          type="text"
          placeholder="답글을 작성해 주세요"
          onKeyPress={(e) => reCommentAddHandler(e)}
        />
      </S.CommentInputWrap>
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
              <div className="user-name">
                <strong>{rc.user.name}</strong>
                <div className="comment-date">
                  <span>{rc.rc_date}</span>
                </div>
              </div>
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
    </S.ReCommentWrap>
  );
};

export default ReComment;
