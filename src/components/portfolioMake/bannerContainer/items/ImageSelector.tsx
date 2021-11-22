import React, { useState } from "react";
import { mainColor } from "../../../../util/css/color/color";
import * as S from "../style";

const imageList = [
  {
    id: 1,
    url: "https://cdn.pixabay.com/photo/2021/10/05/14/32/ocean-6682870_960_720.jpg",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1637548739071-7c24bbcab218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

const ImageSelector = () => {
  const [imgSelect, setImgSelect] = useState<number>(1);

  const backgroundColor = (list: any) => {
    setImgSelect(list.id);
    console.log(list.url);
  };

  return (
    <S.ImageWrap>
      {imageList.map((img, index) => (
        <img
          key={img.id}
          src={img.url}
          alt="베너이미지"
          onClick={() => backgroundColor(img)}
          style={{
            border: img.id === imgSelect ? `2px solid ${mainColor}` : "",
          }}
        />
      ))}
    </S.ImageWrap>
  );
};

export default ImageSelector;
