import React, { useState } from "react";
import { MinusButton } from "../../../../util/assets";
import * as S from "./style";
import { ToastSuccess, ToastError } from "../../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContentWrapper = () => {
  const [boxData, setBoxData] = useState<any[]>([
    { box_title: "", box_content: "" },
  ]);

  console.log(boxData);

  const AddBoxData = () => {
    setBoxData([...boxData, { box_title: "", box_content: "" }]);
  };

  const DeleteBoxData = (i:number) => {
      if (boxData.length === 1) {
        ToastError("삭제할 수 없습니다");
      } else {
        setBoxData(
          boxData?.filter((arrItem: any, index:number) => {
            return index !== i;
          })
        );
      }
    };

  return (
    <S.ContentContainer>
      <ToastContainer/>
      {boxData.map((value: any, index: number) => {
        return (
          <S.BoxItem>
            <div className="Title">
              <input placeholder="제목을 입력해주세요." />
              <img src={MinusButton} alt="MinusButton" onClick={()=> {DeleteBoxData(index)}} />
            </div>
            <textarea
              placeholder="내용을 입력해주세요."
              className="Content"
            ></textarea>
            {index + 1 < boxData.length  ? "" : <span className="addContent" onClick={AddBoxData}>내용 추가</span>}
          </S.BoxItem>
        );
      })}
    </S.ContentContainer>
  );
};

export default ContentWrapper;
