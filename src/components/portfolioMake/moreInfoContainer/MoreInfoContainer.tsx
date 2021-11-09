import React, { useEffect, useState } from "react";
import * as S from "./style";
import { PlusButton, MinusButton } from "../../../util/assets";
import { ToastSuccess, ToastError } from "../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { inputDataArrType } from "../../../util/interface/portfolio/portfolioMakeType";

const MoreInfoContainer = () => {
  const [dataArr, setDataArr] = useState<inputDataArrType[]>([
    { id: "11", key: "", value: "" },
  ]);

  const [DatalastId, setDatalastId] = useState<number>(1);

  useEffect(() => {
    console.log(dataArr);
    console.log(DatalastId);
  }, [dataArr]);

  const newId = (index: number, num: number) => {
    if (num === 1) {
      setDatalastId(DatalastId + 1);
      return `${index}${DatalastId + 1}`;
    } else if (num === 0) {
      return `${index}${DatalastId}`;
    }
  };

  const handlerOnChange = (event: any) => {
    //input value 넣을 배열 찾아서 넣기
    let parentClassNameId = event.target.parentElement.className.split(" ");
    let eventNodeId = event.target.id;
    let eventTargetValue = event.target.value;
    setDataArr(
      dataArr.map((dataArr: any, index: number) => {
        console.log(`dataArrid: ${dataArr.id} parent: ${parentClassNameId[0]}`);
        if (dataArr.id === parentClassNameId[0]) {
          if (eventNodeId === "inputName") {
            return { ...dataArr, key: eventTargetValue };
          } else {
            return { ...dataArr, value: eventTargetValue };
          }
        } else {
          return dataArr;
        }
      })
    );
  };

  const AddData = () => {
    //빈 input 추가 하는 함수
    setDataArr((dataArr: any) => [
      ...dataArr,
      { id: newId(dataArr.length + 1, 1), key: "", value: "" },
    ]);
  };

  const DeleteData = (id: any) => {
    //특정 input 삭제
    if (dataArr.length === 1) {
      ToastError("삭제할 수 없습니다");
    } else {
      setDataArr(
        dataArr?.filter((arrItem: any) => {
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
        {dataArr.map((dataArr: any, index: number) => {
          console.log(dataArr.id);
          return (
            <S.InputBox
              key={index}
              onChange={handlerOnChange}
              className={dataArr.id}
            >
              <input
                type="text"
                id="inputName"
                placeholder="ex)email"
                value={dataArr.key}
              />
              <div></div>
              <input
                type="text"
                id="inputContent"
                placeholder="ex)kub0803@gmail.com"
                value={dataArr.value}
              />
              <img
                src={MinusButton}
                alt=""
                onClick={() => {
                  DeleteData(dataArr);
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
