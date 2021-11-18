import React, { useState } from "react";
import * as S from "./style";
import ImageWrapper from "./imageWrapper/ImageWrapper";
import ContentWrapper from "./contentWrapper/ContentWrapper";
import { MinusButton } from "../../../util/assets";

const ImageContainerList = () => {
  const [container_list, setContainerList] = useState<any[]>([
    { id: 0, container_title: "", container_text_list: [] },
  ]);

  console.log(container_list);

  const AddContainerListItem = () => {
    var jbRandom = Math.random();
    setContainerList((value: any) => [
      ...value,
      {
        id: container_list.length + jbRandom,
        container_title: "",
        container_text_list: [],
      },
    ]);
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
      <header>
        <button type="button" onClick={AddContainerListItem}>
          리스트 추가하기
        </button>
      </header>
      {container_list.map((value: any) => {
        console.log(value);
        return (
          <S.ImageWrapeerList>
            <header>  
              <input
                type="text"
                className="Title"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onChangeTitle(e, value.id);
                }}
                placeholder="자신만의 특별한 경험(경력, 인턴, 교육 등)이 있다면 입력해주세요."
              />
              <img src={MinusButton} className="MinusButton" onClick={() => { console.log(`remove Button click!!`)}} alt="" />
            </header>
            <S.ImageListSection>
              <ImageWrapper />
              <ContentWrapper />
            </S.ImageListSection>
          </S.ImageWrapeerList>
        );
      })}
    </S.MainWrapper>
  );
};

export default ImageContainerList;
