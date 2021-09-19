import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

export const BannerWrapper = styled.div`
  width: 300vw;
  display: flex;
  flex-direction: row;

  img {
    width: 100vw;
    height: 600px;
    object-fit: cover;
  }
`;
