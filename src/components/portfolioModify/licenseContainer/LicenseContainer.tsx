import React, { useState, useEffect } from "react";
import * as S from "./style";
import { ToastError } from "../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CertificateListType } from "../../../util/interface/portfolioPost/postType";
import TextContainer from "./TextContainer/TextContainer";
import { portfolioModifyList } from "../../../modules/atom/portfolioModify";
import { useRecoilState } from "recoil";

const LicenseContainer = () => {
  const [portfolioModifyArr, setPortfolioModifyArr] =
    useRecoilState(portfolioModifyList);
  const [certificateList, setCertificateList] = useState<any>([
    { title: "", certificate_list: [""] },
  ]);

  useEffect(() => {
    console.log([portfolioModifyArr.certificate_container_list])
    setCertificateList(portfolioModifyArr.certificate_container_list)
  }, [portfolioModifyArr.certificate_container_list])

  useEffect(() => {
    setPortfolioModifyArr({
      ...portfolioModifyArr,
      certificate_container_list: certificateList,
    });
  }, [certificateList]);

  const addList = () => {
    setCertificateList((certificateList: CertificateListType[]) => [
      ...certificateList,
      {
        title: "",
        certificate_list: [""],
      },
    ]);
  };

  return (
    <S.LicenseWrapper className="make-container">
      <ToastContainer />
      <S.HeaderButton>
        <span className="addContent" onClick={addList}>
          + Add new list
        </span>
      </S.HeaderButton>
      <TextContainer
        certificateList={certificateList}
        setCertificateList={setCertificateList}
      />
    </S.LicenseWrapper>
  );
};

export default LicenseContainer;
