import React from "react";
import * as S from "./style";

const PrecautionsContainer = () => {
  return (
    <S.TextContainer>
      <h1>제작하시기 전! 읽어주세요!</h1>
      <p>
        파일 혹은 링크 첨부로 포트폴리오를 업로드 하실 경우 제목 / 본인 소개 /
        배너 이미지를 필수로 작성해주세요.
      </p>
      <p>
        창의력을 발휘하여 독특한 나만의 포트폴리오를 만든후 여러 사람들에게
        공유하세요!
      </p>
      <span>
        무단으로 Portfolist를 배포하시게 된다면 저작권에 위배 될 수 있어요!
      </span>
    </S.TextContainer>
  );
};

export default PrecautionsContainer;
