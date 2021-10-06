/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import {
  ContentItem,
  ChangePasswordWrraper,
  ChangePasswordItem,
} from "../../../../util/css/mypage/mypage/mypageModify/style";
import { OpenEye, CloseEye } from "../../../../util/assets";

const PasswordModify = () => {
  const [isClickPasswordButton, setIsClickPasswordButton] =
    useState<boolean>(false);
  const [passwordType, setPasswordType] = useState([
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

  const toggleButton = () => {
    //비밀번호 모달창 토글 버튼
    if (!isClickPasswordButton) {
      setIsClickPasswordButton(true);
      setTimeout(() => {
        window.scrollTo({ top: 1555, behavior: "smooth" });
      }, 500);
    }
  };

  const handlePasswordType = (id: any) => {
    let i = 0;
    //password 보이게 안보이게하는 함수
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
      <div css={[ContentItem]}>
        <h1>비밀번호 변경</h1>
        <span onClick={toggleButton}>변경</span>
        <p>새로운 비밀번호로 변경 할 수 있습니다.</p>
      </div>
      <ChangePasswordWrraper isClickPasswordButton={isClickPasswordButton}>
        <ChangePasswordItem>
          <h1>현재 비밀번호</h1>
          <input type={passwordType[0].type} />
          <img
            onClick={() => {
              handlePasswordType(1);
            }}
            src={passwordType[0].visible ? OpenEye : CloseEye}
            alt=""
          />
        </ChangePasswordItem>
        <ChangePasswordItem>
          <h1>변경할 비밀번호</h1>
          <input type={passwordType[1].type} />
          <img
            onClick={() => {
              handlePasswordType(2);
            }}
            src={passwordType[1].visible ? OpenEye : CloseEye}
            alt=""
          />
        </ChangePasswordItem>
        <ChangePasswordItem>
          <h1>변경할 비밀번호 재입력</h1>
          <input type={passwordType[2].type} />
          <img
            onClick={() => {
              handlePasswordType(3);
            }}
            src={passwordType[2].visible ? OpenEye : CloseEye}
            alt=""
          />
        </ChangePasswordItem>
        <ChangePasswordItem></ChangePasswordItem>
      </ChangePasswordWrraper>
    </>
  );
};

export default PasswordModify;
