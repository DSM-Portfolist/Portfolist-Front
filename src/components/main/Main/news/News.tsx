import NewsItem from "./NewsItem";
import * as S from "./style";

const News = () => {
  return (
    <>
      <div className="border-bottom">
        <S.NewsWrapper>
          <NewsItem title="portfolist 소식" />
          <NewsItem title="오늘 나의 소식" />
        </S.NewsWrapper>
      </div>
    </>
  );
};

export default News;
