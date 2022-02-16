import styled from "@emotion/styled";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import { ToastError, ToastSuccess } from "../../../hook/toastHook";
import { commentDeleteWarning_atom } from "../../../modules/atom/portfolio/comment";
import { deleteComment } from "../../../util/api/portfolio/comment";
import { getUser } from "../../../util/api/user/info";
import { mainColor } from "../../../util/css/color/color";

const CommentDeleteWarningModal = () => {
  const queryClient = useQueryClient();
  const [commentInfo, setCommentInfo] = useRecoilState(
    commentDeleteWarning_atom
  );

  const closeBtnClickHandle = () => {
    setCommentInfo({
      ...commentInfo,
      isOpen: false,
    });
  };

  const deleteBtnClickHandle = () => {
    deleteComments();
  };

  const { data: user } = useQuery("user", () => getUser());

  const { mutate: deleteComments } = useMutation(
    () => deleteComment(Number(commentInfo.id)),
    {
      onSuccess: () => {
        ToastSuccess("댓글이 삭제되었습니다.");
        setCommentInfo({ ...commentInfo, isOpen: false });

        queryClient.invalidateQueries("comment");
      },
      onError: () => {
        ToastError("댓글 삭제 요청에 실패했습니다.");
      },
    }
  );

  return (
    <CommentModalContainer isOpen={commentInfo.isOpen}>
      <CommentModal>
        <div>
          <h1>{user?.data?.name}님,</h1>
          <p>정말로 댓글을 삭제 하시겠습니까?</p>
        </div>
        <div className="button_wrap">
          <button className="close_btn" onClick={closeBtnClickHandle}>
            취소
          </button>
          <button className="delete_btn" onClick={deleteBtnClickHandle}>
            확인
          </button>
        </div>
      </CommentModal>
    </CommentModalContainer>
  );
};

const CommentModalContainer = styled.div<{ isOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  background: rgba(247, 247, 247, 0.64);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;
`;

const CommentModal = styled.div`
  padding: 30px;
  box-sizing: border-box;
  width: 420px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(150, 150, 150, 0.25);
  border-radius: 5px;

  h1 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
    margin-top: 20px;
  }

  .button_wrap {
    display: flex;
    justify-content: flex-end;

    & button {
      margin-left: 20px;
      border-radius: 5px;
      padding: 7px 25px;
      box-sizing: border-box;
      font-size: 16px;
      cursor: pointer;
      background: none;

      transition: all 0.3s;
    }

    .close_btn {
      color: #7c7c7c;

      :hover {
        background: #f3f3f3;
      }
    }

    .delete_btn {
      background: ${mainColor};
      color: white;

      :hover {
        background: #ff684b;
      }
    }
  }
`;

export default CommentDeleteWarningModal;
