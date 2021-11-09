import React from "react";
import { MoreInfoType } from "../../../../util/interface/portfolio/portfolioDetailType";
import * as S from "./style";

interface Props {
  info: MoreInfoType;
}

const MoreInfoItem = ({ info }: Props) => {
  return (
    <S.InfoItem>
      <span>{info.key}</span>
      <span>{info.value}</span>
    </S.InfoItem>
  );
};
export default MoreInfoItem;
