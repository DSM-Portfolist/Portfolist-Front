/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { ProfileImageWrapper } from "../../../../util/css/mypage/mypage/mypageModify/style";
import { profileImage } from "../../../../util/css/mypage/ProfileHeader/style";

const ImageUploadWrapper = () => {
  const [imageFile, setImageFile] = useState<any>([]);
  const [previewURL, setPreviewURL] = useState<any>("");
  const [isCustomImage, setIsCustomImage] = useState<boolean>(false);

  let formData = new FormData();

  function testAsd() {
    //FormData 값 확인하기
    for (let key of formData.keys()) {
      console.log(key);
    }
    // FormData의 value 확인
    for (let value of formData.values()) {
      console.log(value);
    }
  }

  const handleFileOnChange = (e: any) => {
    //이미지 파일 브리뷰
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImageFile(file);
      setPreviewURL(reader.result);
      formData.append("file", file);
      setIsCustomImage(true);
      testAsd();
    };
    reader.readAsDataURL(file);
  };

  return (
    <ProfileImageWrapper>
      {!isCustomImage ? (
        <img
          css={profileImage}
          alt="기본이미지"
          src="https://belabef.com/common/img/default_profile.png"
        />
      ) : (
        <img css={profileImage} alt="" src={previewURL} />
      )}
      <input
        type="file"
        accept="image/jpg,impge/png,image/jpeg,image/gif"
        onChange={handleFileOnChange}
        style={{ display: "none" }}
        id="input-file"
      />
      <label htmlFor="input-file">이미지 업로드</label>
      <div
        onClick={() => {
          setIsCustomImage(false);
        }}
      >
        기본 이미지 변경
      </div>
    </ProfileImageWrapper>
  );
};

export default ImageUploadWrapper;
