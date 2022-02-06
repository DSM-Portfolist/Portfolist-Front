import styled from "@emotion/styled";
import { Link, useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { DateSplitHook } from "../../../../hook/dateSplitHook";
import { ToastError, ToastSuccess } from "../../../../hook/toastHook";
import { getPortfolioSelecor } from "../../../../modules/atom/portfolio/portfolioDetail/index";
import { deletePortfolio } from "../../../../util/api/portfolio/portfolio";
import { DefaultImage } from "../../../../util/assets";
import { mainColor } from "../../../../util/css/color/color";

const FieldItem = (field: any) => {
  return <FieldItemWrapper>{field.field}</FieldItemWrapper>;
};

const Title = () => {
  const portfolioValue = useRecoilValue(getPortfolioSelecor);
  const userId = portfolioValue?.user?.user_id;
  const { push } = useHistory();

  function deletePortfolioHandler(id: number) {
    try {
      deletePortfolio(id);
      ToastSuccess("포트폴리오가 삭제되었습니다.");
      setTimeout(() => {
        push("/");
      }, 1500);
    } catch (e) {
      ToastError("포트폴리오 삭제에 실패하였습니다.");
      console.log(e);
    }
  }

  return (
    <TitleWrapper>
      <TitleInfo>
        <FieldWrapper>
          {portfolioValue?.field?.map((field: string, index: number) => {
            return <FieldItem key={index} field={field} />;
          })}
        </FieldWrapper>
        <DateWrapper>
          <span>{DateSplitHook(portfolioValue?.create_date)}</span>
          <Link to={`/user-page/${userId}`} className="user-profile">
            <span>{portfolioValue?.user?.name}</span>
            <img
              src={
                portfolioValue?.user?.profile_img === null
                  ? `${DefaultImage}`
                  : portfolioValue?.user?.profile_img
              }
              alt="유저 프로필 이미지"
            />
          </Link>
        </DateWrapper>
      </TitleInfo>
      {portfolioValue?.mine ? (
        <ModifyWrap>
          <Link to={{
            pathname: `portfolio-modify/${portfolioValue.portfolio_id}`,
            state: { portfolioID: portfolioValue.portfolio_id}
          }}>
            <button>포트폴리오 수정</button>
          </Link>
          <button
            onClick={() => deletePortfolioHandler(portfolioValue?.portfolio_id)}
          >
            포트폴리오 삭제
          </button>
        </ModifyWrap>
      ) : (
        ""
      )}

      <HeadTitle>
        <span className="title">{portfolioValue?.title}</span>
        <span className="sub-title">{portfolioValue?.introduce}</span>
      </HeadTitle>
    </TitleWrapper>
  );
};

export default Title;

export const FieldItemWrapper = styled.div`
  margin: 0 10px 0 0;
  background: #ff7659;
  border-radius: 20px;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
  transform: skew(-0.1deg);
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const TitleInfo = styled.div`
  padding-top: 40px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FieldWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
`;

export const DateWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  .user-profile {
    color: black;
    display: flex;
    align-items: center;
    margin-left: 30px;

    a {
      cursor: pointer;
    }

    img {
      cursor: pointer;
      margin-left: 15px;
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50px;
    }
  }
`;

export const ModifyWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 20px;
    font-size: 14px;
    padding: 7px 10px;
    border: 1px solid ${mainColor};
    border-radius: 8px;
    color: ${mainColor};
    cursor: pointer;
    background-color: white;
    transition: all 0.8s;

    :hover {
      color: white;
      background-color: ${mainColor};
      box-shadow: 0 2px 3px #80808040;
    }
  }
`;

export const HeadTitle = styled.div`
  margin: 40px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e9e9e9;

  .title {
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 25px;
  }

  .sub-title {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 25px;
  }
`;
