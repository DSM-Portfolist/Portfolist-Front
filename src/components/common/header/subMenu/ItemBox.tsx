import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const itemList = [
  {
    image: "",
    title: "내 프로필",
    url: "/my-page",
  },
  {
    image: "",
    title: "나의 터칭",
    url: "/my-page",
  },
  {
    image: "",
    title: "작성한 포트폴리오",
    url: "/my-page",
  },
  {
    image: "",
    title: "도움말",
    url: "",
  },
];

const ItemBox = () => {
  return (
    <ItemBoxContainer>
      {itemList.map((item, index) => (
        <Link to={item.url} key={index}>
          <ItemBoxWrap>
            <img src={item.image} alt="" />
            <span>{item.title}</span>
          </ItemBoxWrap>
        </Link>
      ))}
    </ItemBoxContainer>
  );
};

const ItemBoxContainer = styled.ul`
  flex-direction: column;
  height: 100%;

  & a {
    width: 100%;
  }
`;

const ItemBoxWrap = styled.div`
  margin: 5px 0;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  transition: all 0.5s;
  padding: 15px 18px;
  box-sizing: border-box;

  & span {
    font-size: 16px;
    color: #2d2d2d;
    font-weight: 500;
  }

  :hover {
    background: #f3f3f3;
  }
`;

export default ItemBox;
