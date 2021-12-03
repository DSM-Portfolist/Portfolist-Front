/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import { DateSplitHook } from "../../../hook/dateSplitHook";
import { ProfileImage } from "../../../hook/profileImg";
import {
  column,
  center,
  portfolioItem,
  FieldWrapper,
  portfolioItemUnderBar,
} from "../../../util/css/mypage/UserPage/style";
import { row } from "../../../util/css/signin/style";
import { MyPortfolioType } from "../../../util/interface/MyPage/myPortfolioType";

interface Props {
  isClickMyPortfolio?: boolean;
  isClickMyTouching?: boolean;
  portfolio?: MyPortfolioType;
  profileimg: string | undefined;
}

const PortfolioList = ({
  isClickMyPortfolio,
  portfolio,
  profileimg,
}: Props) => {
  const fieldList = () => {
    portfolio?.field.map((field, index) => <span key={index}>{field}</span>);
  };

  return (
    <Link to={`/portfolio?id=${portfolio?.id}`} css={[portfolioItem, column]}>
      <img src={portfolio?.thumbnail} alt="이미지" />
      <div css={[FieldWrapper, row]}>{fieldList}</div>
      <h1>{portfolio?.title}</h1>
      <p id="content">{portfolio?.introduce}</p>
      <div css={[portfolioItemUnderBar, row]}>
        <div css={[center]}>
          <img src={ProfileImage(profileimg)} alt="프로필사진"></img>
          <div>
            {isClickMyPortfolio ? "나의 프로필" : `${portfolio?.user?.name}님 `}
          </div>
        </div>
        <div>
          <span>댓글 {portfolio?.total_comment}</span>
          <span>터칭 {portfolio?.total_touching}</span>
          <span>{DateSplitHook(portfolio?.date)}</span>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioList;
