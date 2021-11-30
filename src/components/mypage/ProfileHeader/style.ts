import styled from "@emotion/styled";
import { mainColor } from "../../../util/css/color/color";

export const FieldItem = styled.div`
  margin: 0 10px;
  width: fit-content;
  border: 1.5px solid ${mainColor};
  border-radius: 20px;
  padding: 4px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${mainColor};
  font-size: 17px;
  transform: skew(-0.1deg);
`;
