import styled from "@emotion/styled";
import arrowImg from "../../../util/assets/icon/selectedArrow.svg";

export const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FieldItemWrapper = styled.div`
  select {
    width: 150px;
    height: 33px;
    -webkit-appearance: none; /* 네이티브 외형 감추기 */
    -moz-appearance: none;
    appearance: none;
    background: url(${arrowImg}) no-repeat 98% 50%; /* 화살표 모양의 이미지 */
    border-bottom: 3px #ff7659 solid;
    font-size: 17px;
    line-height: 23px;
    color: #000000;
    padding-left: 6px;
    cursor: pointer;
  }
  option {
    cursor: pointer;
  }
`;
