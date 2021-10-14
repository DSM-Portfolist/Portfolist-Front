import React from "react";
import { CloseEye, OpenEye } from "../../../../util/assets";
import { ChangePasswordItem } from "../../../../util/css/mypage/mypage/mypageModify/style";

interface Props {
  title: string;
  passwordType: any;
  visible: any;
  value: number;
  handlePasswordType: (value: number) => void;
}

const PasswordChangeBox = (props: Props) => {
  return (
    <div>
      <ChangePasswordItem>
        <h1>{props.title}</h1>
        <input type={props.passwordType} />
        <img
          onClick={() => {
            props.handlePasswordType(props.value);
          }}
          src={props.visible ? OpenEye : CloseEye}
          alt=""
        />
      </ChangePasswordItem>
    </div>
  );
};

export default PasswordChangeBox;
