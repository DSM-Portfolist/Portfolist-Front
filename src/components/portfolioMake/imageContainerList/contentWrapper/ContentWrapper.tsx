import React, { useState, useEffect } from "react";
import { MinusButton } from "../../../../util/assets";
import * as S from "./style";
import { ToastSuccess, ToastError } from "../../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContentWrapper = () => {
  const [boxData, setBoxData] = useState<any[]>([
    { id: 0, box_title: "", box_content: "" },
  ]);

  /* useEffect(() => {
    console.log(boxData);
  }, [boxData]);
 */
  const AddBoxData = () => {
    var jbRandom = Math.random();
    setBoxData([
      ...boxData,
      { id: boxData.length + jbRandom, box_title: "", box_content: "" },
    ]);
  };

  const DeleteBoxData = (i: number) => {
    if (boxData.length === 1) {
      ToastError("삭제할 수 없습니다");
    } else {
      setBoxData(
        boxData?.filter((arrItem: any) => {
          console.log(arrItem.id, i);
          return arrItem.id !== i;
        })
      );
    }
  };

  const handdleOnchange = (e: any, id: number) => {
    setBoxData(
      boxData.map((value: any) => {
        if (value.id === id) {
          return { ...value, [e.target.name]: e.target.value };
        } else {
          return value;
        }
      })
    );
  };

  return (
    <S.ContentContainer>
      <ToastContainer />
      {boxData.map((value: any, index: number) => {
        return (
          <S.BoxItem>
            <div className="Title">
              <input
                placeholder="제목을 입력해주세요."
                name="box_title"
                value={value.box_title}
                onChange={(e: any) => {
                  handdleOnchange(e, value.id);
                }}
              />
              <img
                src={MinusButton}
                alt="MinusButton"
                onClick={() => {
                  DeleteBoxData(value.id);
                }}
              />
            </div>
            <textarea
              placeholder="내용을 입력해주세요."
              className="Content"
              name="box_content"
              onChange={(e: any) => {
                handdleOnchange(e, value.id);
              }}
              value={value.box_content}
            ></textarea>
            {index + 1 < boxData.length ? (
              ""
            ) : (
              <span className="addContent" onClick={AddBoxData}>
                내용 추가
              </span>
            )}
          </S.BoxItem>
        );
      })}
    </S.ContentContainer>
  );
};

export default ContentWrapper;
