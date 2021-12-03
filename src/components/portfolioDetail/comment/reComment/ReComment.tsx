import React from "react";
import { useRecoilState } from "recoil";
import { ToastSuccess } from "../../../../hook/toastHook";
import { reCommentControl } from "../../../../modules/atom/portfolio/comment";
import { deleteReComment } from "../../../../util/api/portfolio/comment";
import { DefaultProfile } from "../../../../util/assets";
import { CommentType } from "../../../../util/interface/portfolio/commentType";
import * as S from "../style";

interface Props {
  comment: CommentType;
  getTest: () => void;
}

const ReComment = ({ comment, getTest }: Props) => {
  const [reComment, setReComment] = useRecoilState(reCommentControl);

  const CommentDelete = (id: number) => {
    deleteReComment(id)
      .then(() => {
        ToastSuccess("댓글이 삭제되었습니다.");
        getTest();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {comment?.re_comment_list?.map((rc) => (
        <>
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
              {rc?.mine ? (
                <span onClick={() => CommentDelete(rc.re_comment_id)}>
                  삭제
                </span>
              ) : (
                ""
              )}

              <span>신고</span>
            </S.Util>
          </S.ReComment>
          <S.Input
            reComment={reComment}
            type="text"
            placeholder="답글을 작성해 주세요"
          />
        </>
      ))}
    </>
  );
};

export default ReComment;
