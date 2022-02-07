import { useEffect, useLayoutEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  selectFieldList,
  selectFieldNum,
} from "../../../../modules/atom/portfolio/main";
import { useFieldValue } from "../../../../modules/atom/portfolio/search";
import { getField } from "../../../../util/api/portfolio/portfolio";
import { NoSelectedArrow, SelectedArrow } from "../../../../util/assets";
import { mainColor } from "../../../../util/css/color/color";
import { FieldType } from "../../../../util/interface/Sign/loginType";
import * as S from "./style";

const FilterItem = () => {
  const [text, setText] = useState<string>("");
  const [arrowSelect, setArrowSelect] = useState<boolean>(false);
  const [useField, setUseField] = useRecoilState(useFieldValue);
  const [selectField, setSelectField] = useRecoilState(selectFieldList);
  const fieldNum = useRecoilValue(selectFieldNum);
  const [field, setField] = useState<FieldType[]>();

  useLayoutEffect(() => {
    const getFieldHandler = async () => {
      try {
        const data = await getField();
        setField(data.data);
      } catch (e) {
        console.log(e);
      }
    };

    getFieldHandler();
  }, []);

  function UseFieldAdd(field: any) {
    if (selectField.length <= 2) {
      setUseField(useField?.concat(field));
      setSelectField(selectField?.concat({ id: fieldNum + 1 }));
    }
  }

  useEffect(() => {
    if (selectField.length !== 1) {
      if (text === "ALL") {
        setSelectField(
          selectField?.filter((id: any) => id.id === selectFieldNum)
        );
      }
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
            {field?.map((field: FieldType) => (
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
