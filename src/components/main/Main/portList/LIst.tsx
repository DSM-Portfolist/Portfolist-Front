import React from "react";
import { Arrow } from "../../../../util/assets";
import ListItem from "./ListItem";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import { recentPortfolioSelector } from "../../../../modules/atom/main";
import { recentPortfolioType } from "../../../../util/interface/main/portfolio";

const List = () => {
  const recentPorfolio = useRecoilValue(recentPortfolioSelector);

  return (
    <div className="border-bottom">
      <S.ListWrapper>
        <S.GoWrapper>
          <p>portfolio</p>
          <button>
            <span>Go</span>
            <img src={Arrow} alt="화살표" />
          </button>
        </S.GoWrapper>
        <S.ListItemWrapper>
          {recentPorfolio.map((list: recentPortfolioType, index: number) => (
            <ListItem
              key={index}
              title={list.title}
              content={list.introduce}
              id={list.portfolio_id}
            />
          ))}
        </S.ListItemWrapper>
      </S.ListWrapper>
    </div>
  );
};

export default List;
