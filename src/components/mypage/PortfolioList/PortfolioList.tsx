/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import { ProfileImage } from "../../../hook/profileImg";
import { portfoilo } from "../../../modules/atom/portfolio/portfolioDetail";
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
  function DateSplitHook(string: any) {
    const dateArray = string?.split("-");
    console.log(dateArray);
    let date = `${dateArray[0]}년 ${dateArray[1]}월 ${dateArray[2]}일`;

    return date;
  }

  return (
    <Link to={`/portfolio?id=${portfolio?.id}`} css={[portfolioItem, column]}>
      <img src={portfolio?.url} alt="이미지" />
      <div css={[FieldWrapper, row]}>
        {portfolio?.field?.map((field, index) => (
          <span key={index}>{field}</span>
        ))}
      </div>
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
