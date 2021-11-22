import React, { useState } from "react";
import * as S from "./style";
import { PlusButton, MinusButton } from "../../../util/assets";
import { ToastError } from "../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CertificateListType } from "../../../util/interface/portfolioPost/postType";
import deleteButtonX from "../../../util/assets/icon/deleteButtonX.svg";

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
        <span className="addContent" onClick={addList}>
          + Add new list
        </span>
      </S.HeaderButton>
      {certificateList.map(
        (certificateList: CertificateListType, index: number) => {
          console.log(certificateList);
          console.log(index);
          return (
            <S.MapWrapper>
              <S.TitleWrapper>
                <input type="text" placeholder="제목을 입력해 주세요." />
                <img
                  src={deleteButtonX}
                  style={{ width: "27px", height: "27px", marginLeft: "5px" }}
                  alt=""
                />
              </S.TitleWrapper>
              <div className="infoContainer">
                <S.InputBox>
                  <textarea
                    id="inputContent"
                    placeholder="내용을 입력해주세요."
                  ></textarea>
                  <img src={MinusButton} alt="" />
                </S.InputBox>
                {index + 1 < certificateList.certificate_list.length ? (
                  ""
                ) : (
                  <span className="addContent">내용 추가</span>
                )}
              </div>
            </S.MapWrapper>
          );
        }
      )}
    </S.LicenseWrapper>
  );
};

export default LicenseContainer;
