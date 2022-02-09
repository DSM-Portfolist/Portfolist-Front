import styled from "@emotion/styled";
import { mainColor } from "../../../util/css/color/color";

export const IntroduceWrapper = styled.div`
  margin: 90px auto;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin: 80px 0;
    width: 130px;
    height: 55px;
    background-color: #ffc2b6;
    box-shadow: 0px 2px 7px rgba(92, 92, 92, 0.25);
    border-radius: 20px;
    color: white;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.5s;

    :hover {
      background: #ff7659;
    }
  }

  .content {
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    color: #909090;
    transition: all 0.5s;
    font-size: 45px;
    font-weight: 300;

    span {
      font-family: "Noto Sans KR", sans-serif;
    }

    :hover {
      color: black;
    }

    .content-item {
      display: flex;
      flex-direction: row;
    }

    :hover .portfolist {
      transition: all 0.5s;
      border-bottom: 4px solid ${mainColor};
    }

    :hover .portfolio {
      transition: all 0.5s;
      border-bottom: 8px solid ${mainColor};
    }

    :hover .content-icon {
      transition: opacity 0.8s ease-in-out 0s;
      opacity: 1;
    }
  }
`;

export const Portfolist = styled.div`
  font-family: "Prociono", serif;
  font-weight: 400;
`;

export const Porfolio = styled.div`
  font-weight: 400;
`;

export const PortItem = styled.div`
  font-weight: 400;
  position: relative;

  img {
    opacity: 0;
    position: absolute;
    z-index: -1;
    top: 15px;
    right: 4px;
  }
`;
