/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import {
  column,
  center,
  portfolioList,
  portfolioItem,
  FieldWrapper,
  portfolioItemUnderBar,
  initA,
} from "../../../util/css/mypage/UserPage/style";
import { row } from "../../../util/css/signin/style";
import { portfoliolistProps } from "../../../util/interface/MyPage/portfoliolistPropsType";
import { portfolioArr } from "../../../lib/export/data";

const portfolioItemImage =
  "https://media.vlpt.us/images/devfolio/post/dd4607f8-b6b3-4647-ba53-90d2d45f7d19/velog-thumbnail.png";
const baseProfileImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsp-8Rs9T1z7ob8zAKVb5TXQpGNUmVh08kw&usqp=CAU";

const PortfolioList = (props: portfoliolistProps) => {
  const { isClickMyPortfolio, isClickMyTouching } = props;
  
  //date문자열 짤라서 가공하는 함수
  function dateSplit(string: string): string {
    let dateArray = string.split("-");
    let date = `${dateArray[0]}년 ${dateArray[1]}월 ${dateArray[2]}일`;
    return date;
  }

  const portfolioArrMap = portfolioArr.length
    ? portfolioArr.map((portfolioArr, index) => {
        const {
          job,
          field,
          title,
          content,
          username,
          commment_num,
          touching_num,
          date,
        } = portfolioArr;
        return (
          <Link to="#" css={[initA]} key={index}>
            <div css={[portfolioItem, column]}>
              <img src={portfolioItemImage} alt="이미지" />
              <div css={[FieldWrapper, row]}>
                <div>{job}</div>
                <div>{field}</div>
              </div>
              <h1>{title}</h1>
              <p id="content">{content}</p>
              <div css={[portfolioItemUnderBar, row]}>
                <div css={[center]}>
                  <img src={baseProfileImage} alt=""></img>
                  <p>{isClickMyPortfolio ? "나의 프로필" : `${username}님 `}</p>
                </div>
                <div>
                  <span>댓글 {commment_num}</span>
                  <span>터칭 {touching_num}</span>
                  <span>{dateSplit(date)}</span>
                </div>
              </div>
            </div>
          </Link>
        );
      })
    : "불러오는중";
  return <div css={[portfolioList]}>{portfolioArrMap}</div>;
};

export default PortfolioList;
