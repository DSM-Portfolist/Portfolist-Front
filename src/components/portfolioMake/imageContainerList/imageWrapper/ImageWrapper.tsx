import React, { useState } from "react";
import * as S from "./style";
import { imageListType } from "../../../../util/interface/portfolio/portfolioMakeType";

const ImageWrapper = () => {
  let formData = new FormData();
  let jbRandom = Math.random();
  const [imageFile, setImageFile] = useState<any[]>([]);
  const [previewURL, setPreviewURL] = useState<string[]>([]);
  const [imageList, setImageList] = useState<imageListType[]>([
    { isInFile: false, index: 0 + jbRandom },
  ]);

  console.log(imageList);

  function checkFormData() {
    //FormData 값 확인하기
    for (let key of formData.keys()) {
      console.log(key);
    }
    // FormData의 value 확인
    for (let value of formData.values()) {
      console.log(value);
    }
  }

  const updateFieldChanged = (item: boolean, index: number) => {
    let newArr = imageList.map((value: any, i: number) => {
      if (index === value.index) {
        return { ...value, isInFile: item };
      } else {
        return value;
      }
    });
    setImageList(newArr);
  };

  const handleFileOnChange = (e: any, index: number) => {
    //이미지 파일 브리뷰
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImageFile(imageFile.concat(file));
      setPreviewURL((previewURL: any) => [...previewURL, reader.result]);
      formData.append("file", file);
      updateFieldChanged(true, index);
      checkFormData();
    };
    reader.readAsDataURL(file);
  };

  const addImageList = () => {
    var jbRandom = Math.random();
    setImageList((imageLis: any) => [
      ...imageLis,
      { isInFile: false, index: imageList.length + jbRandom },
    ]);
  };

  return (
    <S.ImageWrapper>
      {imageList.map((v: any, index: number) => {
        return (
          <S.ImageContainer key={index}>
            {!v.isInFile ? (
              <>
                <input
                  type="file"
                  id="input-file"
                  style={{ display: "none" }}
                  accept="image/jpg,impge/png,image/jpeg,image/gif"
                  onChange={(e: any) => {
                    handleFileOnChange(e, v.index);
                    console.log(v.index);
                  }}
                />
                <label htmlFor="input-file">이미지 넣기</label>
              </>
            ) : (
              <S.ImageItem key={index}>
                <img src={previewURL[index]} className="PreviewURL" alt="" />
                {v.index + 1 < imageList.length ? (
                  ""
                ) : (
                  <span onClick={addImageList}>이미지 추가</span>
                )}
              </S.ImageItem>
            )}
          </S.ImageContainer>
        );
      })}
    </S.ImageWrapper>
  );
};

export default ImageWrapper;
