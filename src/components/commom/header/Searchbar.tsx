import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Magnifier } from "../../../util/assets";
import { searchValue } from "../../../modules/atom/portfolio/search/index";
import * as S from "./style";

const Searchbar = () => {
  const [isFocusing, setIsFocusing] = useState<boolean>(false);
  const setSearchContent = useSetRecoilState(searchValue);
  const searchInputRef = useRef<any>(null);

  const searchHandler = (e: React.KeyboardEvent<HTMLInputElement> | any) => {
    if (e.key === "Enter") {
      setSearchContent(e.target.value);
      console.log(e.target.value);
    }
  };

  const focusOn = useCallback(() => {
    setIsFocusing(true);
  }, []);

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
          onFocus={focusOn}
          ref={searchInputRef}
          onKeyUp={(e) => searchHandler(e)}
        />
        <img src={Magnifier} alt="검색아이콘" />
      </S.Input>
    </S.MagnifierWrapper>
  );
};

export default Searchbar;
