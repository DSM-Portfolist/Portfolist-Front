import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import { selectFieldList } from "../../../../modules/atom/portfolio/main";
import { useFieldValue } from "../../../../modules/atom/portfolio/search";
import { Arrow } from "../../../../util/assets";
import FilterItem from "./FilterItem";
import * as S from "./style";

const FilterBar = () => {
  const useField = useRecoilValue(useFieldValue);
  const selectField = useRecoilValue(selectFieldList);
  const history = useHistory();

  return (
    <>
      <S.FilterWrapper>
        <S.FilterItemWrap>
          <div className="wrapper">
            <span id="field-text">분야</span>
            <div className="filter-wrap">
              {selectField?.map((_: any, index: number) => (
                <FilterItem key={index} />
              ))}
            </div>
          </div>
        </S.FilterItemWrap>
        <S.MoreItem
          onClick={() =>
            history.push(
              `/list?page=1&size=10&field=${useField}&sort=date&query=&searchType=`
            )
          }
        >
          <p>보러가기</p>
          <img src={Arrow} alt="더보거가기 아이콘" />
        </S.MoreItem>
      </S.FilterWrapper>
    </>
  );
};

export default FilterBar;
