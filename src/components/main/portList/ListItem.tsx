import { useHistory } from "react-router";
import { ListThumbnailHandle } from "../../../hook/listThumbnail";
import { TextSliceHandler } from "../../../hook/textSliceHook";
import * as S from "./style";

interface ListProps {
  title: string;
  content: string;
  id?: number;
  url: string;
}

const ListItem = ({ title, content, id, url }: ListProps) => {
  const { push } = useHistory();

  return (
    <S.ItemWrapper onClick={() => push(`/portfolio?id=${id}`)}>
      <div className="folio-img">
        <img src={ListThumbnailHandle(url)} alt="포트폴리오 이미지 " />
      </div>
      <div className="more-explore">
        <span>{title}</span>
        <span>{TextSliceHandler(content, 12)}</span>
      </div>
    </S.ItemWrapper>
  );
};

export default ListItem;
