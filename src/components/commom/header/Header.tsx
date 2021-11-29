import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { Logo, Magnifier } from "../../../util/assets";
import * as S from "./style";
import SubMenu from "./SubMenu";
import Notiication from "./Notiication";
import { useRecoilState, useSetRecoilState } from "recoil";
import { searchBar } from "../../../modules/atom/header";
import { searchValue } from "../../../modules/atom/portfolio/search";

const Header = () => {
  const [selectText, setSelectText] = useState<boolean>(true);
  const [isFocusing, setIsFocusing] = useRecoilState(searchBar);
  const setSearchText = useSetRecoilState(searchValue);
  const searchInputRef = useRef<any>(null);
  const history = useHistory();

  const searchHandler = (e: any) => {
    if (e.key === "Enter") {
      history.push(
        `list?page=0&size=10&field=&sort=date&query=${e.target.value}&searchType=`
      );
      setSearchText("");
    }
  };

  const focusOn = useCallback(() => {
    setIsFocusing(true);
  }, [setIsFocusing]);

  const focusOff = useCallback(() => {
    setIsFocusing(false);
  }, [setIsFocusing]);

  useEffect(() => {
    if (isFocusing) {
      searchInputRef.current.focus();
    }
  }, [history, isFocusing]);

  return (
    <>
      <S.HeaderWrapper>
        {localStorage.getItem("access_token_portfolist") ? (
          <S.Container>
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="포트폴리스트 로고" />
              </Link>
              <Link
                to="list?page=0&size=10&field=&sort=date&query=&searchType="
                className="list-item"
              >
                <span>포트폴리오</span>
              </Link>
              <Link to="/portfolio-make" className="list-item">
                <span>포트폴리오 제작</span>
              </Link>
            </div>
            <ul>
              <li>
                <img
                  className="magnifier-img"
                  src={Magnifier}
                  alt="검색 아이콘"
                  onClick={focusOn}
                />
              </li>
              <Notiication />
              <SubMenu />
            </ul>
          </S.Container>
        ) : (
          <S.BeforeLoginHeader>
            <img src={Logo} alt="포트폴리스트 로고" />
            <Link to="/login">
              <button>시작하기</button>
            </Link>
          </S.BeforeLoginHeader>
        )}
        <S.MagnifierWrapper isFocusing={isFocusing}>
          <S.Input onChange={(e) => searchHandler(e)}>
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
              onKeyPress={(e) => searchHandler(e)}
            />
            <img src={Magnifier} alt="검색아이콘" />
          </S.Input>
        </S.MagnifierWrapper>
      </S.HeaderWrapper>
    </>
  );
};

export default withRouter(Header);
