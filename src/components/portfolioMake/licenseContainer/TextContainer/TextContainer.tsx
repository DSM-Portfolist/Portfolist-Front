import React from "react";
import { CertificateListType } from "../../../../util/interface/portfolioPost/postType";
import deleteButtonX from "../../../../util/assets/icon/deleteButtonX.svg";
import { MinusButton } from "../../../../util/assets";
import { ToastError } from "../../../../hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as S from "./style";

const TextContainer = (props: any) => {
  const { certificateList, setCertificateList } = props;

  const onChangeTitle = (e: any, index: number) => {
    console.log(`onChangeEvent: ${index}`);
    setCertificateList(
      certificateList.map((item: any, i: number) => {
        if (i === index) {
          return { ...certificateList[index], title: e.target.value };
        } else {
          return item;
        }
      })
    );
  };

  const deleteCertificateList = (index: number) => {
    if (certificateList.length <= 1) {
      ToastError("1개 이상의 리스트는 있어야 합니다.");
    } else {
      setCertificateList(
        certificateList?.filter((value: any, i: number) => {
          return i !== index;
        })
      );
    }
  };

  return (
    <div>
      {certificateList?.map((list: any, index: number) => {
        const { certificate_list, title } = list;
        return (
          <S.MapWrapper>
            <S.TitleWrapper>
              <input
                type="text"
                placeholder="제목을 입력해 주세요."
                onChange={(e) => {
                  onChangeTitle(e, index);
                }}
                value={title}
              />
              <img
                src={deleteButtonX}
                style={{ width: "27px", height: "27px", marginLeft: "5px" }}
                onClick={() => {
                  deleteCertificateList(index);
                }}
                alt=""
              />
            </S.TitleWrapper>
            <>
              {certificate_list?.map((item: any, i: number) => {
                console.log(item, index);
                return (
                  <div className="infoContainer">
                    <S.InputBox>
                      <input
                        id="inputContent"
                        onChange={(e) => {}}
                        placeholder="내용을 입력해주세요."
                      />
                      <img src={MinusButton} alt="" />
                    </S.InputBox>
                    {i + 1 < certificate_list.length ? (
                      ""
                    ) : (
                      <span className="addContent" onClick={() => {}}>
                        내용 추가
                      </span>
                    )}
                  </div>
                );
              })}
            </>
          </S.MapWrapper>
        );
      })}
    </div>
  );
};

export default TextContainer;
