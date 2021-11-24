import styled from "@emotion/styled";
import { mainColor } from "../../../../util/css/color/color";

interface Props {
  arrowSelect: boolean;
}

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  top: -50px;
  width: 45%;
  height: 100px;
  background-color: white;
  box-shadow: 2px 0px 7px rgba(0, 0, 0, 0.25);
`;

export const FilterItemWrap = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;

    #field-text {
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 15px;
    }

    .filter-wrap {
      display: flex;
      flex-direction: row;
      gap: 20px;
      align-items: flex-end;

      .field-item-wrap {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .filed-wrap {
          width: 100%;
          width: 85%;
          position: relative;

          .category_wrap {
            padding-bottom: 5px;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
        }
      }
    }
  }
`;

export const ArrowImg = styled.img`
  width: 15px;
  margin-left: 8px;
  cursor: pointer;
  transition: all 0.5s;
`;

export const MoreItem = styled.div`
  width: 15%;
  height: 100%;
  background-color: ${mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const FieldSelectWrap = styled.div<Props>`
  display: ${({ arrowSelect }) => (arrowSelect ? "flex" : "none")};
  z-index: 2;
  width: fit-content;
  overflow: auto;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px rgba(163, 163, 163, 0.25);
  flex-direction: column;
  transition: all 0.5s;
  position: absolute;
  top: 28px;

  li {
    text-align: center;
    padding: 15px 30px;
    cursor: pointer;
  }
`;
