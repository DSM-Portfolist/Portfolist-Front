import styled from "@emotion/styled";
import { mainColor } from "../../../../util/css/color/color";

export const FilterWrapper = styled.div`
  position: relative;
  top: -50px;
  width: 45%;
  height: 100px;
  background-color: white;
  display: flex;
  flex-direction: row;
  box-shadow: 2px 0px 7px rgba(0, 0, 0, 0.25);
`;

export const FilterItem = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MoreItem = styled.div`
  width: 15%;
  height: 100%;
  background-color: ${mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
