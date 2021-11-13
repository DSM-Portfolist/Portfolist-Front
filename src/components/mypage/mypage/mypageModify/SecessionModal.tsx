import React from "react";
import { ToastError, ToastSuccess } from "../../../../hook/toastHook";
import { deleteUser } from "../../../../util/api/mainpage";
import * as S from "../../../../util/css/mypage/mypage/mypageModify/style";
import { ModalButtonWrapper } from "../../../../util/css/mypage/mypage/mypageModify/style";

interface Props {
  modal: boolean;
  setModal: any;
}

const SecessionModal = (props: Props) => {
  const { modal, setModal } = props;

  const deleteUserHandler = () => {
    try {
      deleteUser();
      ToastSuccess("회원 탈퇴에 성공하셨습니다.");
    } catch (e) {
      ToastError("회원 탈퇴에 실패하셨습니다.");
      throw new Error("회원 탈퇴에 실패하셨습니다.");
    }
  };

  return (
    <>
      <S.ModalWrapper modal={modal}>
        <S.ModalBox>
          <h1>회원 탈퇴</h1>
          <p>portfolist 를 탈퇴하시면 </p>
          <p>이전에 활동했던 기록들은 복구가 불가능합니다.</p>
          <ModalButtonWrapper>
            <button
              type="button"
              onClick={() => {
                setModal(false);
              }}
            >
              취소
            </button>
            <input type="submit" value="탈퇴" onClick={deleteUserHandler} />
          </ModalButtonWrapper>
        </S.ModalBox>
      </S.ModalWrapper>
    </>
  );
};

export default SecessionModal;
