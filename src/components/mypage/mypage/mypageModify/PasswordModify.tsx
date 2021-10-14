/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import {
  ContentItem,
  ChangePasswordWrraper,
  ChangePasswordItem,
} from "../../../../util/css/mypage/mypage/mypageModify/style";
import { OpenEye, CloseEye } from "../../../../util/assets";
import Test from "./PasswordChangeBox";
import { PasswordTitle, PasswordType } from "../../../../util/interface/MyPage/infoChangeType";

const PasswordModify = () => {
  const [isClickPasswordButton, setIsClickPasswordButton] =
    useState<boolean>(false);
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

  const handlePasswordType = (id: any) => {
    //매개변수에 id넣어주세요
    let i = 0;
    //passwordType배열 안에있는 id와 매개변수 id와 비교 해서 i로 저장
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
        <span onClick={openButton}>변경</span>
        <p>새로운 비밀번호로 변경 할 수 있습니다.</p>
      </div>
      <ChangePasswordWrraper isClickPasswordButton={isClickPasswordButton}>
        {PasswordTitle.map((PasswordTitle, index) => (
          <Test
            title={PasswordTitle.title}
            passwordType={passwordType[index].type}
            visible={passwordType[index].visible}
            handlePasswordType={handlePasswordType}
            value={index + 1}
          />
        ))}

        {/* <ChangePasswordItem>
          <h1>변경할 비밀번호</h1>
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
        </ChangePasswordItem> */}
        <button
          onClick={closeButton}
          style={{ width: "100px", height: "200px" }}
        ></button>
        <button></button>
      </ChangePasswordWrraper>
    </>
  );
};

export default PasswordModify;
