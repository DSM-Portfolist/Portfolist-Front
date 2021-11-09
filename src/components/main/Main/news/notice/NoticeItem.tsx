import React from "react";
import { NoticeMent } from "../../../../../hook/noticeMentHook";
import { NewIcon } from "../../../../../util/assets";
import * as S from "./style";

interface Props {
  name: string;
  type: string;
}

const NoticeItem = ({ name, type }: Props) => {
  return (
    <S.NoticeItem>
      <img src={NewIcon} alt="new 아이콘" />
      <S.Content>{NoticeMent(type, name)}</S.Content>
    </S.NoticeItem>
  );
};

export default NoticeItem;
