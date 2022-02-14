import styled from "@emotion/styled";
import { grayColor } from "../../../../util/css/color/color";

interface Props {
  isClick: boolean;
}

export const NotificationModuleContainer = styled.section`
  width: 100%;
  height: 120px;
  border-bottom: 2px solid #e7e7e7;
  position: relative;
  & h1 {
    margin-top: 15px;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
  }
  & p {
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: ${grayColor};
    margin-top: 25px;
  }
  & div {
    position: absolute;
    top: 9px;
    right: 2px;
    cursor: pointer;
  }
`;

export const ToggleButton = styled.div<Props>`
  div:nth-of-type(1) {
    width: 70px;
    height: 35px;
    background: ${({ isClick }) =>
      isClick ? "#ff7d64" : "rgb(233, 236, 239)"}; //rgb(233, 236, 239) ff7d64
    box-sizing: border-box;
    border-radius: 25.5px;
  }
  div:nth-of-type(2) {
    width: 30px;
    height: 29px;
    background: #ffffff;
    border-radius: 50px;
    top: 12px;
    right: ${({ isClick }) =>
      isClick ? "5px" : "39px"}; //오른쪽 5px 왼쪽 39px
    transition: 0.5s;
  }
`;
