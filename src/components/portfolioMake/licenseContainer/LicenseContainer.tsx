import React, { useState, useEffect } from "react";
import * as S from "./style";
import { ToastError } from "../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CertificateListType } from "../../../util/interface/portfolioPost/postType";
import deleteButtonX from "../../../util/assets/icon/deleteButtonX.svg";
import CertificateListContent from "./certificateListContent/CertificateListContent";

const LicenseContainer = () => {
  const [textList, setTextList] = useState<string[]>([""]);
  const [certificateList, setCertificateList] = useState<CertificateListType[]>(
    [{ title: "", certificate_list: textList }]
  );

  useEffect(() => {
    console.log(certificateList);
  }, [certificateList]);

  useEffect(() => {
    updateCertificateList();
  }, [textList]);

  const updateCertificateList = () => {
    setCertificateList(
      certificateList.map((list: any) => {
        return {
          ...list,
          certificate_list: textList,
        };
      })
    );
  };

  const addList = () => {
    setCertificateList((certificateList: CertificateListType[]) => [
      ...certificateList,
      {
        title: "",
        certificate_list: textList,
      },
    ]);
  };

  const deleteList = (index: number) => {
    if (certificateList.length <= 1) {
      ToastError("삭제할 수 없습니다.");
    } else {
      console.log(index);
    }
  };

  return (
    <S.LicenseWrapper className="make-container">
      <ToastContainer />
      <S.HeaderButton>
        <span className="addContent" onClick={addList}>
          + Add new list
        </span>
      </S.HeaderButton>
      {certificateList?.map((list: CertificateListType, index: number) => {
        return (
          <S.MapWrapper>
            <S.TitleWrapper>
              <input type="text" placeholder="제목을 입력해 주세요." />
              <img
                src={deleteButtonX}
                style={{ width: "27px", height: "27px", marginLeft: "5px" }}
                onClick={() => {
                  deleteList(index);
                }}
                alt=""
              />
            </S.TitleWrapper>
            <CertificateListContent
              certificate_content={list?.certificate_list}
              certificateList={certificateList}
              setCertificateList={setCertificateList}
              textList={textList}
              setTextList={setTextList}
            />
          </S.MapWrapper>
        );
      })}
    </S.LicenseWrapper>
  );
};

export default LicenseContainer;
