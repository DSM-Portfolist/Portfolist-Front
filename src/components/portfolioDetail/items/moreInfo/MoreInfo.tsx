import React from "react";
import * as S from "./style";

const MoreInfo = () => {
  return (
    <S.MoreInfoWrapper>
      <input placeholder="자신의 추가 정보를 입력해주세요" />
      <div className="more-wrapper">
        <S.InfoItem />
      </div>
    </S.MoreInfoWrapper>
  );
};

export default MoreInfo;
