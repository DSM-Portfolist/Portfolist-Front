import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, SignUp } from "../components";
import MyPage from "../components/mypage/mypage/MyPage";
import UserPage from "../components/mypage/userPage/UserPage";

const UserRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} exact />
      <Route path="/sign-up" component={SignUp} exact />
      <Route path="/mypage" component={MyPage} exact />
      <Route path="/user-page" component={UserPage} exact />
    </BrowserRouter>
  );
};

export default UserRouter;