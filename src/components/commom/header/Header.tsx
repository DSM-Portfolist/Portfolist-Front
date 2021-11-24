import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { Logo, Magnifier } from "../../../util/assets";
import * as S from "./style";
import SubMenu from "./SubMenu";
import Notiication from "./Notiication";
import { useRecoilState } from "recoil";
import { searchBar } from "../../../modules/atom/header";
import { searchValue } from "../../../modules/atom/portfolio/search";

const Header = () => {
  const [selectText, setSelectText] = useState<boolean>(true);
  const [isFocusing, setIsFocusing] = useRecoilState(searchBar);
  const [searchContent, setSearchContent] = useRecoilState(searchValue);
  const searchInputRef = useRef<any>(null);
  const history = useHistory();

  const searchHandler = (e: any) => {
    console.log(e.target);
    setSearchContent(e.target.value);
    if (e.key === "Enter") {
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

    history.push(
      `/list?page=1&size=10&field=&sort=date&query=${searchContent}&searchType=`
    );
  }, [history, isFocusing, searchContent]);

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
                to="list?page=1&size=10&field=&sort=date&query&searchType=="
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
              onKeyPress={(e: any) => setSearchContent(e.target.value)}
            />
            <img src={Magnifier} alt="검색아이콘" />
          </S.Input>
        </S.MagnifierWrapper>
      </S.HeaderWrapper>
    </>
  );
};

export default withRouter(Header);
