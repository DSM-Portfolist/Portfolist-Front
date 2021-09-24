import styled from "@emotion/styled";
import { portfolioBackColor } from "../../../util/css/color/color";

export const MainListWrapper = styled.section`
  background-color: ${portfolioBackColor};
  display: flex;
  flex-direction: column;
`;

export const ListWrapper = styled.div`
  margin: 0 auto;
  width: 1400px;
  height: 1000px;
  background-color: white;

  img {
    width: 100%;
    height: 190px;
    object-fit: cover;
  }
`;

export const ListItemWrapper = styled.div`
  width: 240px;
  height: 360px;
  box-shadow: 0px 4px 4px rgba(214, 214, 214, 0.25);
`;

export const Content = styled.div`
  width: 100%;

  .user-profile {
    img {
      width: 30px;
      height: 30px;
      border-radius: 50px;
      object-fit: cover;
    }
  }
`;

export const Tag = styled.div`
  background: #ff7659;
  border-radius: 20px;
  color: white;
  padding: 3px;
  font-size: 13px;
  font-weight: 400;
`;
