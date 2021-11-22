import React, { useCallback, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { searchValue } from "../../../modules/atom/portfolio/search";
import { SelectedArrow } from "../../../util/assets";
import * as S from "./style";

const SearchInput = () => {
  const filterList = ["최신순", "오래된순"];
  const [selectText, setSelectText] = useState<boolean>(true);
  const [isFocusing, setIsFocusing] = useState<boolean>(false);
  const [arrowSelect, setArrowSelect] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("최신순");
  const [test, setTest] = useState<string>("asc");
  const [searchContent, setSearchContent] = useRecoilState(searchValue);
  const searchInputRef = useRef<any>(null);
  const history = useHistory();

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

    history.push(
      `/portfolio-list?page=1&size=10&field=&sort=date,${test}&query=${searchContent}`
    );
  }, [history, isFocusing, searchContent, test]);

  return (
    <>
      <S.SearchInput isFocusing={isFocusing}>
        <div className="select-box">
          <span onClick={() => setSelectText(!selectText)}>
            {selectText ? "제목" : "사용자"}
          </span>
        </div>
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          onChange={(e) => setSearchContent(e.target.value)}
          onBlur={focusOff}
          onFocus={focusOn}
          ref={searchInputRef}
        />
      </S.SearchInput>
      <S.Filter arrowSelect={arrowSelect}>
        <div
          className="categoy_wrap"
          onClick={() => setArrowSelect(!arrowSelect)}
        >
          <p>{filter}</p>
          <S.ArrowImg
            src={SelectedArrow}
            alt="화살표 상태"
            style={
              arrowSelect
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0deg)" }
            }
          />
        </div>
        <ul className="filter-wrap">
          {filterList?.map((i, index) => (
            <li
              key={index}
              onClick={() => {
                setFilter(i);
                setArrowSelect(false);
                setTest(test === "asc" ? "desc" : "asc");
              }}
            >
              {i}
            </li>
          ))}
        </ul>
      </S.Filter>
    </>
  );
};

export default SearchInput;
