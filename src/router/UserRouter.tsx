import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Login } from "../components";

const UserRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} exact />
    </BrowserRouter>
  );
};

export default UserRouter;
