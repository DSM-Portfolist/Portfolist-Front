/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import {
  MainSection,
  MyProfileWrapper,
  ProfileImageWrapper,
} from "../../../../util/css/mypage/mypage/mypageModify/style";
import { profileImage } from "../../../../util/css/mypage/ProfileHeader/style";
import {
  baseBackground,
  column,
} from "../../../../util/css/mypage/mypage/style";

const MypageModify = () => {
  const [imageFile, setImageFile] = useState<any>("");
  const [previewURL, setPreviewURL] = useState<any>("");

  console.log(previewURL);

  let previewImage = <img css={profileImage} alt="" />;

  imageFile !== "" &&
    (previewImage = (
      <img css={profileImage} alt="" src={previewURL} />
    ));

  const handleFileOnChange = (e: any) => { //이미지 파일 브리뷰
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImageFile(file);
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div css={[baseBackground, column]}>
      <header></header>
      <MainSection>
        <MyProfileWrapper>
          <ProfileImageWrapper>
            {previewImage}
            <input
              type="file"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              onChange={handleFileOnChange}
              style={{ display: "none" }}
              id="input-file"
            />
            <label htmlFor="input-file">이미지 업로드</label>
          </ProfileImageWrapper>
        </MyProfileWrapper>
      </MainSection>
    </div>
  );
};

export default MypageModify;
