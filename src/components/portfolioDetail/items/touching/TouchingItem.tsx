import React, { useState } from "react";
import { useMutation } from "react-query";
import { useRecoilValue } from "recoil";
import { CountChangeHook } from "../../../../hook/countChangeHook";
import { getPortfolioSelecor } from "../../../../modules/atom/portfolio/portfolioDetail";
import {
  deleteTouching,
  postTouching,
} from "../../../../util/api/portfolio/useTouching";
import { BeforeTouching, Touching } from "../../../../util/assets";
import * as S from "./style";

const TouchingItem = () => {
  const portfolioValue = useRecoilValue(getPortfolioSelecor);
  const [touchingBoolean, setTouchingBoolean] = useState<boolean>(
    portfolioValue.touched
  );
  const [count, setCount] = useState<number>(portfolioValue.total_touching);

  const touching = useMutation("touching", postTouching);
  const untouching = useMutation("untouching", deleteTouching);

  return (
    <S.Touching>
      <S.TouchingBox>
        <S.TouchingBack
          onClick={() => {
            setTouchingBoolean(!touchingBoolean);
            setCount(CountChangeHook(touchingBoolean, count));
            touchingBoolean
              ? untouching.mutate(portfolioValue.portfolio_id)
              : touching.mutate(portfolioValue.portfolio_id);
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
