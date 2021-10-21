import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useQuery } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import { MAINURL } from "../../../../util/api";
import { FieldType } from "../../../../util/interface/Sign/loginType";
import FieldItemBox from "./FieldItemBox";
import * as S from "./style";

interface Props {
  setFieldList: any;
  fieldList: any;
  onChange: any;
  field: any;
}

const SecProgress: FC<Props> = (props) => {
  const [btnColor, setBtnColor] = useState<boolean>(false);

  // field 리스트 불러오기
  const { data } = useQuery("field", async () => axios(`${MAINURL}/field`));
  const fieldItem = data?.data;

  // 필드 추가하기 최대 3개
  function FieldAdd(content: string) {
    const test = fieldItem.filter(
      (test: FieldType) => test.content === content
    );
    const fieldId = test.map((test: FieldType) => test.id);

    props.setFieldList(
      props.fieldList.concat({ id: fieldId[0], content: content })
    );
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
              FieldAdd(e.target.value);
            }}
          >
            <option disabled selected>
              없음
            </option>
            {fieldItem?.map((field: FieldType, index: number) => (
              <option key={index} value={field.id}>
                {field.content}
              </option>
            ))}
          </S.CategoryItemWrap>
        </S.FieldSelectWrap>
        {/* 선택한 카테고리  */}
        <S.FieldListWrapper>
          {props.fieldList?.map((field: FieldType, index: number) => (
            <FieldItemBox
              key={index}
              fieldItem={fieldItem}
              setFieldList={props.setFieldList}
              fieldList={props.fieldList}
              field={field.content}
            />
          ))}
        </S.FieldListWrapper>
      </S.SignBox>
    </>
  );
};

export default SecProgress;
