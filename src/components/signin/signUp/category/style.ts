import styled from "@emotion/styled";

export const CategoryItemWrap = styled.ul`
  overflow: auto;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px rgba(163, 163, 163, 0.25);
  flex-direction: column;
  transition: all 0.5s;

  li {
    text-align: center;
    padding: 3px;
    cursor: pointer;
  }
`;
