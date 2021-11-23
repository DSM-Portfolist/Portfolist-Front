import styled from "@emotion/styled";

export const BannerWrap = styled.section`
  padding: 60px 0;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;

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
  }
`;

export const ImageWrap = styled.div`
  margin: 50px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: auto;

  img {
    width: 190px;
    height: 280px;
    object-fit: cover;
    box-sizing: border-box;
    cursor: pointer;
  }
`;
