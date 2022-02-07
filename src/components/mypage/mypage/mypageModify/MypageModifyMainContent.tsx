import { MainContentWrapper } from "../../../../util/css/mypage/mypage/mypageModify/style";
import PasswordModify from "./PasswordModify";
import SecessionModify from "./SecessionModify";
import NotificationModule from "./notificationModule/NotificationModule";
import { useRecoilValue } from "recoil";
import { myInfoSelector } from "../../../../modules/selector/user";

interface Props {
  setModal: any;
  modal: boolean;
}

const MypageModifyMainContent = (props: Props) => {
  const { setModal, modal } = props;
  const userInfo = useRecoilValue(myInfoSelector);
  return (
    <MainContentWrapper>
      {userInfo?.github_user ? "" : <PasswordModify />}
      <SecessionModify setModal={setModal} modal={modal} />
      <NotificationModule />
    </MainContentWrapper>
  );
};

export default MypageModifyMainContent;
