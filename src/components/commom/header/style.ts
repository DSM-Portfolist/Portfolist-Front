import styled from "@emotion/styled";
import { mainColor } from "../../../util/css/color/color";

interface Props {
  isFocusing?: boolean;
  noti?: boolean;
}

export const HeaderWrapper = styled.section`
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: white;
  z-index: 6;
  top: 0;
`;

export const Container = styled.div`
  background-color: white;
  box-sizing: border-box;
  padding: 0 13%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 5;

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: #5a5a5a;
      font-weight: 500;
      font-size: 17px;
      margin-right: 27px;
    }
  }

  ul {
    display: flex;
    align-items: center;

    .list-item {
      margin: 0 40px;

      span {
        font-size: 17px;
        cursor: pointer;
      }
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
        // width: 25px;
      }
    }
  }
`;

export const MoreItem = styled.ul`
  padding: 15px;
  position: absolute;
  width: 250px;
  height: 368px;
  top: 37px;
  right: -5px;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  box-shadow: 0px 4px 9px rgba(92, 92, 92, 0.25);
  border-radius: 10px;
  background: #ffffff;
  flex-direction: column;
  overflow: hidden;
  cursor: auto;
  z-index: 1;
`;

export const MagnifierWrapper = styled.div<Props>`
  width: 100%;
  height: 80px;
  background-color: ${mainColor};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ isFocusing }) =>
    isFocusing ? `translateY()` : `translateY(-80px)`};
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
  align-items: center;

  input {
    width: 80%;
    font-size: 16px;
    transform: skew(-0.1deg);

    ::placeholder {
      transform: skew(-0.1deg);
    }
  }

  img {
    //width: 25px;
    cursor: pointer;
  }
`;

export const MoreItemInfo = styled.div`
  width: 100%;
  display: flex;
  padding: 5px;
  box-sizing: border-box;
  border-bottom: 2px solid ${mainColor};
   img {
    border-radius: 50px;
    width: 40px;
    height: 40px;
  }

  .info_wrpaper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 1rem;

    span:nth-of-type(1) {
      font-size: 16px;
    }
    span:nth-of-type(2) {
      font-size: 14px;
    }
  }
`;
