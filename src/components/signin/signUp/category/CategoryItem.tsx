import * as S from "./style";
import { category } from "./dummy.json";

interface Props {
  setText: any;
  arrowSelect: boolean;
}

/* interface CategoryType {
  field: string | undefined;
  id: number | undefined;
} */

const CategoryItem = ({ setText, arrowSelect }: Props) => {
  return (
    <S.CategoryItemWrap style={arrowSelect ? { height: 200 } : { height: 0 }}>
      {category.map((category) => (
        <li key={category.id} onClick={() => setText(category.field)}>
          {category.field}
        </li>
      ))}
    </S.CategoryItemWrap>
  );
};

export default CategoryItem;
