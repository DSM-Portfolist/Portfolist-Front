import styled from "@emotion/styled";

export const MainWrapper = styled.section`
  .titleWrapper {
    display: flex;
    align-items: center;
    h1 {
      font-weight: 500;
      font-size: 20px;
      color: #7c7c7c;
      margin-right: 15px;
    }
    img {
      cursor: pointer;
    }
  }
  .infoContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  input:nth-of-type(1) {
    width: 67px;
  }
  input:nth-of-type(2) {
    width: 200px;
  }
  input {
    &::placeholder {
      font-weight: 500;
      font-size: 18px;
      color: rgba(85, 85, 85, 0.4);
    }

    font-weight: 500;
    font-size: 18px;
    color: #000000;
  }
  div {
    width: 1px;
    height: 18px;
    background: rgba(85, 85, 85, 0.4);
    margin: 0 5px 0 10px;
  }
  img {
    margin-left: 10px;
    cursor: pointer;
  }
`;
