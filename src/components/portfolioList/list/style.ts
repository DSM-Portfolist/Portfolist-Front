import styled from "@emotion/styled";
import { mainColor } from "../../../util/css/color/color";
import { TouchingProp } from "../../../util/interface/main/mainType";

export const MainListWrapper = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const ListWrapper = styled.div`
  min-height: 1000px;
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ListItemWrapper = styled.div`
  margin: 25px;
  width: 220px;
  height: 390px;
  box-shadow: 0px 4px 4px rgba(214, 214, 214, 0.25);
  overflow: hidden;
  cursor: pointer;

  .portfoilo-img {
    width: 100%;
    height: 190px;
    transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
    }
  }

  :hover .portfoilo-img {
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;

  .user-profile {
    padding-bottom: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    img {
      margin: 0 5px;
      width: 30px;
      height: 30px;
      border-radius: 50px;
      object-fit: cover;
    }

    span {
      margin-top: 3px;
      font-size: 14px;
    }
  }

  .tag-wrapper {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .tag {
      display: flex;
      flex-direction: row;
    }

    .touching {
      width: 35px;
      height: 45px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        cursor: pointer;
        width: 25px;
        height: 30px;
        object-fit: cover;
      }

      span {
        color: ${({ touchingBoolean }: TouchingProp) =>
          touchingBoolean ? `${mainColor}` : "#C5C5C5"};
        height: 22px;
      }
    }
  }

  .title {
    display: flex;
    flex-direction: column;

    a:nth-child(1) {
      font-weight: 500;
      font-size: 16px;
      color: black;
      cursor: pointer;
    }

    span {
      margin: 8px 0 10px 0;
      font-weight: 400;
      color: #8e8e8e;
      font-size: 14px;
    }
  }
`;

export const Tag = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
  padding: 3px 8px;
  margin-right: 4px;
  align-items: center;
  background: #ff7659;
  border-radius: 20px;
  color: white;
  font-size: 11px;
  font-weight: 400;
`;
