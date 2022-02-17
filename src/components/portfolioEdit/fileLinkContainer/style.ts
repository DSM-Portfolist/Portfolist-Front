import styled from "@emotion/styled";

export const MainWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  & h1 {
    font-size: 18px;
    color: #000000;
    margin-bottom: 30px;
    font-weight: 500;
  }
`;

export const LinkWrapper = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  gap: 13px;
  transition: 0.5s;

  & img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }

  & input {
    font-size: 16px;

    &::placeholder {
      color: #7c7c7c;
    }
  }
`;

export const FileWrapper = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  gap: 13px;
  transition: 0.5s;

  & img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }

  & input {
    display: none;
  }

  & p {
    font-size: 16px;
    color: #7c7c7c;
  }

  & label {
    cursor: pointer;
  }
`;
