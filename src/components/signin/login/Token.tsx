import React, { useEffect } from "react";
import queryString from "query-string";
import { githubToken } from "../../../util/api/auth/github";

const Token = ({ location }: any) => {
  const test = queryString.parse(location.search);
  const id = "df2c3f65d173046f7090";
  const client_secret = "1892d0b0d0003e4ce229e6b89a88b63b9ccffd24";
  const code = test.code;

  return <div>hello</div>;
};

export default Token;
