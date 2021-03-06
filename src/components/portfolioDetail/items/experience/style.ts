import styled from "@emotion/styled";

export const ExperienceWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
`;

export const MainTitle = styled.span`
  font-size: 24px;
  font-weight: 500;
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

  .image-box {
    display: flex;
    flex-direction: column;

    img {
      margin-bottom: 10px;
      width: 300px;
      margin-bottom: 20px;
    }
  }

  .content-box {
    width: 80%;
    padding-left: 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 25px;

    .content-box-item {
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;

      .sub-title {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 600;
      }

      .sub-content {
        white-space: pre-line;
        line-height: 25px;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
`;
