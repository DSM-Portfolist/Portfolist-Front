import React, { useState, useEffect } from "react";
import { MinusButton } from "../../../../util/assets";
import * as S from "./style";
import { ToastSuccess, ToastError } from "../../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilValue } from "recoil";
import {
  box_data,
  container_text,
} from "../../../../modules/atom/portfolioPost";
import { ContainerTextListType } from "../../../../util/interface/portfolioPost/postType";

interface Props {
  setContainerList: () => void;
}

const ContentWrapper = (props: Props) => {
  const { setContainerList } = props;
  const defaultBoxData = useRecoilValue(box_data);
  const [boxData, setboxData] =
    useState<ContainerTextListType[]>(defaultBoxData);

  console.log(boxData);

  const addContainerText = () => {
    var jbRandom = Math.random();
    setboxData([
      ...boxData,
      {
        id: boxData.length + jbRandom,
        box_title: "",
        box_content: "",
      },
    ]);
  };

  const DeleteContainerText = (id: number) => {
    if (boxData.length === 1) {
      ToastError("삭제할 수 없습니다");
    } else {
      setboxData(
        boxData?.filter((arrItem: any) => {
          return arrItem.id !== id;
        })
      );
    }
  };

  const handdleOnchange = (e: any, id: number) => {
    setboxData(
      boxData.map((value: any, index: number) => {
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
      {boxData?.map((value: any, index: number) => {
        const { box_title, id, box_content } = value;
        return (
          <S.BoxItem key={index}>
            <div className="Title">
              <input
                placeholder="제목을 입력해주세요."
                name="box_title"
                value={box_title}
                onChange={(e: any) => {
                  handdleOnchange(e, id);
                }}
              />
              <img
                src={MinusButton}
                alt="MinusButton"
                onClick={() => {
                  DeleteContainerText(id);
                }}
              />
            </div>
            <textarea
              placeholder="내용을 입력해주세요."
              className="Content"
              name="box_content"
              value={box_content}
              onChange={(e: any) => {
                handdleOnchange(e, id);
              }}
            ></textarea>
            {index + 1 < boxData.length ? (
              ""
            ) : (
              <span className="addContent" onClick={addContainerText}>
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
