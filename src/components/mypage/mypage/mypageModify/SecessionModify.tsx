/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { ContentItem } from "../../../../util/css/mypage/mypage/mypageModify/style";

const SecessionModify = () => {
  const [isClickSecessionButton, setIsClickSecessionButton] =
    useState<boolean>(false);
  const toggleButton = () => {
    isClickSecessionButton
      ? setIsClickSecessionButton(false)
      : setIsClickSecessionButton(true);
  };
  return (
    <>
      <div css={[ContentItem]}>
        <h1>portfolist 탈퇴</h1>
        <span onClick={toggleButton}>탈퇴</span>
        <p>
          portfolist 를 탈퇴하시면 이전에 활동했던 기록들은 복구가 불가능합니다.
        </p>
      </div>
    </>
  );
};

export default SecessionModify;
