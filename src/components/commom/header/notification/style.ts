import styled from "@emotion/styled";
import { mainColor } from "../../../../util/css/color/color";

interface Props {
  isFocusing?: boolean;
  noti?: boolean;
}

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

export const Notification = styled.div<Props>`
  width: 350px;
  background: #ffffff;
  border: ${({ noti }) => (noti ? "1px solid #eaeaea" : "none")};
  position: absolute;
  top: 32px;
  right: -30px;
  transition: all 0.5s;
  z-index: 1;
  overflow: auto;
  box-shadow: 0px 7px 6px rgba(164, 164, 164, 0.25);
  display: flex;
  flex-direction: column;

  .notification-none {
    margin: 10px;
  }
`;

export const NotiMent = styled.div`
  margin: 7px 10px 0 10px;
  font-size: 16px;
  font-family: "NanumSquare";
  display: flex;
  flex-direction: row;

  span:nth-of-type(1) {
    color: ${mainColor};
  }
`;
