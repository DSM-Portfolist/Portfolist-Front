/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import {
  column,
  center,
  portfolioItem,
  FieldWrapper,
  portfolioItemUnderBar,
  initA,
} from "../../../util/css/mypage/UserPage/style";
import { row } from "../../../util/css/signin/style";
import { MyPortfolioType } from "../../../util/interface/MyPage/myPortfolioType";

const portfolioItemImage =
  "https://media.vlpt.us/images/devfolio/post/dd4607f8-b6b3-4647-ba53-90d2d45f7d19/velog-thumbnail.png";
const baseProfileImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsp-8Rs9T1z7ob8zAKVb5TXQpGNUmVh08kw&usqp=CAU";

interface Props {
  isClickMyPortfolio?: boolean;
  isClickMyTouching?: boolean;
  portfolio?: MyPortfolioType;
}

const PortfolioList = ({
  isClickMyPortfolio,
  isClickMyTouching,
  portfolio,
}: Props) => {
  console.log(portfolio);

  //date문자열 짤라서 가공하는 함수
  function dateSplit(string: string) {
    let dateArray = string.split("-");
    let date = `${dateArray[0]}년 ${dateArray[1]}월 ${dateArray[2]}일`;
    return date;
  }

  return (
    <Link to="#" css={[initA]}>
      <div css={[portfolioItem, column]}>
        <img src={portfolioItemImage} alt="이미지" />
        <div css={[FieldWrapper, row]}>
          {portfolio?.field.map((field, index) => (
            <div key={index}>{field}</div>
          ))}
        </div>
        <h1>{portfolio?.title}</h1>
        <p id="content">{portfolio?.introduce}</p>
        <div css={[portfolioItemUnderBar, row]}>
          <div css={[center]}>
            <img src={baseProfileImage} alt=""></img>
            <p>{isClickMyPortfolio ? "나의 프로필" : `님 `}</p>
          </div>
          <div>
            <span>댓글 {portfolio?.comment}</span>
            <span>터칭 {portfolio?.touching}</span>
            <span>{dateSplit("2021-10-11")}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioList;
