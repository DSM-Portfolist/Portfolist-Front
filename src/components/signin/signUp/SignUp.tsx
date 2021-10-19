/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { baseBackground, center } from "../../../util/css/signin/LoginEmotion";
import { SignUpType } from "../../../util/interface/Sign/loginType";
import FirstProgress from "./process/FirstProgress";

const SignUp = () => {
  const [inputs, setInputs] = useState<SignUpType>({
    name: "",
    email: "",
    password: "",
    field: [],
  });

  return (
    <section css={[baseBackground, center]}>
      <FirstProgress inputs={inputs} setInputs={setInputs} />
    </section>
  );
};

export default SignUp;
