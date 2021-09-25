import styled from "@emotion/styled";
import { mainColor } from "../../../../util/css/color/color";

export const NewsWrapper = styled.div`
  width: 900px;
  height: 350px;
  margin: 90px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NewsItemWrapper = styled.div`
  width: 400px;
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  border-bottom: 3px solid ${mainColor};
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 300px;
  background: #fdfdfd;
  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 4px rgba(155, 155, 155, 0.25);
`;
