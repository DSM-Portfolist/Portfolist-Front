import { useRecoilValue } from "recoil";
import { portfoilo } from "../../../../modules/atom/portfolio/portfolioDetail";
import { MoreInfoType } from "../../../../util/interface/portfolio/portfolioDetailType";
import MoreInfoItem from "./MoreInfoItem";
import * as S from "./style";

const MoreInfo = () => {
  const portfolioValue = useRecoilValue(portfoilo);

  return (
    <>
      {portfolioValue?.more_info?.length === 0 ? (
        ""
      ) : (
        <S.MoreInfoWrapper>
          <div className="more-wrapper">
            {portfolioValue?.more_info?.map(
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
