import React, { useState } from "react";
import { NoSelectedArrow } from "../../../../util/assets";
import CategoryItem from "../category/CategoryItem";
import * as S from "./style";

const SecProgress = () => {
  const [btnColor, setBtnColor] = useState<boolean>(false);
  const [text, setText] = useState<string>("자신의 전공 분야를 선택해주세요");
  const [arrowSelect, setArrowSelect] = useState<boolean>(false);
  return (
    <>
      <S.SignBox btnColor={btnColor}>
        <p className="sub-title">분야는 최대 3개까지 선택할 수 있습니다. </p>
        <S.FieldSelectWrap>
          <span>분야</span>
          <div className="categoy_wrap">
            <p onClick={() => setArrowSelect(!arrowSelect)}>
              {text}
              <S.ArrowImg
                src={NoSelectedArrow}
                alt="화살표 상태"
                style={
                  arrowSelect
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
              />
            </p>
            <CategoryItem arrowSelect={arrowSelect} setText={setText} />
          </div>
        </S.FieldSelectWrap>
      </S.SignBox>
    </>
  );
};

export default SecProgress;
