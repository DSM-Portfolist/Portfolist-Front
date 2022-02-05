import { useEffect } from "react";
import queryString from "query-string";
import { useHistory } from "react-router";
import axios from "axios";
import { useRecoilState } from "recoil";
import { reload } from "../../../modules/atom/auth";
import { MAINURL } from "../../../util/api/common";

const Token = ({ location }: any) => {
  const [test, setTest] = useRecoilState(reload);
  const history = useHistory();
  const code = queryString.parse(location.search);

  useEffect(() => {
    axios
      .post(`${MAINURL}/login/github`, { code: code.code })
      .then((res) => {
        console.log(res);
        localStorage.setItem("access_token_portfolist", res.data.access_token);
        localStorage.setItem(
          "refresh_token_portfolist",
          res.data.refresh_token
        );
        setTest(test + 1);
      })
      .catch((e) => console.log(e));

    history.push("/");
  }, [code, code.code, history, setTest, test]);

  return <div>hello</div>;
};

export default Token;
