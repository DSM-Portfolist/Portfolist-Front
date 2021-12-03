import styled from "@emotion/styled";
import { mainColor } from "../../../../util/css/color/color";

export const FieldItemWrapper = styled.div`
  margin: 0 10px 0 0;
  background: #ff7659;
  border-radius: 20px;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
  transform: skew(-0.1deg);
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const TitleInfo = styled.div`
  padding-top: 40px;
  margin-bottom: 20px;
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
  justify-content: flex-end;
  align-items: center;

  .user-profile {
    color: black;
    display: flex;
    align-items: center;
    margin-left: 30px;

    a {
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

export const ModifyWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 20px;
    font-size: 14px;
    padding: 7px 10px;
    border: 1px solid ${mainColor};
    border-radius: 8px;
    color: ${mainColor};
    cursor: pointer;
    background-color: white;
    transition: all 0.8s;

    :hover {
      color: white;
      background-color: ${mainColor};
      box-shadow: 0 2px 3px #80808040;
    }
  }
`;

export const HeadTitle = styled.div`
  margin: 40px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e9e9e9;

  .title {
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 25px;
  }

  .sub-title {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 25px;
  }
`;
