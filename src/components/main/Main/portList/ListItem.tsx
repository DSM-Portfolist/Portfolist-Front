import React from "react";
import { Flower } from "../../../../util/assets";
import * as S from "./style";

const ListItem = () => {
  return (
    <S.ItemWrapper>
      <img src={Flower} alt="포트폴리오 이미지 " />
    </S.ItemWrapper>
  );
};

export default ListItem;
