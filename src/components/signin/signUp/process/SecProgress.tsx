import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import { getField } from "../../../../util/api/portfolio/portfolio";
import { FieldType } from "../../../../util/interface/Sign/loginType";
import FieldItemBox from "./FieldItemBox";
import * as S from "./style";

interface Props {
  setFieldList: any;
  fieldList: any;
  onChange: any;
  field: any;
}

const SecProgress = (props: Props) => {
  const [btnColor, setBtnColor] = useState<boolean>(false);
  const [textList, setTextList] = useState<any>([]);

  // field 리스트 불러오기
  const { data } = useQuery("field", getField);
  const fieldItem = data?.data;

  // 필드 추가하기 최대 3개
  function FieldAdd(content: string, textList: any) {
    const item = fieldItem.filter(
      (item: FieldType) => item.content === content
    );

    const fieldId = item.map((item: FieldType) => item.id);

    props.setFieldList(props.fieldList.concat(fieldId[0]));

    setTextList(textList.concat(content));
  }

  useEffect(() => {
    fieldItem?.length >= 1 ? setBtnColor(true) : setBtnColor(false);
  }, [fieldItem?.length]);

  

  return (
    <>
      <S.SignBox btnColor={btnColor}>
        <p className="sub-title">분야는 최대 3개까지 선택할 수 있습니다.</p>
        <S.FieldSelectWrap>
          <span>분야</span>
          <S.CategoryItemWrap
            name="field"
            onChange={(e) => {
              props.onChange(e);
              FieldAdd(e.target.value, textList);
            }}
          >
            <option disabled selected>
              없음
            </option>
            {fieldItem?.map((field: FieldType, index: number) => (
              <option key={index} value={field.content}>
                {field.content}
              </option>
            ))}
          </S.CategoryItemWrap>
        </S.FieldSelectWrap>
        {/* 선택한 카테고리  */}
        <S.FieldListWrapper>
          {textList?.map((field: string, index: number) => (
            <FieldItemBox
              key={index}
              setTextList={setTextList}
              textList={textList}
              field={field}
            />
          ))}
        </S.FieldListWrapper>
      </S.SignBox>
    </>
  );
};

export default SecProgress;
