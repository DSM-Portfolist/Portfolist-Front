import { useState } from "react";
import { useMutation } from "react-query";
import { Link, useHistory } from "react-router-dom";
import * as S from "./style";
import { PortListType } from "../../../util/interface/portfolio/portListType";
import { BeforeTouching, Touching } from "../../../util/assets";
import {
  deleteTouching,
  postTouching,
} from "../../../util/api/portfolio/useTouching";
import { CountChangeHook } from "../../../hook/countChangeHook";
import { ProfileImage } from "../../../hook/profileImg";
import { ListThumbnailHandle } from "../../../hook/listThumbnail";
import { TextSliceHandler } from "../../../hook/textSliceHook";

interface Prop {
  list: PortListType;
}

const Tag = ({ field }: any) => {
  return <S.Tag>{field}</S.Tag>;
};

const ListItem = ({ list }: Prop) => {
  const [touchingBoolean, setTouchingBoolean] = useState<boolean>(
    list?.touched
  );
  const [count, setCount] = useState<number>(list?.total_touching);

  const touching = useMutation("touching", postTouching);
  const untouching = useMutation("untouching", deleteTouching);
  const history = useHistory();

  if (list?.id === undefined) {
    return null;
  }

  return (
    <S.ListItemWrapper>
      <div className="portfoilo-img">
        <img
          src={ListThumbnailHandle(list?.thumbnail)}
          alt="포트폴리오 배너"
          onClick={() => history.push(`/portfolio?id=${list?.id}`)}
        />
      </div>
      <S.Content touchingBoolean={touchingBoolean}>
        <div className="tag-wrapper">
          <div className="tag">
            {list?.field && (
              <>
                {list?.field.map((field: string, index: number) => (
                  <Tag key={index} field={field} />
                ))}
              </>
            )}
          </div>
          <div className="touching">
            <img
              src={touchingBoolean ? `${Touching}` : `${BeforeTouching}`}
              alt="터칭 아이콘"
              onClick={() => {
                setTouchingBoolean(!touchingBoolean);
                setCount(CountChangeHook(touchingBoolean, count));
                touchingBoolean
                  ? untouching.mutate(list?.id)
                  : touching.mutate(list?.id);
              }}
            />
            <span>{count === 0 ? "0" : count}</span>
          </div>
        </div>
        <Link
          className="title"
          to={`/portfolio?id=${list?.id}`}
          title="포트폴리오 상세 페이지 이동합니다."
        >
          <span>{list?.title}</span>
          <span>{TextSliceHandler(list?.introduce, 18)}</span>
          <span>댓글 {list?.total_comment}</span>
        </Link>
        <div className="user-profile">
          <img
            src={ProfileImage(list?.user?.profile_img)}
            alt="사용자의 프로필 사진"
          />
          <Link
            to={`/user-page/${list?.user?.user_id}`}
            title="유저 페이지 이동합니다."
          >
            <strong>{list?.user?.name}</strong>님의 포트폴리오
          </Link>
        </div>
      </S.Content>
    </S.ListItemWrapper>
  );
};

export default ListItem;
