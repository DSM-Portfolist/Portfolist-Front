import React from "react";
import { useRecoilValue } from "recoil";
import { getPortfolioSelecor } from "../../../../modules/atom/portfolio/portfolioDetail";
import { MoreInfoType } from "../../../../util/interface/portfolio/portfolioDetailType";
import MoreInfoItem from "./MoreInfoItem";
import * as S from "./style";

const MoreInfo = () => {
  const portfolioValue = useRecoilValue(getPortfolioSelecor);

  return (
    <>
      {portfolioValue?.more_info_list?.length === 0 ? (
        ""
      ) : (
        <S.MoreInfoWrapper>
          <div className="more-wrapper">
            {portfolioValue?.more_info_list?.map(
              (info: MoreInfoType, index: number) => (
                <MoreInfoItem key={index} info={info} />
              )
            )}
          </div>
        </S.MoreInfoWrapper>
      )}
    </>
  );
};

export default MoreInfo;
