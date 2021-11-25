import React, { useState, useEffect } from "react";
import * as S from "./style";
import { ToastError } from "../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CertificateListType } from "../../../util/interface/portfolioPost/postType";
import deleteButtonX from "../../../util/assets/icon/deleteButtonX.svg";
import CertificateListContent from "./certificateListContent/CertificateListContent";

const LicenseContainer = () => {
  const [textList, setTextList] = useState<any>([[""]]);
  const [certificateList, setCertificateList] = useState<CertificateListType[]>(
    [{ title: "", certificate_list: [""] }]
  );

  useEffect(() => {
    console.log(textList);
    console.log(certificateList);
  }, [textList, certificateList]);

  const updateCertificateList = (identity: number, index: number) => {
    console.log(identity, index);
    setCertificateList(
      certificateList.map((list: any, i: number) => {
        if (identity === i) {
          return {
            ...list,
            certificate_list: textList[identity],
          };
        } else {
          return list;
        }
      })
    );
  };

  const addList = () => {
    setTextList((textList: any) => [...textList, [""]]);
    setCertificateList((certificateList: CertificateListType[]) => [
      ...certificateList,
      {
        title: "",
        certificate_list: [""],
      },
    ]);
  };

  const deleteList = (index: number) => {
    if (certificateList.length <= 1) {
      ToastError("삭제할 수 없습니다.");
    } else {
      setCertificateList(
        certificateList?.filter((value: any, id: number) => {
          console.log(id);
          return id !== index;
        })
      );
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
        console.log(list);
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
              updateCertificateList={updateCertificateList}
              textList={textList}
              setTextList={setTextList}
              identity={index}
            />
          </S.MapWrapper>
        );
      })}
    </S.LicenseWrapper>
  );
};

export default LicenseContainer;
