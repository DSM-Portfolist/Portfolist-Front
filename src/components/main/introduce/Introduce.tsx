import { useHistory } from "react-router";
import { MainContentItem } from "../../../util/assets";
import * as S from "./style";

const Introduce = () => {
  const history = useHistory();

  return (
    <div className="border-bottom">
      <S.IntroduceWrapper>
        <div className="content">
          <span>이제 당신의 포트폴리오를</span>
          <div className="content-item">
            <S.Portfolist className="portfolist">portfolist </S.Portfolist>
            <span>로 제작해보세요.</span>
          </div>
        </div>
        <div className="content">
          <div className="content-item">
            <span>다양한 개발자들과 포트폴리오를&nbsp;</span>
            <S.PortItem>
              <span>공유</span>
              <img
                className="content-icon"
                src={MainContentItem}
                alt="강조 아이콘"
              />
            </S.PortItem>
            <span>하고</span>
          </div>
          <div className="content-item">
            <span>마음껏&nbsp;</span>
            <S.PortItem>
              <span>소통&nbsp;</span>
              <img
                className="content-icon"
                src={MainContentItem}
                alt="강조 아이콘"
              />
            </S.PortItem>
            <span>해보세요.</span>
          </div>
        </div>
        <div className="content">
          <span>많은 포트폴리오를 구경하고 자신만의</span>
          <div className="content-item">
            <S.Porfolio className="portfolio">포트폴리오</S.Porfolio>
            <span>를 만들어 보아요.</span>
          </div>
        </div>

        <button onClick={() => history.push("/login")}>시작하기</button>
      </S.IntroduceWrapper>
    </div>
  );
};

export default Introduce;
