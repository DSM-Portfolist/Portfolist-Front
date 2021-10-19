import React, { useState } from "react";
import * as S from "../../../../util/css/mypage/mypage/mypageModify/style";
import PasswordChangeBox from "./PasswordChangeBox";
import { ModalButtonWrapper } from "../../../../util/css/mypage/mypage/mypageModify/style";

interface Props {
  modal: boolean;
  setModal: any;
}

const SecessionModal = (props: Props) => {
  const { modal, setModal } = props;
  return (
    <>
      <S.ModalWrapper modal={modal}>
        <S.ModalBox>
          <h1>회원 탈퇴</h1>
          <p>portfolist 를 탈퇴하시면 </p>
          <p>이전에 활동했던 기록들은 복구가 불가능합니다.</p>
          <div className="passwordInputWrapper">
            <span>비밀번호</span>
            <input type="password" />
          </div>
          <ModalButtonWrapper>
            <button
              type="button"
              onClick={() => {
                setModal(false);
              }}
            >
              취소
            </button>
            <input type="submit" value="탈퇴" />
          </ModalButtonWrapper>
        </S.ModalBox>
      </S.ModalWrapper>
    </>
  );
};

export default SecessionModal;
