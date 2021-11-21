import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getFieldSelector } from "../../../../modules/atom/portfolio";
import { useFieldValue } from "../../../../modules/atom/portfolio/search";
import { NoSelectedArrow, SelectedArrow } from "../../../../util/assets";
import { mainColor } from "../../../../util/css/color/color";
import { FieldType } from "../../../../util/interface/Sign/loginType";
import * as S from "./style";

const FilterItem = () => {
  const field = useRecoilValue(getFieldSelector);
  const [useField, setUseField] = useRecoilState(useFieldValue);
  const [text, setText] = useState<string>("");
  const [arrowSelect, setArrowSelect] = useState<boolean>(false);

  return (
    <div className="field-item-wrap">
      <div className="filed-wrap">
        <div
          className="category_wrap"
          style={{
            borderBottom:
              text === "" ? "2px solid #C4C4C4" : `2px solid ${mainColor}`,
          }}
          onClick={() => setArrowSelect(!arrowSelect)}
        >
          <p>{text}</p>
          <S.ArrowImg
            src={text === "" ? NoSelectedArrow : SelectedArrow}
            alt="화살표 상태"
            style={
              arrowSelect
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0deg)" }
            }
          />
        </div>
        <S.FieldSelectWrap arrowSelect={arrowSelect}>
          <li
            onClick={() => {
              setText("");
              setArrowSelect(false);
            }}
          >
            없음
          </li>
          {field.map((field: FieldType, index: number) => (
            <li
              key={index}
              onClick={() => {
                setText(field.content);
                setArrowSelect(false);
              }}
            >
              {field.content}
            </li>
          ))}
        </S.FieldSelectWrap>
      </div>
    </div>
  );
};

export default FilterItem;
