import React, { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Logo, Magnifier } from "../../../util/assets";
import * as S from "./style";
import SubMenu from "./SubMenu";
import Notiication from "./Notiication";
import { useRecoilState } from "recoil";
import { searchBar } from "../../../modules/atom/header";

const Header = () => {
  const [isFocusing, setIsFocusing] = useRecoilState(searchBar);
  const searchInputRef = useRef<any>(null);
  const test = true;

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
    <>
      <S.HeaderWrapper>
        {test ? (
          <>
            <S.Container>
              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="포트폴리스트 로고" />
                </Link>
                <Link to="/portfolio-list" className="list-item">
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
          </>
        ) : (
          <>
            <S.BeforeLoginHeader>
              <img src={Logo} alt="포트폴리스트 로고" />
              <Link to="/login">
                <button>시작하기</button>
              </Link>
            </S.BeforeLoginHeader>
          </>
        )}
        <S.MagnifierWrapper isFocusing={isFocusing}>
          <S.Input>
            <input
              type="text"
              placeholder="검색어를 입력해주세요"
              onBlur={focusOff}
              onFocus={focusOn}
              ref={searchInputRef}
            />
            <img src={Magnifier} alt="검색아이콘" />
          </S.Input>
        </S.MagnifierWrapper>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
