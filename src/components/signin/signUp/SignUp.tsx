/** @jsxImportSource @emotion/react */

import { baseBackground, center } from "../../../util/css/signin/style";
import FirstProgress from "./FirstProgress";

const SignUp = () => {
  return (
    <section css={[baseBackground, center]}>
      <FirstProgress />
    </section>
  );
};

export default SignUp;
