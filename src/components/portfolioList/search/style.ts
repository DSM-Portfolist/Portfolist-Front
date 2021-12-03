import styled from "@emotion/styled";
import { loginTextColor, mainColor } from "../../../util/css/color/color";
import { SearchProp } from "../../../util/interface/main/mainType";

interface Props {
  isFocusing?: boolean;
  arrowSelect?: boolean;
}

export const SearchWrapper = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 2px solid #f0f0f0;
  display: flex;
  flex-direction: row;
  align-items: center;

  .field-select {
    display: flex;
    flex-direction: column;
    margin-left: 5%;
  }
`;

export const FieldSelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    color: ${loginTextColor};
    font-size: 18px;
  }

  .categoy_wrap {
    max-width: 230px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      cursor: pointer;
      padding-bottom: 2px;
      width: 100%;
      transition: all 0.3s;
    }
  }
`;

export const ArrowImg = styled.img`
  width: 15px;
  margin-left: 8px;
  cursor: pointer;
  transition: all 0.5s;
`;

export const FieldWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
`;

export const FieldItemWrapper = styled.div`
  margin: 0 10px;
  width: fit-content;
  background: #ff7659;
  border-radius: 20px;
  padding: 8px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    font-size: 15px;
    color: white;
  }

  img {
    margin: 0 0 0 10px;
    cursor: pointer;
  }
`;

// 필드 선택 아이템 스타일
export const FieldSelectItemWrapper = styled.ul`
  z-index: 2;
  width: fit-content;
  overflow: auto;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px rgba(163, 163, 163, 0.25);
  flex-direction: column;
  transition: all 0.5s;
  position: absolute;
  top: 142px;
  border: ${({ arrowSelect }: SearchProp) =>
    arrowSelect ? "1px solid #eaeaea" : "none"};

  li {
    text-align: center;
    padding: 15px 30px;
    cursor: pointer;
  }
`;

export const SearchInput = styled.div<Props>`
  width: 36%;
  height: 35px;
  box-shadow: ${({ isFocusing }) =>
    isFocusing ? "0 2px 13px #c7c7c7" : "none"};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.5s;

  .select-box {
    width: 50px;
    padding: 8px;
    background-color: ${mainColor};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    span {
      cursor: pointer;
    }
  }

  input {
    margin-left: 6px;
    width: 70%;
    font-size: 16px;
    transform: skew(-0.1deg);

    ::placeholder {
      font-size: 16px;
      transform: skew(-0.1deg);
    }
  }
`;

export const Filter = styled.div<Props>`
  width: 12%;
  position: relative;
  font-size: 15px;

  .categoy_wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #c7c7c7;
    border-radius: 2px;
  }

  .filter-wrap {
    display: ${({ arrowSelect }) => (arrowSelect ? "flex" : "none")};
    flex-direction: column;
    background-color: white;
    border-radius: 2px;
    border: 1px solid #c7c7c7;
    padding: 5px;
    box-sizing: border-box;
    z-index: 2;
    position: absolute;
    width: 100%;

    li {
      padding: 10px 5px;
      cursor: pointer;
    }
  }
`;
