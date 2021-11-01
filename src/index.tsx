import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <RecoilRoot>
    <Suspense fallback={<div>Loading...</div>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </RecoilRoot>,
  document.getElementById("root")
);
