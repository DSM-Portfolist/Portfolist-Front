import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import  MyMypage  from "../components/mypage/my-mypage/MyMypage";
import  YourMypage  from "../components/mypage/your-mypage/YourMypage";

const UserRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/my-mypage" component={MyMypage} exact />
      <Route path="/your-mypage" component={YourMypage} exact />
    </BrowserRouter>
  );
};

export default UserRouter;