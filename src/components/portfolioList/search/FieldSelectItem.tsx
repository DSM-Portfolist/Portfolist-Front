import React, { useState } from "react";
import * as S from "./style";
import { useQuery } from "react-query";
import { getField } from "../../../util/api/portfolio/portfolio";
import { FieldType } from "../../../util/interface/common";

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
  const { data } = useQuery("field", getField);
  const [isFocusing, setIsFocusing] = useState<boolean>(false);

  function UseFieldAdd(field: any) {
    setUseField(useField.concat(field));
  }

  return (
    <S.FieldSelectItemWrapper
      arrowSelect={arrowSelect}
      style={arrowSelect ? { height: 200 } : { height: 0 }}
    >
      {data?.data.map((field: FieldType) => (
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
