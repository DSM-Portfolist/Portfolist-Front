import styled from "@emotion/styled";
import { grayColor } from "../../../../../util/css/color/color";

export const NotificationModuleContainer = styled.section`
  width: 100%;
  height: 120px;
  border-bottom: 2px solid #e7e7e7;
  position: relative;
  & h1 {
    margin-top: 15px;
    font-weight: bold;
    font-size: 27px;
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

export const ToggleButton = styled.div`
  div:nth-child(1) {
    width: 70px;
    height: 35px;
    background: #ff7d64;
    border: 1px solid #d4d4d4;
    box-sizing: border-box;
    border-radius: 25.5px;
  }
  div:nth-child(2) {
    width: 30px;
    height: 29px;
    background: #ffffff;
    border-radius: 50px;
    top: 12px;
    right: 5px; //오른쪽 5px 왼쪽 39px
    transition: 0.5s;
  }
`;
