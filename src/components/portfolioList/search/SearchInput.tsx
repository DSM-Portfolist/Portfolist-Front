import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  sortValue,
  useFieldValue,
} from "../../../modules/atom/portfolio/search";
import { SelectedArrow } from "../../../util/assets";
import * as S from "./style";

const SearchInput = () => {
  const filterList = ["최신순", "오래된순"];
  const [arrowSelect, setArrowSelect] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("최신순");
  const [sort, setSort] = useRecoilState(sortValue);
  const useField = useRecoilValue(useFieldValue);
  const history = useHistory();

  useEffect(() => {
    history.push(
      `/list?page=1&size=10&field=${useField}&sort=date,${sort}&query=&searchType=`
    );
  }, [history, sort, useField]);

  return (
    <>
      {/* <S.SearchInput isFocusing={isFocusing}>
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
      </S.SearchInput> */}
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
                setSort(sort === "asc" ? "desc" : "asc");
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
