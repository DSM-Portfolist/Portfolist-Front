import styled from "@emotion/styled";

export const MainWrapper = styled.section`
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
    font-size: 18px;

    &::placeholder {
      color: #989898;
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
    font-size: 18px;
    color: #989898;
  }

  & label {
    cursor: pointer;
  }
`;
