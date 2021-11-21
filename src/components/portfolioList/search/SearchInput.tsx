import React, { useCallback, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";
import { searchValue } from "../../../modules/atom/portfolio/search";
import * as S from "./style";

const SearchInput = () => {
  const [selectText, setSelectText] = useState<boolean>(true);
  const [isFocusing, setIsFocusing] = useState<boolean>(false);
  const setSearchContent = useSetRecoilState(searchValue);
  const searchInputRef = useRef<any>(null);
  const history = useHistory();

  const searchHandler = (e: React.KeyboardEvent<HTMLInputElement> | any) => {
    if (e.key === "Enter") {
      setSearchContent(e.target.value);
      history.push(
        `/portfolio-list?page=1&size=10&field=&sort=date,desc&query=${e.target.value}`
      );
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
    <S.SearchInput isFocusing={isFocusing}>
      <div className="select-box">
        <span onClick={() => setSelectText(!selectText)}>
          {selectText ? "제목" : "사용자"}
        </span>
      </div>
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        onKeyDown={(e) => searchHandler(e)}
        onBlur={focusOff}
        onFocus={focusOn}
        ref={searchInputRef}
      />
    </S.SearchInput>
  );
};

export default SearchInput;
