/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { baseBackground, center } from "../../../util/css/signin/LoginEmotion";
import { SignUpType } from "../../../util/interface/Sign/loginType";
import FirstProgress from "./process/FirstProgress";

const SignUp = () => {
  const [fieldList, setFieldList] = useState([]);
  const [inputs, setInputs] = useState<SignUpType>({
    name: "",
    email: "",
    password: "",
    field: fieldList,
  });

  return (
    <section css={[baseBackground, center]}>
      <FirstProgress
        setFieldList={setFieldList}
        fieldList={fieldList}
        inputs={inputs}
        setInputs={setInputs}
      />
    </section>
  );
};

export default SignUp;
