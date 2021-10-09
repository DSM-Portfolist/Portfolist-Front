import styled from "@emotion/styled";
import { transform } from "typescript";
import { Magnifier } from "../../../util/assets";
import { headerLineColor, mainColor } from "../../../util/css/color/color";
import {
  MagnifierProp,
  NotificationProp,
} from "../../../util/interface/main/mainType";

export const HeaderWrapper = styled.section`
  width: 100%;
  height: 80px;
  border-bottom: 3px solid ${headerLineColor};
`;

export const Container = styled.div`
  background-color: white;
  margin: 0 auto;
  padding: 0 3%;
  width: 94%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 5;

  .logo {
    display: flex;
    width: 26%;
    align-items: center;
    justify-content: space-between;

    a {
      color: black;
    }
  }

  ul {
    display: flex;
    align-items: center;

    .list-item {
      margin: 0 40px;
    }

    a,
    li {
      margin: 0 15px;
      align-items: center;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
      color: black;

      .magnifier-img {
        margin-top: 5px;
        cursor: pointer;
      }

      img {
        width: 25px;
      }

      span {
        font-family: "Prociono", serif;
        cursor: pointer;
      }
    }
  }
`;

export const NotiWrapper = styled.li`
  position: relative;

  .noti-img {
    width: 25px;
    margin-top: 4px;
    height: 25px;
    cursor: pointer;
  }

  .profile-img {
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50px;
    cursor: pointer;
  }
`;

export const Notification = styled.div`
  width: 350px;
  background: #ffffff;
  border: ${({ notification }: NotificationProp) =>
    notification ? "1px solid #eaeaea" : "none"};
  position: absolute;
  top: 62px;
  right: -30px;
  transition: all 0.5s;
  z-index: 1;
  overflow: hidden;
  box-shadow: 0px 7px 6px rgba(164, 164, 164, 0.25);
`;

export const BeforeLoginHeader = styled(Container)`
  button {
    border: 1px solid #ff7659;
    border-radius: 20px;
    width: 110px;
    height: 40px;
    background-color: white;
    color: ${mainColor};
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    transition: 0.8s;

    :hover {
      box-shadow: 0 2px 3px #80808040;
      background-color: ${mainColor};
      color: white;
    }
  }
`;

export const MoreItem = styled.ul`
  position: absolute;
  right: -44px;
  top: 40px;
  width: 120px;
  background: #ffffff;
  box-shadow: 0px 4px 9px rgba(164, 164, 164, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: 0.5s;
  overflow: hidden;
  cursor: auto;
  z-index: 1;
`;

export const MagnifierWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${mainColor};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ magnifier }: MagnifierProp) =>
    magnifier ? `translateY()` : `translateY(-80px)`};
  position: absolute;
  transition: transform ease 0.4s;
  z-index: 2;
`;

export const Input = styled.div`
  width: 50%;
  height: 50px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  input {
    width: 80%;
    font-size: 16px;
  }

  img {
    width: 25px;
    cursor: pointer;
  }
`;
