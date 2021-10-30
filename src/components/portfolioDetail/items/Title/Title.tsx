import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { portfoilo } from "../../../../modules/atom/portfolio/portfolioDetail";
import { Flower } from "../../../../util/assets";
import * as S from "./style";

const FieldItem = (field: any) => {
  return <S.FieldItemWrapper>{field.field}</S.FieldItemWrapper>;
};

const Title = () => {
  const portfolioValue = useRecoilValue(portfoilo);

  useEffect(() => {
    console.log(portfolioValue);
  }, [portfolioValue]);

  return (
    <S.TitleWrapper>
      <S.TitleInfo>
        <S.FieldWrapper>
          {portfolioValue?.field.map((field: string, index: number) => {
            return <FieldItem key={index} field={field} />;
          })}
        </S.FieldWrapper>
        <S.DateWrapper>
          <span>{portfolioValue?.create_date}</span>
          <div className="user-profile">
            <span>{portfolioValue?.name}</span>
            <img src={Flower} alt="유저 프로필 이미지" />
          </div>
        </S.DateWrapper>
      </S.TitleInfo>
      <S.HeadTitle>
        <span role="img">&#127802;</span>
        <span className="title">{portfolioValue?.title}</span>
        <span className="sub-title">{portfolioValue?.introduce}</span>
      </S.HeadTitle>
    </S.TitleWrapper>
  );
};

export default Title;
