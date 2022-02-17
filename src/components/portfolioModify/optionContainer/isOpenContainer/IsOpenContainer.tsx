/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { portfolioModifyList } from "../../../../modules/atom/portfolioModify";
import * as S from "./style";

const IsOpenContainer = () => {
  const [portfolioModifyArr, setPortfolioModifyArr] =
    useRecoilState(portfolioModifyList);
  const [isClick, setIsClick] = useState<boolean>(portfolioModifyArr.open);

  useEffect(() => {
    setPortfolioModifyArr({
      ...portfolioModifyArr,
      open: isClick,
    });
  }, [isClick]);

  const toggleButton = () => {
    if (isClick) {
      setIsClick(false);
    } else {
      setIsClick(true);
    }
  };

  return (
    <S.MainContainer>
      <h1>{isClick ? "공개" : "비공개"}</h1>
      <S.ToggleButton onClick={toggleButton} isClick={isClick}>
        <div className="div1"></div>
        <div className="div2"></div>
      </S.ToggleButton>
    </S.MainContainer>
  );
};

export default IsOpenContainer;
