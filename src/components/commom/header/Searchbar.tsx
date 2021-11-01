import React, { useCallback, useEffect, useRef, useState } from "react";
import { Magnifier } from "../../../util/assets";
import * as S from "./style";

const Searchbar = () => {
  const [isFocusing, setIsFocusing] = useState<boolean>(false);
  const searchInputRef = useRef<any>(null);

  const focusOff = useCallback(() => {
    setIsFocusing(false);
  }, []);

  useEffect(() => {
    if (isFocusing) {
      searchInputRef.current.focus();
    }
  }, [isFocusing]);
  return (
    <S.MagnifierWrapper isFocusing={isFocusing}>
      <S.Input>
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          onBlur={focusOff}
          //onFocus={focusOn}
          ref={searchInputRef}
        />
        <img src={Magnifier} alt="검색아이콘" />
      </S.Input>
    </S.MagnifierWrapper>
  );
};

export default Searchbar;
