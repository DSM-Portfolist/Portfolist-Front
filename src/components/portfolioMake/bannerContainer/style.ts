import styled from "@emotion/styled";

export const BannerWrap = styled.section`
  padding: 60px 0;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;

  span:nth-of-type(2) {
    margin-top: 5px;
    color: #c7c7c7;
    font-size: 18px;
  }

  .file-wrap {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    input {
      display: none;
    }

    label {
      cursor: pointer;
      display: flex;
      align-items: center;
      p {
        color: #989898;
        font-size: 18px;
        margin-left: 10px;
        line-height: 10px; /* 이거 figma 복붙아닙니다 */
      }
    }
  }
`;

export const ImageWrap = styled.div`
  margin: 50px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: auto;
  flex-wrap: wrap;
  gap: 10px;

  &::-webkit-scrollbar {
    width: 7px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff7659;
    border-radius: 4px;
  }

  img {
    width: 175px;
    height: 280px;
    object-fit: cover;
    box-sizing: border-box;
    cursor: pointer;
  }
`;
