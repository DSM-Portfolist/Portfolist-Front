import { MoreInfoType } from "../../../../util/interface/portfolio/portfolioDetailType";
import * as S from "./style";

interface Props {
  info: MoreInfoType;
}

const MoreInfoItem = ({ info }: Props) => {
  return (
    <S.InfoItem>
      <span>{info.name}</span>
      <span>{info.content}</span>
    </S.InfoItem>
  );
};
export default MoreInfoItem;
