import { anyTypeAnnotation } from "@babel/types";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { certificateListAtom } from "../../../../modules/atom/portfolioPost/certificate";
import { MinusButton } from "../../../../util/assets";
import { CertificateListType } from "../../../../util/interface/portfolioPost/postType";
import * as S from "./style";

interface Props {
  certificate_content: string[];
  textList: any;
  setTextList: any;
  updateCertificateList: (identity: number, index: number) => void;
  identity: number;
}

const CertificateListContent = (props: Props) => {
  const {
    updateCertificateList,
    identity,
    certificate_content,
    textList,
    setTextList,
  } = props;

  const addContentList = (identity: number, index: number) => {
    setTextList(textList[identity].push(""));
    updateCertificateList(identity, textList[identity].length - 1);
  };

  const onChangeEvent = (e: any, identity: number, index: number) => {
    const { value } = e.target;
    setTextList([
      textList.map((item: string, i: number) => {
        console.log(item);
        if (i === identity) {
          for (let j = 0; j < textList[identity].length; j++) {
            if (index === j) {
              textList[identity][j] = value;
              return textList[identity][j];
            } else {
              return textList[identity][j];
            }
          }
        } else {
          return item;
        }
      }),
    ]);
    updateCertificateList(identity, index);
  };

  return (
    <>
      {certificate_content?.map((item: any, index: number) => {
        console.log(item, index);
        return (
          <div className="infoContainer">
            <S.InputBox>
              <input
                id="inputContent"
                onChange={(e) => {
                  onChangeEvent(e, identity, index);
                }}
                placeholder="내용을 입력해주세요."
              />
              <img src={MinusButton} alt="" />
            </S.InputBox>
            {index + 1 < certificate_content.length ? (
              ""
            ) : (
              <span
                className="addContent"
                onClick={() => {
                  addContentList(identity, index);
                }}
              >
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
