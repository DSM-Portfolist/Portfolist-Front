import React, { useRef } from "react";
import * as S from "./style";
import { FieldType } from "../../../util/interface/common";
import { getFieldSelector } from "../../../modules/atom/portfolio";
import { useRecoilState, useRecoilValue } from "recoil";
import { useFieldValue } from "../../../modules/atom/portfolio/search";

interface Props {
  setText: any;
  setArrowSelect: any;
  arrowSelect: boolean;
}

const FieldSelectItem = ({ setText, arrowSelect, setArrowSelect }: Props) => {
  const field = useRecoilValue(getFieldSelector);
  const [useField, setUseField] = useRecoilState(useFieldValue);
  const fieldRef = useRef<any>(null);

  function UseFieldAdd(field: any) {
    setUseField(useField?.concat(field));
  }

  return (
    <S.FieldSelectItemWrapper
      arrowSelect={arrowSelect}
      style={arrowSelect ? { height: 200 } : { height: 0 }}
      ref={fieldRef}
    >
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
    </S.FieldSelectItemWrapper>
  );
};

export default FieldSelectItem;
