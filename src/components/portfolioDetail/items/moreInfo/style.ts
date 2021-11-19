import styled from "@emotion/styled";

export const MoreInfoWrapper = styled.div`
  border-bottom: 1px solid #e9e9e9;
  .more-wrapper {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  margin: 15px 0;

  span {
    font-weight: 500;
    font-size: 16px;
  }

  span:nth-of-type(1) {
    padding-right: 10px;
  }

  span:nth-of-type(2) {
    padding-left: 10px;
    border-left: 1px solid #bbbbbb;
  }
`;
