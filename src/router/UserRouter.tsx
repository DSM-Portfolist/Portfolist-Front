import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, SignUp } from "../components";

const UserRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} exact />
      <Route path="/sign-up" component={SignUp} exact />
    </BrowserRouter>
  );
};

export default UserRouter;
