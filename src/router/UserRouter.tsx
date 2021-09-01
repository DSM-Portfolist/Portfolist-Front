import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, SignUp } from "../components";

const UserRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} exact />
      <Route path="/sign-up" component={SignUp} exact />

      <Route path="/my-mypage" component={MyMypage} exact />
      <Route path="/your-mypage" component={YourMypage} exact />
    </BrowserRouter>
  );
};

export default UserRouter;