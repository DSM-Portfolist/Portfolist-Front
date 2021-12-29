import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { Magnifier } from "../../../util/assets";
import { searchValue } from "../../../modules/atom/portfolio/search/index";
import * as S from "./style";
import { useHistory } from "react-router";

const Searchbar = () => {
  const [selectText, setSelectText] = useState<boolean>(true);
  const [isFocusing, setIsFocusing] = useState<boolean>(false);
  const [searchContent, setSearchContent] = useRecoilState(searchValue);
  const searchInputRef = useRef<any>(null);
  const history = useHistory();

  const searchHandler = (e: any) => {
    setSearchContent(e.target.value);

    if (e.key === "Enter") {
      history.push(
        `/list?page=1&size=10&field=&sort=date&query=${searchContent}&searchType=`
      );
    }
  };

  const focusOff = useCallback(() => {
    setIsFocusing(false);
  }, []);

  useEffect(() => {
    if (isFocusing) {
      searchInputRef.current.focus();
    }
  }, [history, isFocusing, searchContent]);

  return (
    <S.MagnifierWrapper isFocusing={isFocusing}>
      <S.Input>
        <div className="select-box">
          <span onClick={() => setSelectText(!selectText)}>
            {selectText ? "제목" : "사용자"}
          </span>
        </div>
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          onBlur={focusOff}
          ref={searchInputRef}
          onKeyPress={(e: any) => searchHandler(e.target.value)}
        />
        <img src={Magnifier} alt="검색아이콘" />
      </S.Input>
    </S.MagnifierWrapper>
  );
};

export default Searchbar;
