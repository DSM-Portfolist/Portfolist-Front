import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, Main, SecProgress, SignUp } from "../components";
import MyPage from "../components/mypage/mypage/Mypage";
import UserPage from "../components/mypage/userPage/UserPage";

const UserRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Main} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/sign-up" component={SignUp} exact />
      <Route path="/sign-up/sec" component={SecProgress} exact />
      <Route path="/my-page" component={MyPage} exact />
      <Route path="/user-page" component={UserPage} exact />
    </BrowserRouter>
  );
};

export default UserRouter;
