import React, { useState, useEffect } from "react";
import * as S from "./style";
import ImageWrapper from "./imageWrapper/ImageWrapper";
import ContentWrapper from "./contentWrapper/ContentWrapper";
import { MinusButton } from "../../../util/assets";
import { useRecoilState, useRecoilValue } from "recoil";
import { container_text, box_data } from "../../../modules/atom/portfolioPost";
import { ToastSuccess, ToastError } from "../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageContainerList = () => {
  /* const [container_list, setContainerList] = useRecoilState(container_text); */
  const defalutContainerList = useRecoilValue(container_text);
  const [container_list, setContainerList] = useState(defalutContainerList);
  const boxData = useRecoilValue(box_data);

  console.log(container_list);

  const AddContainerListItem = () => {
    var jbRandom = Math.random();
    //console.log(jbRandom);
    setContainerList((value: any) => [
      ...value,
      {
        id: container_list.length + jbRandom,
        container_title: "",
        container_text_list: boxData,
      },
    ]);
  };

  const removeContainerList = (id: number) => {
    if (container_list.length === 1) {
      ToastError("삭제할 수 없습니다");
    } else {
      setContainerList(
        container_list?.filter((value: any) => {
          console.log(value.id, id);
          return value.id !== id;
        })
      );
    }
  };

  const onChangeTitle = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    setContainerList(
      container_list.map((value: any) => {
        if (value.id === id) {
          return {
            ...value,
            container_title: e.target.value,
          };
        } else {
          return value;
        }
      })
    );
  };

  return (
    <S.MainWrapper className="make-container">
      <ToastContainer />
      <header>
        <button type="button" onClick={AddContainerListItem}>
          리스트 추가하기
        </button>
      </header>
      {container_list.map((value: any, index: number) => {
        return (
          <S.ImageWrapeerList key={index}>
            <header>
              <input
                type="text"
                className="Title"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onChangeTitle(e, value.id);
                }}
                placeholder="자신만의 특별한 경험(경력, 인턴, 교육 등)이 있다면 입력해주세요."
              />
              <img
                src={MinusButton}
                className="MinusButton"
                onClick={() => {
                  removeContainerList(value.id);
                }}
                alt="삭제버튼"
              />
            </header>
            <S.ImageListSection>
              <ImageWrapper />
              <ContentWrapper setContainerList={setContainerList} />
            </S.ImageListSection>
          </S.ImageWrapeerList>
        );
      })}
    </S.MainWrapper>
  );
};

export default ImageContainerList;
