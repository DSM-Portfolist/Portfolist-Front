import React from "react";
import { Logo } from "../../../../util/assets";
import { Container } from "../style";
import styled from "@emotion/styled";
import { mainColor } from "../../../../util/css/color/color";
import { Link } from "react-router-dom";

const LoginCompontent = () => {
  return (
    <BeforeLoginHeader>
      <Link to="/">
        <img src={Logo} alt="포트폴리스트 로고" />
      </Link>
      <Link to="/login">
        <button>시작하기</button>
      </Link>
    </BeforeLoginHeader>
  );
};

const BeforeLoginHeader = styled(Container)`
  button {
    border: 1px solid #ff7659;
    border-radius: 20px;
    width: 110px;
    height: 40px;
    background-color: white;
    color: ${mainColor};
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    transition: 0.8s;

    :hover {
      box-shadow: 0 2px 3px #80808040;
      background-color: ${mainColor};
      color: white;
    }
  }
`;

export default LoginCompontent;
