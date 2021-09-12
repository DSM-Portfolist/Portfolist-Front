/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Logo, NoSelectedArrow } from "../../../util/assets";
import {
  baseBackground,
  center,
  inputWrapper,
  loginWrapper,
  signUpWrapper,
} from "../../../util/css/signin/LoginEmotion";
import ProgressBar from "./ProgressBar";
import CategoryItem from "./CategoryItem";
import * as S from "../../../util/css/signin/SignUpEmotion";

const SecProgress = () => {
  const [btnColor, setBtnColor] = useState<boolean>(false);
  const [text, setText] = useState<string>("자신의 전공 분야를 선택해주세요");
  const [arrowSelect, setArrowSelect] = useState<boolean>(false);

  return (
    <>
      <div css={[baseBackground, center]}>
        <form css={[loginWrapper, signUpWrapper]}>
          <img src={Logo} alt="Portfolist 로고" />
          <ProgressBar />
          <S.SignBox btnColor={btnColor} css={[inputWrapper]}>
            <p>분야는 최대 3개까지 선택할 수 있습니다. </p>
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
            <button>다음</button>
          </S.SignBox>
        </form>
      </div>
    </>
  );
};

export default SecProgress;
