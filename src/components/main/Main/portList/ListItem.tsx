import React from "react";
import { useHistory } from "react-router";
import { Flower } from "../../../../util/assets";
import * as S from "./style";

interface ListProps {
  title: string;
  content: string;
  id?: number;
}

const ListItem = ({ title, content, id }: ListProps) => {
  const history = useHistory();

  function TestSlice(txt: string) {
    let len = 12;
    if (txt.length > len) {
      txt = txt.substr(0, len) + " ...";
    }
    return txt;
  }

  return (
    <S.ItemWrapper onClick={() => history.push(`/portfolio/${id}`)}>
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
