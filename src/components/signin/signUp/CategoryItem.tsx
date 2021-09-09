/** @jsxImportSource @emotion/react */

import { NoSelectedArrow } from "../../../util/assets";
import { CategoryItemWrap } from "../../../util/css/signin/SignUpEmotion";
import { category } from "./dummy.json";

interface Props {
  setText: any;
  arrowSelect: boolean;
}

interface CategoryType {
  field: string | undefined;
  id: number | undefined;
}

const CategoryItem = ({ setText, arrowSelect }: Props) => {
  return (
    <ul
      style={
        arrowSelect
          ? { display: "flex", height: 200 }
          : { display: "none", height: 0 }
      }
      css={[CategoryItemWrap]}
    >
      {category.map((category) => (
        <li key={category.id} onClick={() => setText(category.field)}>
          {category.field}
        </li>
      ))}
    </ul>
  );
};

export default CategoryItem;
