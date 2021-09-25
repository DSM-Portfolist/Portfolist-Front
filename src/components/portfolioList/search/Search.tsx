import React, { useState } from "react";
import { NoSelectedArrow } from "../../../util/assets";
import FieldSelectItem from "./FieldSelectItem";
import * as S from "./style";

const Search = () => {
  const [text, setText] = useState<string>("원하는 분야를 선택해주세요.");
  const [arrowSelect, setArrowSelect] = useState<boolean>(false);
  const [bottomLine, setBottomList] = useState<boolean>(false);

  return (
    <S.SearchWrapper>
      <S.FieldSelectWrapper arrowSelect={arrowSelect}>
        <span>분야</span>
        <div className="field-select">
          <div
            className="categoy_wrap"
            onClick={() => setArrowSelect(!arrowSelect)}
          >
            <p>{text}</p>
            <S.ArrowImg
              src={NoSelectedArrow}
              alt="화살표 상태"
              style={
                arrowSelect
                  ? { transform: "rotate(180deg)" }
                  : { transform: "rotate(0deg)" }
              }
            />
          </div>
          <FieldSelectItem arrowSelect={arrowSelect} setText={setText} />
        </div>
      </S.FieldSelectWrapper>
      <S.FieldWrapper></S.FieldWrapper>
    </S.SearchWrapper>
  );
};

export default Search;