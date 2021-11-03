import { MainContentWrapper } from "../../../../util/css/mypage/mypage/mypageModify/style";
import PasswordModify from "./PasswordModify";
import SecessionModify from "./SecessionModify";

interface Props {
  setModal: any;
  modal: boolean;
}

const MypageModifyMainContent = (props: Props) => {
  const { setModal, modal } = props;
  return (
    <MainContentWrapper>
      <PasswordModify />
      <SecessionModify setModal={setModal} modal={modal} />
    </MainContentWrapper>
  );
};

export default MypageModifyMainContent;
