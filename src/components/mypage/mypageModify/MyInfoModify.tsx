import {
  MainWrapper,
  FieldWrapper,
} from "../../../util/css/mypage/mypage/mypageModify/style";
import { ModifyPensil } from "../../../util/assets/index";
import MyInfoModifyDetail from "./MyInfoModifyDetail";
import { useRecoilState } from "recoil";
import { isModifyModal } from "../../../modules/atom/mypage";
import styled from "@emotion/styled";
import { mainColor } from "../../../util/css/color/color";

const MyInfoModify = ({ user }: any) => {
  const [isModify, setIsModify] = useRecoilState(isModifyModal);

  return (
    <>
      {!isModify ? (
        <MainWrapper>
          <h1>{user?.name}</h1>
          <p>{user?.introduce}</p>
          <FieldWrapper>
            <span>분야</span>
            {user?.field?.map((field: string, index: number) => (
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
        <MyInfoModifyDetail user={user} />
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
