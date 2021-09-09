import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, SecProgress, SignUp } from "../components";

const UserRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} exact />
      <Route path="/sign-up" component={SignUp} exact />
      <Route path="/sign-up/sec" component={SecProgress} exact />
    </BrowserRouter>
  );
};

export default UserRouter;
