/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useCallback } from "react";
import * as S from "./style";
import { PlusButton, MinusButton } from "../../../util/assets";
import { ToastError } from "../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { inputDataArrType } from "../../../util/interface/portfolio/portfolioMakeType";
import { portfolioMakeList } from "../../../modules/atom/portfolioPost";
import { useRecoilState } from "recoil";

const MoreInfoContainer = () => {
  const [portfolioMakeArr, setPortfolioMakeArr] =
    useRecoilState(portfolioMakeList);
  const [more_info, setMoreInfo] = useState<inputDataArrType[]>([
    { name: "", content: "" },
  ]);

  const setApiMoreInfoData = useCallback(() => {
    setPortfolioMakeArr({
      ...portfolioMakeArr,
      more_info: more_info,
    });
  },[more_info])

  useEffect(() => {
    setApiMoreInfoData()
  }, [setApiMoreInfoData]);

  const handlerOnChange = (e: any, index: number) => {
    //input content 넣을 배열 찾아서 넣기
    const { name, value } = e.target;
    setMoreInfo(
      more_info.map((item: any, i: number) => {
        if (index === i) {
          return { ...item, [name]: value };
        } else {
          return item;
        }
      })
    );
  };

  const AddData = () => {
    //빈 input 추가 하는 함수
    setMoreInfo((dataArr: any) => [...dataArr, { name: "", content: "" }]);
  };

  const DeleteData = (id: number) => {
    //특정 input 삭제
    if (more_info.length === 1) {
      ToastError("삭제할 수 없습니다");
    } else {
      setMoreInfo(
        more_info?.filter((arrItem: any, index: number) => {
          return index !== id;
        })
      );
    }
  };

  return (
    <S.MainWrapper className="make-container">
      <ToastContainer />
      <div className="titleWrapper">
        <h1>본인의 추가 정보를 입력해 주세요. ex) 학력 / 연락처 / 이메일</h1>
        <img src={PlusButton} alt="" onClick={AddData} />
      </div>
      <div className="infoContainer">
        {more_info.map((more_info: any, index: number) => {
          return (
            <S.InputBox
              key={index}
              onChange={(e) => {
                handlerOnChange(e, index);
              }}
            >
              <input
                type="text"
                id="inputName"
                placeholder="ex)email"
                name="name"
                defaultValue={more_info.name}
              />
              <div></div>
              <input
                type="text"
                id="inputContent"
                name="content"
                placeholder="ex)kub0803@gmail.com"
                defaultValue={more_info.content}
              />
              <img
                src={MinusButton}
                alt=""
                onClick={() => {
                  DeleteData(index);
                }}
              />
            </S.InputBox>
          );
        })}
      </div>
    </S.MainWrapper>
  );
};

export default MoreInfoContainer;
