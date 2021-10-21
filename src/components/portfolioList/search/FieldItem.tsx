import React from "react";
import { CloseIcon } from "../../../util/assets";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as S from "./style";
import { ToastSuccess } from "../../../hook/toastHook";

interface Props {
  field: string;
  setUseField?: any;
  useField?: [];
}

const FieldItem = ({ field, setUseField, useField }: Props) => {
  function UseFieldDelete(txt: string) {
    setUseField(useField?.filter((txt) => field !== txt));
  }

  return (
    <>
      <ToastContainer />
      <S.FieldItemWrapper>
        <span>{field}</span>
        <img
          src={CloseIcon}
          alt="닫기 아이콘"
          onClick={() => {
            UseFieldDelete(field);
          }}
        />
      </S.FieldItemWrapper>
    </>
  );
};

export default FieldItem;
