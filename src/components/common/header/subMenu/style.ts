import styled from "@emotion/styled";
import { mainColor } from "../../../../util/css/color/color";

export const MoreItemInfo = styled.div`
  width: 100%;
  display: flex;
  padding: 5px;
  box-sizing: border-box;
  border-bottom: 2px solid ${mainColor};
  img {
    border-radius: 50px;
    width: 45px;
    height: 45px;
  }

  .info_wrpaper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 0.7rem;

    span:nth-of-type(1) {
      font-size: 16px;
    }
    span:nth-of-type(2) {
      font-size: 14px;
      color: #555555;
    }
  }
`;

export const ItemBox = styled.div`
  width: 240px;
  height: 42px;
  display: flex;
  align-items: center;
`;
