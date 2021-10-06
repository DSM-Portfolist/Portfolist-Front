/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import {
  ContentItem,
  ChangePasswordWrraper,
} from "../../../../util/css/mypage/mypage/mypageModify/style";

const PasswordModify = () => {
  const [isClickPasswordButton, setIsClickPasswordButton] =
    useState<boolean>(false);
  const toggleButton = () => {
    if (isClickPasswordButton) {
      setIsClickPasswordButton(false);
    } else {
      setIsClickPasswordButton(true);
      setTimeout(() => {
        window.scrollTo({ top: 1555, behavior: "smooth" });
      }, 500);
    }
  };
  return (
    <>
      <div css={[ContentItem]}>
        <h1>비밀번호 변경</h1>
        <span onClick={toggleButton}>변경</span>
        <p>새로운 비밀번호로 변경 할 수 있습니다.</p>
      </div>
      <ChangePasswordWrraper
        isClickPasswordButton={isClickPasswordButton}
      ></ChangePasswordWrraper>
    </>
  );
};

export default PasswordModify;
