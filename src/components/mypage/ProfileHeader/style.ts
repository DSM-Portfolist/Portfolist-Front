import styled from "@emotion/styled";
import { mainColor } from "../../../util/css/color/color";

export const FieldItem = styled.div`
  margin: 0 10px;
  width: fit-content;
  border: 1.5px solid ${mainColor};
  border-radius: 20px;
  padding: 4px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${mainColor};
  font-size: 17px;
  transform: skew(-0.1deg);
`;

export const Wrapper = styled.section`
  padding-bottom: 30px;
  width: 100%;
  height: 200px;
  border-bottom: 2px solid #e7e7e7;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid #ebebeb;
  border-radius: 100%;
  background-size: cover;
  object-fit: cover;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  margin: 0 0 10px 50px;
  display: flex;
  flex-direction: column;

  & h1 {
    font-weight: bold;
    font-size: 44px;
    line-height: 70px;
  }
  & #introduce {
    font-size: 24px;
    line-height: 41px;
  }
`;

export const ProfileBottom = styled.div`
  margin-top: 13px;
  width: 100%;
  position: relative;
  align-items: center;
  display: flex;

  & h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    margin-right: 5px;
  }
  & p {
    font-size: 18px;
    line-height: 23px;
    margin-right: 15px;
  }
  & a {
    width: 120px;
    height: 30px;
    position: absolute;
    right: 0;

    & button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  & button {
    width: 120px;
    height: 30px;
    background: #ff7d64;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    transition: all 0.5s;

    :hover {
      box-shadow: 0 2px 3px #80808040;
    }
  }
`;
