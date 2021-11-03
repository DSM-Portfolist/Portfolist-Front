import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import {
  Login,
  Main,
  PortfolioDatail,
  PortfolioList,
  SignUp,
} from "../components";
import MyPage from "../components/mypage/mypage/Mypage";
import UserPage from "../components/mypage/userPage/UserPage";
import MypageModify from "../components/mypage/mypage/mypageModify/MypageModify";


const UserRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Main} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/sign-up" component={SignUp} exact />
      <Route path="/portfolio-list" component={PortfolioList} exact />
      <Route path="/portfolio/:id" component={PortfolioDatail} exact />
      <Route path="/my-page" component={MyPage} exact />
      <Route path="/user-page" component={UserPage} exact />
      <Route path="/my-page-modify" component={MypageModify} exact />
    </BrowserRouter>
  );
};

export default UserRouter;
