import styled from "@emotion/styled";

export const Touching = styled.div`
  width: 80px;
  height: 120px;
  position: absolute;
  right: -133px;
  top: 230px;
`;

export const TouchingBox = styled.div`
  position: fixed;
  width: 80px;
  height: 122px;
  background: #ff7659;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 10px;
    color: white;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const TouchingBack = styled.div`
  cursor: pointer;
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
