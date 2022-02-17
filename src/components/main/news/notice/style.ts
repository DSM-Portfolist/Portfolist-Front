import styled from "@emotion/styled";

export const NoticeItem = styled.div`
  padding: 9px;
  position: relative;
  margin: 10px;

  img {
    position: absolute;
    z-index: 3;
    top: -5px;
    left: 1px;
  }
`;

export const Content = styled.span`
  color: #4d4d4d;
  font-size: 18px;
`;
