import React, { useState } from "react";
import * as S from "../../../../util/css/mypage/mypage/mypageModify/style";
import FieldItemBox from "./FieldItemBox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastError, ToastSuccess } from "../../../../hook/toastHook";
import { FieldType } from "../../../../util/interface/Sign/loginType";
import { patchUserInfo } from "../../../../util/api/mypage";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { getFieldSelector } from "../../../../modules/atom/portfolio";
import { isModifyModal } from "../../../../modules/atom/mypage";
import { userInfoValue } from "../../../../modules/selector/user";
import { myIntroduce, myName } from "../../../../modules/atom/mypage/mypage";

const MyInfoModifyDetail = ({ getUserInfo }: any) => {
  const userInfo = useRecoilValue(userInfoValue);
  const [selectIdArr, setSelectIdArr] = useState<any>([]);
  const [selectNameArr, setSelectNameArr] = useState<any>([]);
  const fieldList = useRecoilValue(getFieldSelector);
  const setIsModify = useSetRecoilState(isModifyModal);
  const [name, setName] = useRecoilState(myName);
  const [introduce, setIntroduce] = useRecoilState(myIntroduce);

  const patchUserInfoHandler = () => {
    patchUserInfo(selectIdArr, name, introduce)
      .then(() => {
        ToastSuccess("프로필이 수정되었습니다.");
        getUserInfo();
        setIsModify(false);
      })
      .catch((e) => {
        ToastError("정보를 다시 확인해주세요");
        throw e;
      });
  };

  const handleSelect = (content: string, textList: any) => {
    //분야 배열에 추가 중복 허용 x
    if (!textList.includes(content)) {
      if (selectIdArr.length > 2) {
        ToastError("분야는 최대 3개까지 가능합니다");
      } else {
        const item = fieldList.filter(
          (item: FieldType) => item.content === content
        );

        const fieldId = item.map((item: FieldType) => item.id);

        setSelectIdArr(selectIdArr.concat(fieldId));
        setSelectNameArr(textList.concat(content));
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <S.ModifyDetailContainer>
        <ToastContainer />
        <S.InputWrapper>
          <input
            type="text"
            placeholder="사용하실 닉네임을 입력하세요"
            defaultValue={userInfo?.name}
            name="name"
            onChange={(e: any) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="자신을 한줄 소개 해주세요"
            defaultValue={userInfo?.introduce}
            name="introduce"
            onChange={(e: any) => setIntroduce(e.target.value)}
          />
        </S.InputWrapper>
        <S.FieldSelecteWrapper>
          <span>
            <b>분야</b>
          </span>
          <select
            onChange={(e) => {
              handleSelect(e.target.value, selectNameArr);
            }}
          >
            <option selected disabled hidden>
              분야를 선택하세요
            </option>
            {fieldList?.map((field: FieldType, index: number) => (
              <option key={index} value={field.content}>
                {field.content}
              </option>
            ))}
          </select>
          {selectNameArr?.map((field: string, index: number) => (
            <FieldItemBox
              key={index}
              setSelectIdArr={setSelectIdArr}
              setSelectNameArr={setSelectNameArr}
              selectNameArr={selectNameArr}
              selectIdArr={selectIdArr}
              fieldList={fieldList}
              field={field}
            />
          ))}
        </S.FieldSelecteWrapper>
        <p>분야는 최대 3개까지 선택할 수 있습니다. </p>
        <S.ButtonContainer>
          <button
            type="button"
            onClick={() => {
              setIsModify(false);
              ToastSuccess("프로필이 취소되었습니다.");
            }}
          >
            취소
          </button>
          <input
            type="submit"
            value="수정 완료"
            onClick={() => patchUserInfoHandler()}
          />
        </S.ButtonContainer>
      </S.ModifyDetailContainer>
    </>
  );
};

export default MyInfoModifyDetail;
