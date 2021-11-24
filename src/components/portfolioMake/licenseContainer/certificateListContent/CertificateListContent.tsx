import { anyTypeAnnotation } from "@babel/types";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { certificateListAtom } from "../../../../modules/atom/portfolioPost/certificate";
import { MinusButton } from "../../../../util/assets";
import { CertificateListType } from "../../../../util/interface/portfolioPost/postType";
import * as S from "./style";

interface Props {
  certificate_content: string[];
  setCertificateList: any;
  certificateList: CertificateListType[];
  textList: any;
  setTextList: (text: Array<string>) => void;
}

const CertificateListContent = (props: Props) => {
  const {
    certificateList,
    setCertificateList,
    certificate_content,
    textList,
    setTextList,
  } = props;

  const addContentList = () => {
    setTextList(textList.concat(""));
  };

  const onChangeEvent = (e: any, index: number) => {
    const { value } = e.target;
    textList[index] = value;
    setTextList(textList);
  };

  return (
    <>
      {certificate_content?.map((item: any, index: number) => {
        return (
          <div className="infoContainer">
            <S.InputBox>
              <input
                id="inputContent"
                onChange={(e) => {
                  onChangeEvent(e, index);
                }}
                placeholder="내용을 입력해주세요."
              />
              <img src={MinusButton} alt="" />
            </S.InputBox>
            {index + 1 < certificate_content.length ? (
              ""
            ) : (
              <span className="addContent" onClick={addContentList}>
                내용 추가
              </span>
            )}
          </div>
        );
      })}
    </>
  );
};

export default CertificateListContent;
