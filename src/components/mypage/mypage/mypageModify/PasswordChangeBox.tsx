import React from "react";
import { CloseEye, OpenEye } from "../../../../util/assets";
import {
  ChangePasswordItem,
  PasswordChangeWrapper,
} from "../../../../util/css/mypage/mypage/mypageModify/style";

interface Props {
  title: string;
  passwordType: any;
  visible: any;
  value: number;
  handleOnChangeEvent: (e: any, value: number) => void;
  handlePasswordType: (value: number) => void;
}

const PasswordChangeBox = (props: Props) => {
  return (
    <PasswordChangeWrapper>
      <ChangePasswordItem>
        <h1>{props.title}</h1>
        <input
          type={props.passwordType}
          onChange={(e) => {
            props.handleOnChangeEvent(e, props.value);
          }}
        />
        <img
          onClick={() => {
            props.handlePasswordType(props.value);
          }}
          src={props.visible ? OpenEye : CloseEye}
          alt=""
        />
      </ChangePasswordItem>
      {props.value == 2 ? <span>비밀번호는 4글자 이상 입력해주세요.</span> : ""}
    </PasswordChangeWrapper>
  );
};

export default PasswordChangeBox;
