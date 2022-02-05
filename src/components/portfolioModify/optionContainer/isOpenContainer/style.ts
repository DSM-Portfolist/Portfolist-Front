import styled from "@emotion/styled";

interface Props {
  isClick: boolean;
}

export const MainContainer = styled.div`
  display: flex;
  align-items: center;

  & h1 {
    font-size: 24px;
    color: #7c7c7c;
    padding-right: 20px;
  }
`;

export const ToggleButton = styled.div<Props>`
  cursor: pointer;
  position: relative;

  .div1 {
    width: 70px;
    height: 35px;
    background: ${({ isClick }) =>
      isClick ? "#ff7d64" : "rgb(233, 236, 239)"}; //rgb(233, 236, 239) ff7d64
    box-sizing: border-box;
    border-radius: 25.5px;
  }

  .div2 {
    position: absolute;
    width: 30px;
    height: 29px;
    background: #ffffff;
    border-radius: 50px;
    right: ${({ isClick }) => (isClick ? "5px" : "35px")};
    transition: 0.5s;
    top: 3px;
  }
`;
