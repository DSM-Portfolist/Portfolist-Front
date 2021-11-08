import React from "react";
import { NoticeMent } from "../../../hook/noticeMentHook";
import * as S from "./style";

interface Props {
  name: string;
  type: "TOUCHING" | "COMMENT" | "RECOMMENT" | "P_ADD" | "P_MODIFY";
}

const NotiItem = ({ name, type }: Props) => {
  return <S.NotiMent>{NoticeMent(type, name)}</S.NotiMent>;
};

export default NotiItem;
