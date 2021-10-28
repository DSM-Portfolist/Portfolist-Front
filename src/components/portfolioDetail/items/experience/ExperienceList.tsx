import React from "react";
import { useRecoilValue } from "recoil";
import * as S from "./style";
import { TestImg } from "../../../../util/assets";
import {
  BoxListType,
  ContainerListType,
} from "../../../../util/interface/portfolio/portfolioDetailType";
import { portfoilo } from "../../../../modules/atom/portfolio";

const ExperienceList = () => {
  const portfolioValue = useRecoilValue(portfoilo);

  return (
    <>
      {portfolioValue?.container_list.map(
        (item: ContainerListType, index: number) => (
          <S.ExperienceWrapper key={index}>
            <S.MainTitle>{item.container_title}</S.MainTitle>
            <S.ContainerBox key={index}>
              <div className="image-box">
                {item.box_img.map((img: string, index: number) => (
                  <img key={index} src={TestImg} alt="경험 이미지" />
                ))}
              </div>
              <div className="content-box">
                {item.box_list.map((box: BoxListType, index: number) => (
                  <div key={index} className="content-box-item">
                    <span className="sub-title">{box.box_title}</span>
                    <span className="sub-content">{box.box_content}</span>
                  </div>
                ))}
              </div>
            </S.ContainerBox>
          </S.ExperienceWrapper>
        )
      )}
    </>
  );
};

export default ExperienceList;
