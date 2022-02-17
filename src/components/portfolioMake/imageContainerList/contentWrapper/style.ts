import styled from "@emotion/styled";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  margin: 10px 0 20px 40px;
  width: 100%;
  height: 100%;
`;

export const BoxItem = styled.div`
  width: 100%;
  height: fit-content;

  &:nth-of-type(n + 2) {
    margin-top: 10px;
  }
  .Title {
    display: flex;
    align-items: center;
    width: 100%;

    input {
      line-height: 25px;
      font-size: 18px;
      width: 100%;
      height: 30px;
      font-weight: 600;
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

  & textarea {
    font-size: 16px;
    margin-top: 10px;
    line-height: 30px;
    display: block;
    width: 100%;
    resize: none;
    // overflow: hidden;

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
    margin-bottom: 15px;
    font-size: 12px;
    color: #bbbbbb;
    cursor: pointer;
  }
`;
