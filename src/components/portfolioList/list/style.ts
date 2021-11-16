import styled from "@emotion/styled";
import { mainColor } from "../../../util/css/color/color";
import { TouchingProp } from "../../../util/interface/main/mainType";

export const MainListWrapper = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

export const ListWrapper = styled.div`
  min-height: 1000px;
  background-color: white;
  display: flex;
  flex-direction: column;

  .list-not-comment {
    color: gray;
    margin: 30px 0;
    font-size: 18px;
  }
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SearchContent = styled.span`
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
  font-weight: 700;
`;

export const ListItemWrapper = styled.div`
  border-radius: 3px;
  margin: 1.17rem;
  width: 15rem;
  height: 390px;
  box-shadow: 0px 4px 4px rgba(214, 214, 214, 0.25);
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;

  .portfoilo-img {
    width: 100%;
    height: 190px;
    overflow: hidden;

    img {
      transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  :hover .portfoilo-img img {
    transform: scale(1.1);
  }

  :hover {
    box-shadow: 0px 4px 9px rgb(214 214 214 / 57%);
    transform: translateY(-10px);
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
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    a {
      color: black;
      margin-top: 4px;
      font-size: 13px;

      strong {
        cursor: pointer;
        font-size: 15px;
      }
    }

    img {
      margin: 0 5px;
      width: 25px;
      height: 25px;
      border-radius: 50px;
      object-fit: cover;
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
        width: 21px;
        height: 22px;
        object-fit: cover;
      }

      span {
        color: ${({ touchingBoolean }: TouchingProp) =>
          touchingBoolean ? `${mainColor}` : "#C5C5C5"};
        height: 22px;
        font-size: 13px;
      }
    }
  }

  .title {
    display: flex;
    flex-direction: column;

    a:nth-of-type(1) {
      font-weight: 700;
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
