import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { bannerImgAtom } from "../../../../modules/atom/portfolioPost";
import { mainColor } from "../../../../util/css/color/color";
import * as S from "../style";

export const imageList = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1506878206813-92402b8ded23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
    url: "https://images.unsplash.com/uploads/1413349410189e2a95d2e/39982a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

const ImageSelector = () => {
  const [imgSelect, setImgSelect] = useState<number>(1);
  const setBannerImg = useSetRecoilState(bannerImgAtom);

  const backgroundColor = (list: any) => {
    setImgSelect(list.id);
    setBannerImg({
      thumbnail: list.url,
      isClickBannder: true,
    });
  };

  return (
    <S.ImageWrap>
      {imageList.map((img) => (
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
