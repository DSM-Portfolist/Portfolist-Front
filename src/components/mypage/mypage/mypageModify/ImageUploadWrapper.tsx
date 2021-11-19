/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { ToastError, ToastSuccess } from "../../../../hook/toastHook";
import { deleteProfileImage } from "../../../../util/api/mainpage/image";
import { postProfileImage } from "../../../../util/api/mypage/image";
import { ProfileImageWrapper } from "../../../../util/css/mypage/mypage/mypageModify/style";
import { profileImage } from "../../../../util/css/mypage/ProfileHeader/style";

const ImageUploadWrapper = () => {
  const [imageFile, setImageFile] = useState<any>([]);
  const [previewURL, setPreviewURL] = useState<any>("");
  const [isCustomImage, setIsCustomImage] = useState<boolean>(false);

  let formData = new FormData();

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

  console.log(imageFile);

  // 이미지 삭제
  const deleteImageHandler = () => {
    try {
      deleteProfileImage();
      setIsCustomImage(false);
      ToastSuccess("프로필 이미지가 삭제되었습니다.");
    } catch (e) {
      ToastError("프로필 이미지 삭제를 실패했습니다.");
      console.log(e);
    }
  };

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
      checkFormData();
    };
    reader.readAsDataURL(file);

    postProfileImage(file);
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
      <div onClick={deleteImageHandler}>기본 이미지 변경</div>
    </ProfileImageWrapper>
  );
};

export default ImageUploadWrapper;
