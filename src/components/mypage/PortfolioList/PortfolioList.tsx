/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import {
  column,
  center,
  portfolioItem,
  FieldWrapper,
  portfolioItemUnderBar,
} from "../../../util/css/mypage/UserPage/style";
import { row } from "../../../util/css/signin/style";
import { MyPortfolioType } from "../../../util/interface/MyPage/myPortfolioType";

const baseProfileImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsp-8Rs9T1z7ob8zAKVb5TXQpGNUmVh08kw&usqp=CAU";

interface Props {
  isClickMyPortfolio?: boolean;
  isClickMyTouching?: boolean;
  portfolio?: MyPortfolioType;
}

const PortfolioList = ({ isClickMyPortfolio, portfolio }: Props) => {
  //date문자열 짤라서 가공하는 함수
  function dateSplit(string: any) {
    let dateArray = string?.split("-");
    let date = `${dateArray[0]}년 ${dateArray[1]}월 ${dateArray[2]}일`;
    return date;
  }

  return (
    <div css={[portfolioItem, column]}>
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
          <img
            src={
              portfolio?.user?.profile_img === null
                ? `${baseProfileImage}`
                : portfolio?.user?.profile_img
            }
            alt="프로필사진"
          ></img>
          <Link to={`/user-page/${portfolio?.user?.user_id}`}>
            {isClickMyPortfolio ? "나의 프로필" : `${portfolio?.user?.name}님 `}
          </Link>
        </div>
        <div>
          <span>댓글 {portfolio?.total_comment}</span>
          <span>터칭 {portfolio?.total_touching}</span>
          <span>{dateSplit(portfolio?.date)}</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
