import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmailModal = styled.div`
  width: 300px;
  height: 220px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  font-weight: 700;
  font-size: 20px;

  img {
    width: 150px;
  }

  .text_wrp {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      margin: 5px 0;
    }
  }
`;
