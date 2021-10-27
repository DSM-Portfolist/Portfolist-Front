import styled from "@emotion/styled";

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  position: relative;
  .Title {
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    color: #000000;
  }
  .Introduce {
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #000000;
  }
  input::placeholder {
    color: #8b8b8b;
  }
  span {
    position: absolute;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #ff7878;
  }
  .title-span {
    left: 298px;
    top: -4px;
  }
  .introduce-span {
    left: 236px;
    top: -9px;
  }
`;
