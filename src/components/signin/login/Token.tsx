import React, { useEffect } from "react";
import { github } from "../../../util/api/auth/github";
import queryString from "query-string";
import { useHistory } from "react-router";

const Token = ({ location }: any) => {
  const history = useHistory();
  const code = queryString.parse(location.search);

  useEffect(() => {
    github(code.code);

    history.push("/");
  }, [code.code, history]);

  return <div>hello</div>;
};

export default Token;
