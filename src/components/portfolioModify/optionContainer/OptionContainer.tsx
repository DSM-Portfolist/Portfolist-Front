import FieldItemWrapper from "./fieldItemWrapper/FieldItemWrapper";
import IsOpenContainer from "./isOpenContainer/IsOpenContainer";
import * as S from "./style";

const OptionContainer = () => {
  return (
    <S.OptionContainer>
      <FieldItemWrapper />
      <IsOpenContainer />
    </S.OptionContainer>
  );
};

export default OptionContainer;
