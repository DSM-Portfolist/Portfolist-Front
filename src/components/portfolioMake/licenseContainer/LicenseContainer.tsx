import React, { useState } from "react";
import * as S from "./style";
import { PlusButton, MinusButton } from "../../../util/assets";
import { ToastError } from "../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CertificateListType } from "../../../util/interface/portfolioPost/postType";

const LicenseContainer = () => {
  const [certificateList, setCertificateList] = useState<CertificateListType[]>(
    [{ title: "", certificate_list: [] }]
  );

  console.log(certificateList);

  const addList = () => {
    setCertificateList((certificateList: CertificateListType[]) => [
      ...certificateList,
      {
        title: "",
        certificate_list: [],
      },
    ]);
  };

  return (
    <S.LicenseWrapper className="make-container">
      <ToastContainer />
      <S.HeaderButton>
        <button type="button" onClick={addList}>
          리스트 추가하기
        </button>
      </S.HeaderButton>
      <S.TitleWrapper>
        <h1>자신이 보유하고 있는 자격증 또는 학력을 적어주세요.</h1>
        <img src={PlusButton} alt="" />
      </S.TitleWrapper>
      <div className="infoContainer">
        <S.InputBox>
          <input
            type="text"
            id="inputContent"
            placeholder="내용을 입력해주세요."
          />
          <img src={MinusButton} alt="" />
        </S.InputBox>
      </div>
    </S.LicenseWrapper>
  );
};

export default LicenseContainer;
