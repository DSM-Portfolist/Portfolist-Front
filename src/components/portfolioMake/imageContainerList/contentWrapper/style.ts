import styled from "@emotion/styled";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 13px 0 0 40px;
  width: 100%;
`;

export const BoxItem = styled.div`
  &:nth-child(n + 2) {
    margin-top: 10px;
  }
  .Title {
    display: flex;
    align-items: center;
    width: 100%;
    input {
      width: 100%;
      height: 30px;
      font-weight: 500;
      font-size: 20px;
      color: #000000;
    }
    input::placeholder {
      color: #bbbbbb;
    }
    img {
      cursor: pointer;
    }
  }
  .Content {
    font-size: 16px;
    margin-top: 10px;
    color: #000000;
    overflow-y: scroll;
    width: 100%;
    height: 70px;
    &::placeholder {
      color: #bbbbbb;
    }
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-track {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      background: #ff7659;
      border-radius: 5px;
    }
  }
  .addContent {
    font-size: 12px;
    color: #bbbbbb;
    cursor: pointer;
  }
`;
