import React from "react";
import { Flower } from "../../../../util/assets";
import { PortfolioType } from "../../../../util/interface/main/portfolioType";
import * as S from "./style";

interface Props {
  portfolio: PortfolioType;
}

const FieldItem = (field: any) => {
  console.log(field.field);
  return <S.FieldItemWrapper>{field.field}</S.FieldItemWrapper>;
};

const Title = ({ portfolio }: Props) => {
  const list: PortfolioType = portfolio.default;

  return (
    <S.TitleWrapper>
      <S.TitleInfo>
        <S.FieldWrapper>
          {list.field.map((field, index) => {
            return <FieldItem key={index} field={field} />;
          })}
        </S.FieldWrapper>
        <S.DateWrapper>
          <span>게시일 2020년 8월 9일</span>
          <div className="user-profile">
            <span>{list.user.name}</span>
            <img src={Flower} alt="유저 프로필 이미지" />
          </div>
        </S.DateWrapper>
      </S.TitleInfo>
      <S.HeadTitle>
        <span role="img">&#127802;</span>
        <span className="title">강은빈 (Kang Eun Bin)</span>
        <span className="sub-title">
          금처럼 반짝반짝 빛나게 될 강은빈입니다.
        </span>
      </S.HeadTitle>
    </S.TitleWrapper>
  );
};

export default Title;
