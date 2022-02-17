import { useHistory } from "react-router-dom";
import { NoticeMent } from "../../../../hook/noticeMentHook";
import { notificationType } from "../../../../util/interface/main/portfolio";
import * as S from "./style";

interface Props {
  item: notificationType;
}

const NotiItem = ({ item }: Props) => {
  const { push } = useHistory();
  return (
    <S.NotiMent onClick={() => push(`/portfolio?id=${item.portfolio_id}`)}>
      <span>{item.name}</span>
      <span>{NoticeMent(item.type)}</span>
    </S.NotiMent>
  );
};

export default NotiItem;
