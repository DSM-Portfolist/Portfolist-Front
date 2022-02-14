import * as S from "./style";

interface Props {
  nextLevel: boolean;
}

const ProgressBar = ({ nextLevel }: Props) => {
  return (
    <S.ProgressWrapper>
      <S.ProgressBar nextLevel={nextLevel}></S.ProgressBar>
    </S.ProgressWrapper>
  );
};

export default ProgressBar;
