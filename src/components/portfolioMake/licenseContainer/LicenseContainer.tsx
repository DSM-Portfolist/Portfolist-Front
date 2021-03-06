/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import * as S from "./style";
import { CertificateListType } from "../../../util/interface/portfolioPost/postType";
import TextContainer from "./TextContainer/TextContainer";
import { portfolioMakeList } from "../../../modules/atom/portfolioPost";
import { useRecoilState } from "recoil";

const LicenseContainer = () => {
  const [portfolioMakeArr, setPortfolioMakeArr] =
    useRecoilState(portfolioMakeList);
  const [certificateList, setCertificateList] = useState<any>([
    { title: "", certificate_list: [""] },
  ]);

  const setApiCertificateListData = useCallback(() => {
    setPortfolioMakeArr({
      ...portfolioMakeArr,
      certificate_container_list: certificateList,
    });
  }, [certificateList]);

  useEffect(() => {
    setApiCertificateListData();
  }, [setApiCertificateListData]);

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
      <S.HeaderButton>
        <span className="addContent" onClick={addList}>
          + Add new list
        </span>
      </S.HeaderButton>
      <TextContainer
        certificateList={certificateList || []}
        setCertificateList={setCertificateList}
      />
    </S.LicenseWrapper>
  );
};

export default LicenseContainer;
