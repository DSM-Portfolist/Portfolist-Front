import React, { useEffect } from "react";
import { github } from "../../../util/api/auth/github";
import queryString from "query-string";

const Token = ({ location }: any) => {
  const code = queryString.parse(location.search);
  console.dir(code.code);

  useEffect(() => {
    github(code.code);
  }, [code.code]);

  return <div>hello</div>;
};

export default Token;
