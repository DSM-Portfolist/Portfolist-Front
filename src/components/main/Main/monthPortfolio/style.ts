import styled from "@emotion/styled";

export const MonthWrapper = styled.div`
  width: 800px;
  height: 400px;
  margin: 90px auto;
  display: flex;
  flex-direction: row;

  .img-wrapper {
    width: 250px;
    height: 360px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;
      overflow: hidden;

      :hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const Content = styled.div`
  margin-left: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .introduce {
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
  }
  .user-introduce {
    margin: 40px 0;
    font-weight: 300;
    font-size: 20px;
  }

  .user-content {
    margin: 140px 0;
    font-size: 20px;
    font-weight: 300;
  }

  h2 {
    font-weight: 400;
    font-size: 24px;
  }
`;
