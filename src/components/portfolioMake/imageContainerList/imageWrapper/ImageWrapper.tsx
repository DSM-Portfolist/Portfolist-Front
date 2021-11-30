import React, { useState, useEffect } from "react";
import * as S from "./style";
import { imageListType } from "../../../../util/interface/portfolio/portfolioMakeType";
import { container_list } from "../../../../modules/atom/portfolioPost";
import { useRecoilState } from "recoil";
import { imgFile } from "../../../../util/api/portfolio/portfolioPost";

const ImageWrapper = ({ identity }: any) => {
  const [containerList, setContainerList] = useRecoilState(container_list);
  let jbRandom = Math.random();
  const [imageFile, setImageFile] = useState<any[]>([]);
  const [previewURL, setPreviewURL] = useState<string[]>([]);
  const [imageList, setImageList] = useState<imageListType[]>([
    { isInFile: false, index: 0 + jbRandom },
  ]);

  console.log(containerList);

  useEffect(() => {
    if (imageFile.length !== 0) {
      imgFile(imageFile)
        .then((res: any) => {
          addImageContainer(res.data.file);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      return;
    }
  }, [imageFile]);

  const addImageContainer = (res: string) => {
    console.log(res);
    setContainerList(
      containerList.map((value: any, i: number) => {
        if (i === identity) {
          return {
            ...value,
            container_img_list: value.container_img_list.concat(String(res)),
          };
        } else {
          return value;
        }
      })
    );
  };

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
      setImageFile(file);
      setPreviewURL((previewURL: any) => [...previewURL, reader.result]);
      updateFieldChanged(true, index);
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
                  id={`input-file${identity}`}
                  style={{ display: "none" }}
                  accept="image/jpg,impge/png,image/jpeg,image/gif"
                  onChange={(e: any) => {
                    handleFileOnChange(e, v.index);
                  }}
                />
                <label htmlFor={`input-file${identity}`}>이미지 넣기</label>
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
