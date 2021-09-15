import styled from "@emotion/styled";
import { headerLineColor } from "../../../util/css/color/color";

export const HeaderWrapper = styled.section`
  width: 100%;
  height: 80px;
  border-bottom: 3px solid ${headerLineColor};
`;

export const Container = styled.div`
  margin: 0 200px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;

    li {
      margin: 0 15px;
    }
  }
`;
