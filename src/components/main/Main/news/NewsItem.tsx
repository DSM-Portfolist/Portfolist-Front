import react from "react";
import * as S from "./style";

interface NewsItemProps {
  title: string;
}

const NewsItem = ({ title }: NewsItemProps) => {
  return (
    <S.NewsItemWrapper>
      <S.Title>{title}</S.Title>
      <S.ContentBox></S.ContentBox>
    </S.NewsItemWrapper>
  );
};

export default NewsItem;
