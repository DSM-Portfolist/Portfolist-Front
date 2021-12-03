import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ToastSuccess } from "../../../../hook/toastHook";
import { getFieldSelector } from "../../../../modules/atom/portfolio";
import {
  selectFieldList,
  selectFieldNum,
} from "../../../../modules/atom/portfolio/main";
import { useFieldValue } from "../../../../modules/atom/portfolio/search";
import { NoSelectedArrow, SelectedArrow } from "../../../../util/assets";
import { mainColor } from "../../../../util/css/color/color";
import { FieldType } from "../../../../util/interface/Sign/loginType";
import * as S from "./style";

const FilterItem = () => {
  const [text, setText] = useState<string>("");
  const [arrowSelect, setArrowSelect] = useState<boolean>(false);
  const field = useRecoilValue(getFieldSelector);
  const [useField, setUseField] = useRecoilState(useFieldValue);
  const [selectField, setSelectField] = useRecoilState(selectFieldList);
  const fieldNum = useRecoilValue(selectFieldNum);

  function UseFieldAdd(field: any) {
    try {
      if (selectField.length <= 2) {
        setUseField(useField?.concat(field));
        setSelectField(selectField?.concat({ id: fieldNum + 1 }));
        ToastSuccess("분야는 3개까지 선택 할 수 있습니다.");
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    try {
      if (selectField.length !== 1) {
        if (text === "ALL") {
          setSelectField(
            selectField?.filter((id: any) => id.id === selectFieldNum)
          );
        }
      }
    } catch (e) {
      console.log(e);
    }
  }, [selectField, setSelectField, text, useField]);

  return (
    <>
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
                setText("ALL");
                setArrowSelect(false);
              }}
            >
              ALL
            </li>
            {field.map((field: FieldType) => (
              <li
                key={field.id}
                onClick={() => {
                  setText(field.content);
                  UseFieldAdd(field.content);
                  setArrowSelect(false);
                }}
              >
                {field.content}
              </li>
            ))}
          </S.FieldSelectWrap>
        </div>
      </div>
    </>
  );
};

export default FilterItem;
