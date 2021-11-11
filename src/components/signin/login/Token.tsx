import React, { useEffect } from "react";
import { github } from "../../../util/api/auth/github";
import queryString from "query-string";
import { useHistory } from "react-router";

const Token = ({ location }: any) => {
  const history = useHistory();
  const code = queryString.parse(location.search);
  console.dir(code.code);

  useEffect(() => {
    github(code.code)
      .then((res) => {
        localStorage.setItem("access_token_portfolist", res.data.access_token);
        localStorage.setItem(
          "refresh_token_portfolist",
          res.data.refresh_token
        );
        history.push("/");
      })
      .catch((e) => console.log(e));
  }, [code.code, history]);

  return <div>hello</div>;
};

export default Token;
