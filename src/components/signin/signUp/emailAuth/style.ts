import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.41);
`;

export const EmailModal = styled.div`
  width: 300px;
  height: 250px;
  background-color: white;
  box-shadow: 0 2px 3px #80808040;

  .text_wrp {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
