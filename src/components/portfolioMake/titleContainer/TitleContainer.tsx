/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import * as S from "./style";
import { InputIsNullType } from "../../../util/interface/portfolio/portfolioMakeType";
import { useRecoilState } from "recoil";
import { portfolioMakeList } from "../../../modules/atom/portfolioPost";

const TitleContainer = () => {
  const [portfolioMakeArr, setPortfolioMakeArr] =
    useRecoilState(portfolioMakeList);
  const [isNullArr, setIsNullArr] = useState<InputIsNullType[]>([
    { isNull: true },
    { isNull: true },
  ]);
  const [title, setTitle] = useState<string>("");
  const [introduce, setIntroduce] = useState<string>("");

  const setApiTitleData = useCallback(() => {
    setPortfolioMakeArr({ ...portfolioMakeArr, title: title });
  }, [title]);

  const setApiIntroduceData = useCallback(() => {
    setPortfolioMakeArr({ ...portfolioMakeArr, introduce: introduce });
  }, [introduce]);

  useEffect(() => {
    setApiTitleData();
  }, [setApiTitleData]);

  useEffect(() => {
    setApiIntroduceData();
  }, [setApiIntroduceData]);

  const handlerOnChange = (e: any) => {
    const { name, value } = e.target;
    //글작성을 했는지 안했는지 확인하는 함수
    isNullCheckFunc(e);
    if (name === "title") {
      setTitle(value);
    } else if (name === "introduce") {
      setIntroduce(value);
    }
  };

  const isNullCheckFunc = (e: any) => {
    //글작성을 했는지 안했는지 확인하는 함수
    const { className, value } = e.target;
    if (value !== "") {
      let newArr = isNullArr.map((item: any, index: number) => {
        if (className === "Title" && index === 0) {
          return { isNull: false };
        } else if (className === "Introduce" && index === 1) {
          return { isNull: false };
        }
        return item;
      });
      setIsNullArr(newArr);
    } else {
      let newArr = isNullArr.map((item: any, index: number) => {
        if (className === "Title" && index === 0) {
          return { isNull: true };
        } else if (className === "Introduce" && index === 1) {
          return { isNull: true };
        }
        return item;
      });
      setIsNullArr(newArr);
    }
  };

  return (
    <S.MainContainer>
      <S.InputWrapper onChange={handlerOnChange}>
        <input
          type="text"
          name="title"
          className="Title"
          placeholder="제목을 입력해주세요."
        />
        {isNullArr[0].isNull ? <span className="title-span">*</span> : ""}
      </S.InputWrapper>
      <S.InputWrapper onChange={handlerOnChange}>
        <input
          type="text"
          name="introduce"
          className="Introduce"
          placeholder="본인을 간단하게 소개해주세요."
        />
        {isNullArr[1].isNull ? <span className="introduce-span">*</span> : ""}
      </S.InputWrapper>
    </S.MainContainer>
  );
};

export default TitleContainer;
