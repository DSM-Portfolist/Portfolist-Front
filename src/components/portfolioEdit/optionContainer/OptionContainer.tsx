import FieldItemWrapper from "./fieldItemWrapper/FieldItemWrapper";
import IsOpenContainer from "./isOpenContainer/IsOpenContainer";
import * as S from "./style";

interface Props {
  isOpen: boolean | null;
}

const OptionContainer = ({ isOpen }: Props) => {
  return (
    <S.OptionContainer>
      <FieldItemWrapper />
      <IsOpenContainer isOpen={isOpen} />
    </S.OptionContainer>
  );
};

export default OptionContainer;
