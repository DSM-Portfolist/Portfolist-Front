import React, { useState, useEffect } from "react";
import { File, isInFile } from "../../../util/assets";
import ImageSelector from "./items/ImageSelector";
import * as S from "./style";
import { imgFile } from "../../../util/api/portfolio/portfolioPost";
import { bannerImgAtom } from "../../../modules/atom/portfolioPost";
import { useRecoilState } from "recoil";

const BannerContainer = () => {
  const [fileInputName, setFileInputName] = useState("");
  const [bannerImg, setBannerImg] = useRecoilState(bannerImgAtom);

  useEffect(() => {
    console.log(bannerImg);
    if (bannerImg.isClickBannder === true) {
      setFileInputName("");
    }
  }, [bannerImg]);

  const onChangeFileHanddler = (e: any) => {
    let file = e.target.files[0];
    setFileInputName(file.name); //file에 담긴 name useState로 저장
    postImageFile(file);
  };

  const postImageFile = (file: any) => {
    imgFile(file)
      .then((res) => {
        //recoil로 배너 이미지 경로 바꾸면 끝~
        setBannerImg({
          thumbnail: res.data.file,
          isClickBannder: false,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <S.BannerWrap className="make-container">
      <S.Title>
        <span>나만의 포트폴리오를 보여줄 배너 이미지를 선택해주세요.</span>
        <span>본인이 따로 이미지를 올릴 수도 있습니다.</span>
      </S.Title>
      <ImageSelector />
      <S.Title>
        <span>
          포트폴리오 배너 이미지에 넣고 싶은 이미지를 직접 넣어주세요.
        </span>
        <div className="file-wrap">
          <label htmlFor="file">
            {fileInputName ? (
              <img src={isInFile} alt="파일이 있을때 아이콘" />
            ) : (
              <img src={File} alt="파일 아이콘" />
            )}
            <input
              type="file"
              id="file"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              onChange={(e) => onChangeFileHanddler(e)}
            />
            <p>{fileInputName ? fileInputName : "파일을 선택해 주세요."}</p>
          </label>
        </div>
      </S.Title>
    </S.BannerWrap>
  );
};

export default BannerContainer;
