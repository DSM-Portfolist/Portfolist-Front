import { useRecoilValue } from "recoil";
import { getPortfolioSelecor } from "../../../../modules/atom/portfolio/portfolioDetail";
import * as S from "./style";

const CertificateList = () => {
  const portfolioValue = useRecoilValue(getPortfolioSelecor);

  return (
    <>
      {portfolioValue?.certificate_container_list.map((item, index) => (
        <S.Wrap key={index}>
          <span className="title">{item?.title}</span>
          {item.certificate_list.map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </S.Wrap>
      ))}
    </>
  );
};

export default CertificateList;
