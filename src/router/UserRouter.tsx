import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Login,
  Main,
  PortfolioDatail,
  PortfolioList,
  SignUp,
  PortfolioMake,
  Token,
} from "../components";
import MyPage from "../components/mypage/mypage/Mypage";
import UserPage from "../components/mypage/userPage/UserPage";
import MypageModify from "../components/mypage/mypage/mypageModify/MypageModify";

const UserRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/sign-up" component={SignUp} exact />
        <Route path="/portfolio-list" component={PortfolioList} exact />
        <Route path="/portfolio/:id" component={PortfolioDatail} exact />
        <Route path="/login-github" component={Token} exact />
        <Route path="/my-page" component={MyPage} exact />
        <Route path="/user-page" component={UserPage} exact />
        <Route path="/my-page-modify" component={MypageModify} exact />
        <Route path="/portfolio-make" component={PortfolioMake} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default UserRouter;
