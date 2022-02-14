/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import * as S from "./style";
import ImageWrapper from "./imageWrapper/ImageWrapper";
import ContentWrapper from "./contentWrapper/ContentWrapper";
import { MinusButton } from "../../../util/assets";
import { useRecoilState } from "recoil";
import {
  portfolioModifyList,
  container_list_modify_atom,
} from "../../../modules/atom/portfolioModify";
import { ToastError } from "../../../hook/toastHook";

const ImageContainerList = () => {
  const [containerListModify, setContainerListModify] = useRecoilState(
    container_list_modify_atom
  );
  const [portfolioModifyArr, setPortfolioModifyArr] =
    useRecoilState(portfolioModifyList);

  useEffect(() => {
    setContainerListModify(portfolioModifyArr.container_list);
  }, []);

  useEffect(() => {
    setPortfolioModifyArr({
      ...portfolioModifyArr,
      container_list: containerListModify,
    });
  }, [containerListModify]);

  const addContainerListItem = () => {
    // 컨테이너를 추가하는 함수
    setContainerListModify((value: any) => [
      ...value,
      {
        container_title: "",
        container_text_list: [
          {
            box_title: "",
            box_content: "",
          },
        ],
        container_img_list: [],
      },
    ]);
  };

  const removeContainerList = (index: number) => {
    if (containerListModify.length <= 1) {
      ToastError("최소 1개의 리스트가 필요합니다.");
    } else {
      setContainerListModify(
        containerListModify?.filter((value: any, i: number) => {
          return index !== i;
        })
      );
    }
  };

  const onChangeTitle = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setContainerListModify(
      containerListModify.map((value: any, i: number) => {
        if (i === index) {
          return {
            ...containerListModify[index],
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
        <button type="button" onClick={addContainerListItem}>
          + Add new list
        </button>
      </header>
      {containerListModify.map((value: any, index: number) => {
        const { container_title } = value;
        return (
          <S.ImageWrapeerList key={index}>
            <header>
              <input
                type="text"
                className="Title"
                defaultValue={container_title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onChangeTitle(e, index);
                }}
                placeholder="자신만의 특별한 경험(경력, 인턴, 교육 등)이 있다면 입력해주세요."
              />
              <img
                src={MinusButton}
                className="MinusButton"
                onClick={() => {
                  removeContainerList(index);
                }}
                alt="삭제버튼"
              />
            </header>
            <S.ImageListSection>
              <ImageWrapper identity={index} />
              <ContentWrapper parent_index={index} />
            </S.ImageListSection>
          </S.ImageWrapeerList>
        );
      })}
    </S.MainWrapper>
  );
};

export default ImageContainerList;
