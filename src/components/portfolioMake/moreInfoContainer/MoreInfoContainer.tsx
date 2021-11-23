import React, { useEffect, useState } from "react";
import * as S from "./style";
import { PlusButton, MinusButton } from "../../../util/assets";
import { ToastError } from "../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { inputDataArrType } from "../../../util/interface/portfolio/portfolioMakeType";

const MoreInfoContainer = () => {
  const [more_info, setMoreInfo] = useState<inputDataArrType[]>([
    { id: "11", name: "", content: "" },
  ]);

  const [DatalastId, setDatalastId] = useState<number>(1);

  useEffect(() => {
    console.log(more_info);
    console.log(DatalastId);
  }, [DatalastId, more_info]);

  const newId = (index: number, num: number) => {
    if (num === 1) {
      setDatalastId(DatalastId + 1);
      return `${index}${DatalastId + 1}`;
    } else if (num === 0) {
      return `${index}${DatalastId}`;
    }
  };

  const handlerOnChange = (event: any) => {
    //input content 넣을 배열 찾아서 넣기
    let parentClassNameId = event.target.parentElement.className.split(" ");
    let eventNodeId = event.target.id;
    let eventTargetcontent = event.target.content;
    setMoreInfo(
      more_info.map((more_info: any, index: number) => {
        console.log(
          `dataArrid: ${more_info.id} parent: ${parentClassNameId[0]}`
        );
        if (more_info.id === parentClassNameId[0]) {
          if (eventNodeId === "inputName") {
            return { ...more_info, name: eventTargetcontent };
          } else {
            return { ...more_info, content: eventTargetcontent };
          }
        } else {
          return more_info;
        }
      })
    );
  };

  const AddData = () => {
    //빈 input 추가 하는 함수
    setMoreInfo((dataArr: any) => [
      ...dataArr,
      { id: newId(dataArr.length + 1, 1), name: "", content: "" },
    ]);
  };

  const DeleteData = (id: any) => {
    //특정 input 삭제
    if (more_info.length === 1) {
      ToastError("삭제할 수 없습니다");
    } else {
      setMoreInfo(
        more_info?.filter((arrItem: any) => {
          return arrItem.id !== id.id;
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
          console.log(more_info.id);
          return (
            <S.InputBox
              key={index}
              onChange={handlerOnChange}
              className={more_info.id}
            >
              <input
                type="text"
                id="inputName"
                placeholder="ex)email"
                value={more_info.name}
              />
              <div></div>
              <input
                type="text"
                id="inputContent"
                placeholder="ex)kub0803@gmail.com"
                value={more_info.content}
              />
              <img
                src={MinusButton}
                alt=""
                onClick={() => {
                  DeleteData(more_info);
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
