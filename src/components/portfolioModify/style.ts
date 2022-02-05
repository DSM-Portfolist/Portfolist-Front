import styled from "@emotion/styled";
import { mainColor } from "../../util/css/color/color";

export const MainContainer = styled.div`
  width: 63%;
  min-width: 760px;
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  .caution {
    font-size: 20px;
    color: #848484;
  }

  input {
    ::placeholder {
      color: #c7c7c7;
    }
  }
`;

export const FinshButton = styled.div`
  margin: 50px 0;
  width: 160px;
  height: 40px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  background: #dadada;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  cursor: pointer;

  :hover {
    background-color: ${mainColor};
  }
`;
