import React from "react";
import {
  MoreInfoType,
  PortfolioType,
} from "../../../../util/interface/main/portfolioType";
import MoreInfoItem from "./MoreInfoItem";
import * as S from "./style";

interface Props {
  portfolio: PortfolioType;
}

const MoreInfo = ({ portfolio }: Props) => {
  return (
    <S.MoreInfoWrapper>
      <div className="more-wrapper">
        {portfolio.default.more_info.map(
          (info: MoreInfoType, index: number) => (
            <MoreInfoItem key={index} info={info} />
          )
        )}
      </div>
    </S.MoreInfoWrapper>
  );
};

export default MoreInfo;
