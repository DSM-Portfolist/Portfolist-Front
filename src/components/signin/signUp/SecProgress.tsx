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
import * as S from "../../../util/css/signin/SignUpEmotion";
import ProgressBar from "./ProgressBar";
import CategoryItem from "./CategoryItem";

const SecProgress = () => {
  const [text, setText] = useState<string>("자신의 전공 분야를 선택해주세요");
  const [arrowSelect, setArrowSelect] = useState<boolean>(false);
  return (
    <>
      <div css={[baseBackground, center]}>
        <form css={[loginWrapper, signUpWrapper]}>
          <img src={Logo} alt="Portfolist 로고" />
          <ProgressBar />
          <div css={[inputWrapper]}>
            <S.FieldSelectWrap>
              <span>분야</span>
              <div className="categoy_wrap">
                <p>
                  {text}
                  <S.ArrowImg
                    src={NoSelectedArrow}
                    alt="화살표 상태"
                    style={
                      arrowSelect
                        ? { transform: "rotate(180deg)" }
                        : { transform: "rotate(0deg)" }
                    }
                    onClick={() => setArrowSelect(!arrowSelect)}
                  />
                </p>
                <CategoryItem arrowSelect={arrowSelect} setText={setText} />
              </div>
            </S.FieldSelectWrap>
          </div>
        </form>
      </div>
    </>
  );
};

export default SecProgress;
