/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { ToastSuccess } from "../../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ContentItem,
  ButtonWrapper,
  ChangePasswordWrraper,
} from "../../../../util/css/mypage/mypage/mypageModify/style";
import PasswordChangeBox from "./PasswordChangeBox";
import {
  PasswordTitle,
  PasswordType,
  PasswordData,
} from "../../../../util/interface/MyPage/infoChangeType";

const PasswordModify = () => {
  const [isClickPasswordButton, setIsClickPasswordButton] =
    useState<boolean>(false);
  const [passwordData, setPasswordData] = useState<PasswordData[]>([
    { password: "" },
    { password: "" },
    { password: "" },
  ]);
  const [passwordType, setPasswordType] = useState<PasswordType[]>([
    {
      id: 1,
      type: "password",
      visible: false,
    },
    {
      id: 2,
      type: "password",
      visible: false,
    },
    {
      id: 3,
      type: "password",
      visible: false,
    },
  ]);

  useEffect(() => {
    console.log(passwordData);
  }, [passwordData]);

  const submitHanddleEvent = (e: any) => {
    e.preventDefault();
    ToastSuccess("완료 버튼 전송");
  };

  const openButton = () => {
    //비밀번호 모달창 여는 버튼
    if (!isClickPasswordButton) {
      setIsClickPasswordButton(true);
      setTimeout(() => {
        window.scrollTo({ top: 400, behavior: "smooth" });
      }, 300);
    }
  };

  const closeButton = () => {
    //비밀번호 모달창 닫기 버튼
    if (isClickPasswordButton) {
      setIsClickPasswordButton(false);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    }
  };

  const handleOnChangeEvent = (e: any, id: number) => {
    const { value } = e.target;
    let newArr = passwordData.map((item: any, index) => {
      if (index + 1 === id) {
        return { password: value };
      }
      return item;
    });
    setPasswordData(newArr);
    console.log(id);
  };

  const handlePasswordType = (id: number) => {
    //매개변수에 id넣어주세요
    let i = 0;
    for (i = 0; i < 3; i++) {
      if (passwordType[i].id === id) {
        break;
      }
    }
    let newArr = passwordType.map((item: any, index) => {
      if (index === i) {
        if (item.visible === true) {
          return { id: i + 1, type: "password", visible: false };
        } else {
          return { id: i + 1, type: "text", visible: true };
        }
      }
      return item;
    });
    setPasswordType(newArr);
  };

  return (
    <>
      <ToastContainer />
      <div css={[ContentItem]}>
        <h1>비밀번호 변경</h1>
        <span onClick={openButton}>변경</span>
        <p>새로운 비밀번호로 변경 할 수 있습니다.</p>
      </div>
      <ChangePasswordWrraper
        isClickPasswordButton={isClickPasswordButton}
        onSubmit={submitHanddleEvent}
      >
        {PasswordTitle.map((PasswordTitle, index) => (
          <PasswordChangeBox
            title={PasswordTitle.title}
            passwordType={passwordType[index].type}
            visible={passwordType[index].visible}
            handlePasswordType={handlePasswordType}
            handleOnChangeEvent={handleOnChangeEvent}
            value={index + 1}
          />
        ))}
        <ButtonWrapper>
          <button type="button" onClick={closeButton}>
            취소
          </button>
          <input type="submit" value="완료" />
        </ButtonWrapper>
      </ChangePasswordWrraper>
    </>
  );
};

export default PasswordModify;