import * as S from "../../../util/css/mypage/mypage/mypageModify/style";
import { CloseIcon } from "../../../util/assets";
import { FieldType } from "../../../util/interface/Sign/loginType";

interface Props {
  setSelectIdArr: any;
  selectIdArr?: number[];
  fieldList: FieldType[];
}

const FieldItemBox = ({ selectIdArr, setSelectIdArr, fieldList }: Props) => {
  const deleteFieldHandler = (index: number) => {
    setSelectIdArr(
      selectIdArr?.filter((item: any, i: number) => {
        return index !== i;
      })
    );
  };
  return (
    <>
      {selectIdArr?.map((item: any, index: number) => (
        <S.FieldItemContainer key={index}>
          <span>{fieldList[item - 1].content}</span>
          <img
            src={CloseIcon}
            alt="닫기 아이콘"
            onClick={() => {
              deleteFieldHandler(index);
            }}
          />
        </S.FieldItemContainer>
      ))}
    </>
  );
};

export default FieldItemBox;
