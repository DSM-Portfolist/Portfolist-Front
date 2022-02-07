import { FooterGithub, FooterLogo } from "../../../util/assets";
import * as S from "./style";

const Footer = () => {
  return (
    <S.FooterWrap>
      <div className="logo">
        <img src={FooterLogo} alt="로고" />
        <span>포트폴리스트는 여러분을 응원합니다.</span>
        <span>© portfolist 2021</span>
      </div>
      <div className="developer-container">
        <ul className="developer-info">
          <li>대덕소프트웨어마이스터고등학교</li>
          <li>프로젝트 실무 현X3빈</li>
        </ul>
        <div className="developer-info-wrapper">
          <a href="https://github.com/DSM-Portfolist">
            <img src={FooterGithub} alt="깃허브아이콘" />
          </a>
          <ul>
            <li>FRONTEND</li>
            <a href="https://github.com/silverbeen">강은빈</a>
            <a href="https://github.com/hoohoo0889">김재현</a>
          </ul>
          <ul>
            <li>SERVER</li>
            <a href="https://github.com/domythang">곽도현</a>
            <a href="https://github.com/dohyeon5626">고도현</a>
          </ul>
        </div>
      </div>
    </S.FooterWrap>
  );
};

export default Footer;
