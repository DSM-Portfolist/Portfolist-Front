import { FC, useState } from "react";
import * as S from "./style";
import axios from "axios";
import { useQuery } from "react-query";
import { MAINURL } from "../../../../util/api";
import { FieldType } from "../../../../util/interface/Sign/loginType";

interface Props {
  setField: any;
  setFieldList: any;
  arrowSelect: boolean;
  fieldList: any;
  onChange: any;
}

const CategoryItem: FC<Props> = (props) => {
  const [fieldItem, setFieldItem] = useState([]);

  function FieldAdd(id: number, content: string) {
    props.setFieldList(props.fieldList.concat({ id: id, content: content }));
  }

  // field 리스트 불러오기
  useQuery("field", async () => {
    axios(`${MAINURL}/field`).then((res) => setFieldItem(res.data));
  });

  return (
    <S.CategoryItemWrap
      style={props.arrowSelect ? { height: 200 } : { height: 0 }}
    >
      {fieldItem.map((field: FieldType) => (
        <li
          key={field.id}
          onClick={(e) => {
            props.setField(field.content);
            props.onChange(e);
            FieldAdd(field.id, field.content);
          }}
        >
          {field.content}
        </li>
      ))}
    </S.CategoryItemWrap>
  );
};

export default CategoryItem;
