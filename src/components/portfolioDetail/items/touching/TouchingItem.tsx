import React, { useLayoutEffect, useState } from "react";
import { useMutation } from "react-query";
import { useLocation } from "react-router";
import { useRecoilValue } from "recoil";
import { CountChangeHook } from "../../../../hook/countChangeHook";
import { getPortfolioSelecor } from "../../../../modules/atom/portfolio/portfolioDetail";
import {
  deleteTouching,
  postTouching,
} from "../../../../util/api/portfolio/useTouching";
import QueryString from "query-string";
import { BeforeTouching, Touching } from "../../../../util/assets";
import * as S from "./style";

const TouchingItem = () => {
  const location = useLocation();
  const queryData = QueryString.parse(location.search);
  const id: any = queryData.id;

  const portfolioValue = useRecoilValue(getPortfolioSelecor);
  const [touchingBoolean, setTouchingBoolean] = useState<boolean>(
    portfolioValue?.touched
  );
  const [count, setCount] = useState<number>(0);

  const touching = useMutation("touching", postTouching);
  const untouching = useMutation("untouching", deleteTouching);

  useLayoutEffect(() => {
    setCount(portfolioValue?.total_touching);
    setTouchingBoolean(portfolioValue?.touched);
  }, [portfolioValue?.total_touching, portfolioValue?.touched]);

  return (
    <S.Touching>
      <S.TouchingBox>
        <S.TouchingBack
          onClick={() => {
            setTouchingBoolean(!touchingBoolean);
            setCount(CountChangeHook(touchingBoolean, count));
            touchingBoolean ? untouching.mutate(id) : touching.mutate(id);
          }}
        >
          <img
            src={touchingBoolean ? `${Touching}` : `${BeforeTouching}`}
            alt="터칭하기"
          />
        </S.TouchingBack>
        <span>{count === 0 ? "0" : count}</span>
      </S.TouchingBox>
    </S.Touching>
  );
};

export default TouchingItem;
