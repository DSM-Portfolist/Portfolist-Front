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
  margin-top: 80px;

  img {
    width: 100vw;
    height: 600px;
    object-fit: cover;
  }
`;

export const BannerContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;
  top: 240px;
  left: 200px;

  .top-content {
    display: flex;
    flex-direction: column;
    color: white;

    span {
      font-family: "Noto Serif KR", serif;
      font-weight: 700;
      font-size: 40px;
    }

    span:last-child {
      font-family: "Prociono", serif;
      font-weight: 300;
      font-size: 24px;
    }
  }

  .title-content {
    margin-top: 20px;
    font-size: 60px;
    color: white;

    span {
      font-family: "Prociono", serif;
      font-weight: 400;
    }
  }
`;
