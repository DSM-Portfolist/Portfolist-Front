import React, { useState, useEffect } from "react";
import * as S from "./style";
import { ToastError } from "../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CertificateListType } from "../../../util/interface/portfolioPost/postType";
import CertificateListContent from "./certificateListContent/CertificateListContent";
import TextContainer from "./TextContainer/TextContainer";

const LicenseContainer = () => {
  const [textList, setTextList] = useState<any>([[""]]);
  const [certificateList, setCertificateList] = useState<any>([
    { title: "", certificate_list: [""] },
  ]);

  useEffect(() => {
    console.log(certificateList);
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
        <span
          className="addContent"
          onClick={addList}
          style={{ marginBottom: "12px" }}
        >
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
