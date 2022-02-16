import { useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router";
import { searchValue } from "../../../../modules/atom/portfolio/search";
import { Magnifier } from "../../../../util/assets";
import { mainColor } from "../../../../util/css/color/color";

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
        `/list?page=0&size=12&field=&sort=date&query=${searchContent}&searchType=`
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
    <MagnifierWrapper isFocusing={isFocusing}>
      <Input>
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
      </Input>
    </MagnifierWrapper>
  );
};

interface Props {
  isFocusing?: boolean;
  noti?: boolean;
}

export const MagnifierWrapper = styled.div<Props>`
  width: 100%;
  height: 80px;
  background-color: ${mainColor};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ isFocusing }) =>
    isFocusing ? `translateY()` : `translateY(-80px)`};
  position: absolute;
  transition: transform ease 0.4s;
  z-index: 2;
`;

export const Input = styled.div`
  width: 50%;
  height: 50px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  input {
    width: 80%;
    font-size: 16px;
    transform: skew(-0.1deg);

    ::placeholder {
      transform: skew(-0.1deg);
    }
  }

  img {
    //width: 25px;
    cursor: pointer;
  }
`;

export default Searchbar;
