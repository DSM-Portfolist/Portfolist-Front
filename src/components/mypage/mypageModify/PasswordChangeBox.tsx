import { CloseEye, OpenEye } from "../../../util/assets";
import {
  ChangePasswordItem,
  PasswordChangeWrapper,
} from "../../../util/css/mypage/mypage/mypageModify/style";

interface Props {
  title: string;
  passwordType: any;
  visible: any;
  value: number;
  passwordData: any;
  handleOnChangeEvent: (e: any, value: number) => void;
  handlePasswordType: (value: number) => void;
}

const PasswordChangeBox = (props: Props) => {
  const {
    title,
    passwordType,
    visible,
    value,
    passwordData,
    handleOnChangeEvent,
    handlePasswordType,
  } = props;
  return (
    <PasswordChangeWrapper>
      <ChangePasswordItem>
        <h1>{title}</h1>
        <input
          type={passwordType}
          onChange={(e) => {
            handleOnChangeEvent(e, value);
          }}
          value={passwordData}
        />
        <img
          onClick={() => {
            handlePasswordType(value);
          }}
          src={visible ? OpenEye : CloseEye}
          alt=""
        />
      </ChangePasswordItem>
      {value === 2 ? <span>비밀번호는 4글자 이상 입력해주세요.</span> : ""}
    </PasswordChangeWrapper>
  );
};

export default PasswordChangeBox;
