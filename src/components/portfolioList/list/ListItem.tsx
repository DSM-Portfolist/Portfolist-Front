import React from "react";
import { Flower, Profile } from "../../../util/assets";
import * as S from "./style";

const Tag = ({ content }: any) => {
  return <S.Tag>{content}</S.Tag>;
};

const ListItem = () => {
  return (
    <S.ListItemWrapper>
      <img src={Flower} alt="포트폴리오 배너" />
      <S.Content>
        <div className="tag">
          <Tag content={"학생"}></Tag>
        </div>
        <div className="title">
          <span>강은빈</span>
          <span>금처럼 반짝반짝 빛나고 있는 강은빈입니다.</span>
        </div>
        <div className="user-profile">
          <img src={Profile} alt="사용자의 프로필 사진" />
          <span>강은빈님이 포트폴리오</span>
        </div>
      </S.Content>
    </S.ListItemWrapper>
  );
};

export default ListItem;
