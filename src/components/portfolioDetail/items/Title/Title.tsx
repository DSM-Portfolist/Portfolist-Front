import React from "react";
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
          <span>2020년 8월 9일</span>
          <div className="user-profile">
            <span>{list.user}</span>
          </div>
        </S.DateWrapper>
      </S.TitleInfo>
    </S.TitleWrapper>
  );
};

export default Title;
