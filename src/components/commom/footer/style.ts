import styled from "@emotion/styled";

export const FooterWrap = styled.section`
  background-color: #f5927d;
  width: 100%;
  height: 400px;
  box-sizing: border-box;
  padding: 3% 13%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .logo {
    display: flex;
    flex-direction: column;

    & img {
      width: 110px;
    }
    & span {
      margin-top: 10px;
    }
  }

  .developer-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    .icon img {
      width: 30px;
    }

    & ul {
      margin: 0 0 0 50px;
      display: flex;
      flex-direction: column;
      align-items: center;

      & li {
        font-weight: 600;
        margin-top: 5px;
      }
    }
  }
`;
