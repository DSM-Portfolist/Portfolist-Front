/** @jsxImportSource @emotion/react */

import { baseBackground, center } from "../../../util/css/signin/LoginEmotion";
import FirstProgress from "./process/FirstProgress";

const SignUp = () => {
  return (
    <section css={[baseBackground, center]}>
      <FirstProgress />
    </section>
  );
};

export default SignUp;
