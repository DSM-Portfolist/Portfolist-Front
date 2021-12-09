import React from "react";
import { NoticeMent } from "../../../../hook/noticeMentHook";
import * as S from "./style";

interface Props {
  name: string;
  type: "TOUCHING" | "COMMENT" | "RECOMMENT" | "P_ADD" | "P_MODIFY";
}

const NotiItem = ({ name, type }: Props) => {
  return (
    <S.NotiMent>
      <span>{name}</span>
      <span>{NoticeMent(type)}</span>
    </S.NotiMent>
  );
};

export default NotiItem;
