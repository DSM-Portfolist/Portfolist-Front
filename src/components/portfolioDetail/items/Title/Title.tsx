import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { DateSplitHook } from "../../../../hook/dateSplitHook";
import { ToastError, ToastSuccess } from "../../../../hook/toastHook";
import { getPortfolioSelecor } from "../../../../modules/atom/portfolio/portfolioDetail/index";
import { deletePortfolio } from "../../../../util/api/portfolio/portfolio";
import { DefaultImage } from "../../../../util/assets";
import * as S from "./style";

const FieldItem = (field: any) => {
  return <S.FieldItemWrapper>{field.field}</S.FieldItemWrapper>;
};

const Title = () => {
  const portfolioValue = useRecoilValue(getPortfolioSelecor);
  const userId = portfolioValue?.user?.user_id;
  const { push } = useHistory();

  console.log(portfolioValue);

  function deletePortfolioHandler(id: number) {
    try {
      deletePortfolio(id);
      ToastSuccess("포트폴리오가 삭제되었습니다.");
      setTimeout(() => {
        push("/");
      }, 1500);
    } catch (e) {
      ToastError("포트폴리오 삭제에 실패하였습니다.");
      console.log(e);
    }
  }

  return (
    <S.TitleWrapper>
      <S.TitleInfo>
        <S.FieldWrapper>
          {portfolioValue?.field?.map((field: string, index: number) => {
            return <FieldItem key={index} field={field} />;
          })}
        </S.FieldWrapper>
        <S.DateWrapper>
          <span>{DateSplitHook(portfolioValue?.create_date)}</span>
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
      {portfolioValue?.mine ? (
        <S.ModifyWrap>
          <Link
            to={{
              pathname: "/portfolio-modify",
              state: { portfolioID: portfolioValue.portfolio_id },
            }}
          >
            <button>포트폴리오 수정</button>
          </Link>
          <button
            onClick={() => deletePortfolioHandler(portfolioValue?.portfolio_id)}
          >
            포트폴리오 삭제
          </button>
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
