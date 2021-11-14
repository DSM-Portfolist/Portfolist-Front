import {
  MainWrapper,
  FieldWrapper,
} from "../../../../util/css/mypage/mypage/mypageModify/style";
import { ModifyPensil } from "../../../../util/assets/index";
import MyInfoModifyDetail from "./MyInfoModifyDetail";
import { useRecoilState, useRecoilValue } from "recoil";
import { myInfoSelector } from "../../../../modules/selector/user";
import { isModifyModal } from "../../../../modules/atom/mypage";

const MyInfoModify = () => {
  const [isModify, setIsModify] = useRecoilState(isModifyModal);
  const userInfo = useRecoilValue(myInfoSelector);

  return (
    <>
      {!isModify ? (
        <MainWrapper>
          <h1>{userInfo.name}</h1>
          <p>{userInfo.introduce}</p>
          <FieldWrapper>
            <span>
              <b>분야</b>
            </span>
            {userInfo?.field?.map((field, index) => (
              <span key={index}>{field}</span>
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
        <MyInfoModifyDetail />
      )}
    </>
  );
};

export default MyInfoModify;
