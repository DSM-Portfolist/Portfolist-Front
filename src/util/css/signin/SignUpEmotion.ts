import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { loginTextColor, mainColor } from "../color/color";

export const FieldSelectWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;

  span {
    color: ${loginTextColor};
    font-size: 18px;
  }

  .categoy_wrap {
    margin-left: 5%;
    width: 60%;

    p {
      border-bottom: 2px solid ${mainColor};
      padding-bottom: 2px;
      width: 100%;
    }
  }
`;

export const ArrowImg = styled.img`
  width: 15px;
  margin-left: 8px;
  cursor: pointer;
  transition: all 0.5s;
`;

export const CategoryItemWrap = css`
  //height: 200px;
  overflow: auto;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px rgba(163, 163, 163, 0.25);
  flex-direction: column;
  transition: all 0.5s;

  li {
    text-align: center;
    padding: 3px;
    cursor: pointer;
  }
`;
