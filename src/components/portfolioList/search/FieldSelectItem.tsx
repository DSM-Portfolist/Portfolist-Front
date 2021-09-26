import React from "react";
import * as S from "./style";
import { field } from "./dummy.json";

interface Props {
  setText: any;
  arrowSelect: boolean;
  setUseField: any;
  useField: [];
}

const FieldSelectItem = ({
  setText,
  arrowSelect,
  setUseField,
  useField,
}: Props) => {
  function UseFieldAdd(field: any) {
    setUseField(useField.concat(field));
  }

  return (
    <S.FieldSelectItemWrapper
      arrowSelect={arrowSelect}
      style={arrowSelect ? { height: 200 } : { height: 0 }}
    >
      {field.map((field) => (
        <li
          key={field.id}
          onClick={() => {
            setText(field.field);
            UseFieldAdd(field.field);
          }}
        >
          {field.field}
        </li>
      ))}
    </S.FieldSelectItemWrapper>
  );
};

export default FieldSelectItem;
