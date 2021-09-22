import styled from "@emotion/styled";
import { headerLineColor, mainColor } from "../../../util/css/color/color";
import { NotificationProp } from "../../../util/interface/main/mainType";

export const HeaderWrapper = styled.section`
  width: 100%;
  height: 80px;
  border-bottom: 3px solid ${headerLineColor};
`;

export const Container = styled.div`
  margin: 0 200px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;

    .list-item {
      margin: 0 100px;
    }

    li {
      margin: 0 15px;
      align-items: center;
      font-weight: 500;
      cursor: pointer;

      span {
        font-family: "Prociono", serif;
      }

      .profile-img {
        width: 40px;
        border-radius: 50px;
      }
    }
  }
`;

export const NotiWrapper = styled.li`
  position: relative;
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
