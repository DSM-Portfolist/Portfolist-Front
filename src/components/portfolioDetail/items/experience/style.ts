import styled from "@emotion/styled";

export const ExperienceWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
`;

export const MainTitle = styled.span`
  font-size: 24px;
`;

export const ContainerBox = styled.div`
  margin-top: 30px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  width: 100%;

  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentWraper = styled.div`
  padding-left: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans KR";
  
  .sub-title {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
  }

  .sub-content {
    font-size: 17px;
  }
`;
