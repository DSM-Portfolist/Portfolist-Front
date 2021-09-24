import React from "react";
import NoticeItem from "./notice/NoticeItem";
import * as S from "./style";

interface NewsItemProps {
  title: string;
}

const NewsItem = ({ title }: NewsItemProps) => {
  return (
    <S.NewsItemWrapper>
      <S.Title>{title}</S.Title>
      <S.ContentBox>
        <NoticeItem />
      </S.ContentBox>
    </S.NewsItemWrapper>
  );
};

export default NewsItem;
