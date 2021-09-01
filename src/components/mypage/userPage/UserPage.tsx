/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import {
  myPageSection,
  column,
  profileBottom,
  baseBackground,
  profileHeader,
  profileImage,
  profileWrapper,
  sectionTitleWrapper,
  center,
  portfolioList,
  portfolioItem,
  FieldWrapper,
  portfolioItemUnderBar,
  initA,
} from "../../../util/css/mypage/UserPage/style";
import { row } from "../../../util/css/signin/style";

const UserPage = () => {
  const portfolioItemImage =
    "https://media.vlpt.us/images/devfolio/post/dd4607f8-b6b3-4647-ba53-90d2d45f7d19/velog-thumbnail.png";
  const baseProfileImage =
    "https://w.namu.la/s/2cd5110fc9e9e2f8c67f05fa5fb1d7f20957a29c80203d0c63864960640fd8b7d618ee394c9efb04d0da86512ea9a7b6a9adb7422ea2c82051286c31c975c3354433acbd0b85e8585186fe0456c76a7f9e2b8c770fb1f9d1e9de489c8797a3db";

  const portfolioArr = [
    {
      job: "학생",
      field: "백 엔드",
      title: "💖 침착맨",
      content: "트위치 방송 스트리머 침착맨 입니다!",
      username: "침착맨",
      commment_num: "7",
      touching_num: "6",
      date: "2021-08-25",
    },
    {
      job: "학생",
      field: "백 엔드",
      title: "💖 침착맨",
      content: "트위치 방송 스트리머 침착맨 입니다!",
      username: "침착맨",
      commment_num: "7",
      touching_num: "6",
      date: "2021-08-25",
    },
  ];

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
                  <p>{username}님</p>
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

  return (
    <div css={[baseBackground, column]}>
      <header></header>
      <section css={[myPageSection]}>
        <header css={profileHeader}>
          <img css={profileImage} alt="프로필 사진" src={baseProfileImage} />
          <div css={[column, profileWrapper]}>
            <h1>침착맨</h1>
            <p id="introduce">안녕하세요 저는 침착맨입니다.</p>
            <div css={[row, profileBottom]}>
              <h3>분야</h3>
              <p>프론트엔드</p>
              <h3>직업</h3>
              <p>학생</p>
            </div>
          </div>
        </header>
        <article>
          <div css={[center, sectionTitleWrapper]}>
            <span>침착맨</span>
            <span>님의 포트폴리오</span>
          </div>
          <div css={[portfolioList]}>{portfolioArrMap}</div>
        </article>
      </section>
    </div>
  );
};

UserPage.defaultProps = {
  portfolioArr: [],
};

export default UserPage;
