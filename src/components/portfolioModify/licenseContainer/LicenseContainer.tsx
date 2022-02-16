/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import * as S from "./style";
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
    setCertificateList(portfolioModifyArr.certificate_container_list);
  }, []);

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
