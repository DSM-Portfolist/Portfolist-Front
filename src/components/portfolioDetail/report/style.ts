import styled from "@emotion/styled";
import { mainColor } from "../../../util/css/color/color";

interface Props {
  madal?: boolean;
}

export const Wrapper = styled.section<Props>`
  width: 100%;
  height: 100vh;
  display: ${({ madal }) => (madal ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.41);
  position: fixed;
  top: 0;
  z-index: 10;
  overflow: hidden;
`;

export const ReportModal = styled.div`
  padding: 1.5rem;
  box-sizing: border-box;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 3px #80808040;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 400px;

  img {
    width: 100px;
  }

  button {
    width: 70%;
    background-color: ${mainColor};
    padding: 8px 15px;
    color: white;
    border-radius: 5px;
  }

  .input_wrapper {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      resize: none;
      width: 100%;
      padding: 0.5rem;
      box-sizing: border-box;
      border-radius: 3px;
      border: 1px solid #efefef;
      margin: 10px 0;
    }

    textarea {
      height: 200px;
    }
  }
`;
