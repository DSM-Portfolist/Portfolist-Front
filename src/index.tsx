import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BarLoader } from "react-spinners";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";
import { mainColor } from "./util/css/color/color";
import styled from "@emotion/styled";

const Flex = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
ReactDOM.render(
  <RecoilRoot>
    <Suspense
      fallback={
        <Flex>
          <BarLoader color={mainColor} height="4px" width="100px" />
        </Flex>
      }
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </RecoilRoot>,
  document.getElementById("root")
);
