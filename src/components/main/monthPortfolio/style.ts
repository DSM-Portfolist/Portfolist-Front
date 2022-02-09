import styled from "@emotion/styled";

export const MonthWrapper = styled.div`
  width: 800px;
  height: 400px;
  margin: 90px auto;
  display: flex;
  flex-direction: row;
  position: relative;

  .crwon-icon {
    width: 70px;
    height: 70px;
    position: absolute;
    top: -66px;
    left: 89px;
  }

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
    font-size: 18px;
    line-height: 26px;
    color: #4e4e4e;
  }
  .user-introduce {
    margin: 40px 0;
    font-size: 20px;
    p {
      padding-top: 10px;
    }
  }

  .user-content {
    margin: 140px 0;
    font-size: 20px;
  }

  h2 {
    font-weight: 600;
    font-size: 28px;
    padding-bottom: 10px;
  }
`;
