import styled from "@emotion/styled";


export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 300px;
  label {
    display: block;
    cursor: pointer;
    width: 300px;
    height: 190px;
    background-color: #f2f2f2;
    border: dotted #979797 1px;
    text-align: center;
    margin: auto 0;
    line-height: 190px;
    color: #989898;
    margin-top: 13px;
  }
`;

export const ImageItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  .PreviewURL {
    width: 300px;
    height: 190px;
    object-fit: cover;
    border: dotted #979797 1px;
    margin-top: 13px;
    cursor: pointer;
  }
  span {
    font-size: 14px;
    color: #bbbbbb;
    margin-top: 11px;
    cursor: pointer;
    text-align: center;
  }
  img[alt="쓰레기통"] {
    position: absolute;
    top: 24px;
    right: 3px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div``;
