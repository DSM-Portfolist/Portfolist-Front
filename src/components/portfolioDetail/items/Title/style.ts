import styled from "@emotion/styled";

export const FieldItemWrapper = styled.div`
  margin: 0 10px;
  background: #ff7659;
  border-radius: 20px;
  padding: 5px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const TitleInfo = styled.div`
  padding-top: 40px;
  margin-bottom: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FieldWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
`;

export const DateWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .user-profile {
    display: flex;
    align-items: center;

    span {
      font-weight: 500;
      cursor: pointer;
    }

    img {
      cursor: pointer;
      margin-left: 15px;
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50px;
    }
  }
`;

export const HeadTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #E9E9E9;

  span:nth-child(1) {
    font-size: 60px;
    margin-bottom: 15px;
  }

  .title {
    font-size: 35px;
    font-weight: 400;
    margin-bottom: 25px;
  }

  .sub-title {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 25px;
  }
`;