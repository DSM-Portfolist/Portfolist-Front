import React, { useState } from "react";
import * as S from "./style";

interface Props {
  checkFormData: () => void;
}

const ImageWrapper = (props: Props) => {
  const { checkFormData } = props;

  let formData = new FormData();
  const [imageFile, setImageFile] = useState<any>([]);
  const [previewURL, setPreviewURL] = useState<any>([]);
  const [imageList, setImageList] = useState<any>([
    { isInFile: false, index: 0 },
  ]);

  const updateFieldChanged = (item: boolean, index: number) => {
    let newArr = imageList.map((v: any, i: number) => {
      if (index === i) {
        console.log(`${index} : 들어옴`);
        return { ...v, isInFile: item };
      } else {
        console.log(`${index} : else문 들어옴`);
        return v;
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
      setImageFile(file);
      setPreviewURL((previewURL: any) => [...previewURL, reader.result]);
      formData.append("file", file);
      updateFieldChanged(true, index);
      checkFormData();
    };
    reader.readAsDataURL(file);
  };

  const addImageList = () => {
    setImageList((imageLis: any) => [
      ...imageLis,
      { isInFile: false, index: imageList.length },
    ]);
  };
  return (
    <S.ImageWrapper>
      {imageList.map((v: any, index: number) => {
        console.log("v value", v);
        return (
          <>
            {!v.isInFile ? (
              <>
                <input
                  type="file"
                  id="input-file"
                  style={{ display: "none" }}
                  accept="image/jpg,impge/png,image/jpeg,image/gif"
                  onChange={(e: any) => {
                    handleFileOnChange(e, v.index);
                  }}
                />
                <label htmlFor="input-file">image{v.index}</label>
              </>
            ) : (
              <S.ImageItem>
                <img src={previewURL[index]} className="PreviewURL" alt="" />
                {v.index + 1 < imageList.length ? (
                  ""
                ) : (
                  <span onClick={addImageList}>이미지 추가{v.index}</span>
                )}
              </S.ImageItem>
            )}
          </>
        );
      })}
    </S.ImageWrapper>
  );
};

export default ImageWrapper;
