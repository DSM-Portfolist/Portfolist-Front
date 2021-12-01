import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getPortfolioSelecor } from "../../../../modules/atom/portfolio/portfolioDetail/index";
import { deletePortfolio } from "../../../../util/api/portfolio/portfolio";
import { DefaultImage } from "../../../../util/assets";
import * as S from "./style";

const FieldItem = (field: any) => {
  return <S.FieldItemWrapper>{field.field}</S.FieldItemWrapper>;
};

const Title = ({ match }: any) => {
  const portfolioValue = useRecoilValue(getPortfolioSelecor);
  const userId = portfolioValue?.user?.user_id;

  return (
    <S.TitleWrapper>
      <S.TitleInfo>
        <S.FieldWrapper>
          {portfolioValue?.field?.map((field: string, index: number) => {
            return <FieldItem key={index} field={field} />;
          })}
        </S.FieldWrapper>
        <S.DateWrapper>
          {/* <span>{DateSplitHook(portfolioValue?.create_date)}</span> */}
          <Link to={`/user-page/${userId}`} className="user-profile">
            <span>{portfolioValue?.user?.name}</span>
            <img
              src={
                portfolioValue?.user?.profile_img === null
                  ? `${DefaultImage}`
                  : portfolioValue?.user?.profile_img
              }
              alt="유저 프로필 이미지"
            />
          </Link>
        </S.DateWrapper>
      </S.TitleInfo>
      {portfolioValue?.is_mine ? (
        <S.ModifyWrap>
          <button onClick={() => deletePortfolio(match.id)}>
            포트폴리오 수정
          </button>
          <button>포트폴리오 삭제</button>
        </S.ModifyWrap>
      ) : (
        ""
      )}

      <S.HeadTitle>
        <span className="title">{portfolioValue?.title}</span>
        <span className="sub-title">{portfolioValue?.introduce}</span>
      </S.HeadTitle>
    </S.TitleWrapper>
  );
};

export default Title;
