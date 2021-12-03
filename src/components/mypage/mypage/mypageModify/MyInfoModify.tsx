import {
  MainWrapper,
  FieldWrapper,
} from "../../../../util/css/mypage/mypage/mypageModify/style";
import { ModifyPensil } from "../../../../util/assets/index";
import MyInfoModifyDetail from "./MyInfoModifyDetail";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfoValue } from "../../../../modules/selector/user";
import { isModifyModal } from "../../../../modules/atom/mypage";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { mainColor } from "../../../../util/css/color/color";

const MyInfoModify = ({ getUserInfo }: any) => {
  const [isModify, setIsModify] = useRecoilState(isModifyModal);
  const userInfo = useRecoilValue(userInfoValue);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <>
      {!isModify ? (
        <MainWrapper>
          <h1>{userInfo?.name}</h1>
          <p>{userInfo?.introduce}</p>
          <FieldWrapper>
            <span>분야</span>
            {userInfo?.field?.map((field, index) => (
              <FieldItem key={index}>{field}</FieldItem>
            ))}
          </FieldWrapper>
          <img
            src={ModifyPensil}
            onClick={() => {
              setIsModify(true);
            }}
            alt="수정이미지"
          />
        </MainWrapper>
      ) : (
        <MyInfoModifyDetail getUserInfo={getUserInfo} />
      )}
    </>
  );
};

export default MyInfoModify;

const FieldItem = styled.div`
  margin: 0 10px;
  width: fit-content;
  border: 1.5px solid ${mainColor};
  border-radius: 20px;
  padding: 4px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${mainColor};
  font-size: 17px;
  transform: skew(-0.1deg);
`;
