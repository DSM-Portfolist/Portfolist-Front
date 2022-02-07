import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState } from "recoil";
import { ToastError } from "../../../hook/toastHook";
import { useFieldValue } from "../../../modules/atom/portfolio/search";
import { NoSelectedArrow, SelectedArrow } from "../../../util/assets";
import { mainColor } from "../../../util/css/color/color";
import FieldItem from "./FieldItem";
import FieldSelectItem from "./FieldSelectItem";
import SearchInput from "./SearchInput";
import * as S from "./style";

const Search = () => {
  const [text, setText] = useState<string>("원하는 분야를 선택해주세요.");
  const [arrowSelect, setArrowSelect] = useState<boolean>(false);
  const [useField, setUseField] = useRecoilState(useFieldValue);

  useEffect(() => {
    if (useField?.length >= 6) {
      ToastError("필터는 최대 5개까지 가능합니다.");
    }
  }, [useField]);

  return (
    <S.SearchWrapper>
      <ToastContainer />
      <S.FieldSelectWrapper>
        <span>분야</span>
        <div className="field-select">
          <div
            className="categoy_wrap"
            style={{
              borderBottom:
                useField?.length > 0
                  ? `2px solid ${mainColor}`
                  : "2px solid #C4C4C4",
            }}
            onClick={() => setArrowSelect(!arrowSelect)}
          >
            <p>{text}</p>
            <S.ArrowImg
              src={useField?.length > 0 ? SelectedArrow : NoSelectedArrow}
              alt="화살표 상태"
              style={
                arrowSelect
                  ? { transform: "rotate(180deg)" }
                  : { transform: "rotate(0deg)" }
              }
            />
          </div>
          <FieldSelectItem
            arrowSelect={arrowSelect}
            setArrowSelect={setArrowSelect}
            setText={setText}
          />
        </div>
        <S.FieldWrapper>
          {useField?.map((field: any, index: number) => (
            <FieldItem
              field={field}
              key={index}
              setUseField={setUseField}
              useField={useField}
            />
          ))}
        </S.FieldWrapper>
      </S.FieldSelectWrapper>
      <SearchInput />
    </S.SearchWrapper>
  );
};

export default Search;
