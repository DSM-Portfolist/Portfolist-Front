import { useHistory } from "react-router";
import { Flower } from "../../../util/assets";
import * as S from "./style";

interface ListProps {
  title: string;
  content: string;
  id?: number;
  url?: string | null;
}

const ListItem = ({ title, content, id, url }: ListProps) => {
  const { push } = useHistory();

  function TestSlice(txt: string) {
    let len = 12;
    if (txt.length > len) {
      txt = txt.substr(0, len) + " ...";
    }
    return txt;
  }

  return (
    <S.ItemWrapper onClick={() => push(`/portfolio?id=${id}`)}>
      <div className="folio-img">
        <img src={url === null ? `${Flower}` : url} alt="포트폴리오 이미지 " />
      </div>
      <div className="more-explore">
        <span>{title}</span>
        <span>{TestSlice(content)}</span>
      </div>
    </S.ItemWrapper>
  );
};

export default ListItem;
