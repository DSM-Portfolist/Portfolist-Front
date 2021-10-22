import React from "react";
import * as S from "./style";
import { TestImg } from "../../../../util/assets";
import {
  BoxListType,
  ContainerListType,
  ContainerType,
} from "../../../../util/interface/portfolio/portfolioDetailType";
import { container_list } from "../../dummy.json";

const ExperienceList = () => {
  const portfolio: ContainerListType[] = container_list;

  return (
    <>
      {portfolio.map((item: ContainerListType, index: number) => (
        <S.ExperienceWrapper key={index}>
          <S.MainTitle>{item.container_title}</S.MainTitle>
          {item.container.map((list: ContainerType, index: number) => (
            <S.ContainerBox key={index}>
              <div className="image-box">
                {list.box_img.map((img: string, index: number) => (
                  <img key={index} src={TestImg} alt="경험 이미지" />
                ))}
              </div>
              <div className="content-box">
                {list.box_list.map((box: BoxListType, index: number) => (
                  <div key={index} className="content-box-item">
                    <span className="sub-title">{box.box_title}</span>
                    <span className="sub-content">{box.box_content}</span>
                  </div>
                ))}
              </div>
            </S.ContainerBox>
          ))}
        </S.ExperienceWrapper>
      ))}
    </>
  );
};

export default ExperienceList;
