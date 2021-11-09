import React, { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./style";
import { FieldType } from "../../../util/interface/common";
import { getFieldSelector } from "../../../modules/atom/portfolio";
import { useRecoilValue } from "recoil";

interface Props {
  setText: any;
  setArrowSelect: any;
  setUseField: any;
  arrowSelect: boolean;
  useField: [];
}

const FieldSelectItem = ({
  setText,
  arrowSelect,
  setUseField,
  useField,
  setArrowSelect,
}: Props) => {
  const field = useRecoilValue(getFieldSelector);
  const [isFocusing, setIsFocusing] = useState<boolean>(false);
  const fieldRef = useRef<any>(null);

  function UseFieldAdd(field: any) {
    setUseField(useField.concat(field));
  }

  const focusOn = useCallback(() => {
    setIsFocusing(true);
  }, []);

  const focusOff = useCallback(() => {
    setIsFocusing(false);
  }, []);

  useEffect(() => {
    if (isFocusing) {
      fieldRef.current.focus();
    }
  }, [isFocusing]);

  return (
    <S.FieldSelectItemWrapper
      arrowSelect={arrowSelect}
      style={arrowSelect ? { height: 200 } : { height: 0 }}
      ref={fieldRef}
      onBlur={focusOff}
      onFocus={focusOn}
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
