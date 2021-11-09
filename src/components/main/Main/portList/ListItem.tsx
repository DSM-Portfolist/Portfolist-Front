import React from "react";
import { Flower } from "../../../../util/assets";
import * as S from "./style";

interface ListProps {
  key?: number;
  title: string;
  content: string;
  id?: number;
}

const ListItem = ({ key, title, content }: ListProps) => {
  function TestSlice(txt: string) {
    let len = 13;
    if (txt.length > len) {
      txt = txt.substr(0, len) + " ...";
    }
    return txt;
  }

  return (
    <S.ItemWrapper key={key}>
      <div className="folio-img">
        <img src={Flower} alt="포트폴리오 이미지 " />
      </div>
      <div className="more-explore">
        <span>{title}</span>
        <span>{TestSlice(content)}</span>
      </div>
    </S.ItemWrapper>
  );
};

export default ListItem;
