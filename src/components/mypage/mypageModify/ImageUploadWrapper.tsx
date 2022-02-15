import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { ToastError, ToastSuccess } from "../../../hook/toastHook";
import { deleteProfileImage } from "../../../util/api/mainpage/image";
import { postProfileImage } from "../../../util/api/mypage/image";
import { DefaultProfile } from "../../../util/assets";
import { ProfileImageWrapper } from "../../../util/css/mypage/mypage/mypageModify/style";

const ImageUploadWrapper = ({ user }: any) => {
  const queryClient = useQueryClient();

  const [previewURL, setPreviewURL] = useState<any>("");
  const [isCustomImage, setIsCustomImage] = useState<boolean>(false);

  const { mutate: deleteImageHandle } = useMutation(
    () => deleteProfileImage(),
    {
      onSuccess: () => {
        setIsCustomImage(false);
        ToastSuccess("프로필 이미지가 삭제되었습니다.");
      },
      onError: () => {
        ToastError("프로필 이미지 삭제를 실패했습니다.");
      },
    }
  );

  const { mutate: postImageHandle } = useMutation(
    (file: File) => postProfileImage(file),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user");
        ToastSuccess("프로필 이미지가 업데이트 되었습니다.");
      },
      onError: () => {
        ToastError("프로필 이미지가 업데이트를 실패했습니다.");
      },
    }
  );

  const handleFileOnChange = (e: any) => {
    //이미지 파일 브리뷰
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setPreviewURL(reader.result);
      setIsCustomImage(true);
    };

    postImageHandle(file);
    reader.readAsDataURL(file);
  };

  return (
    <ProfileImageWrapper>
      {user?.github_user ? (
        <img className="profileImg" alt="" src={user?.profile_img} />
      ) : (
        <>
          <img
            className="profileImg"
            alt="기본이미지"
            src={!isCustomImage ? `${DefaultProfile}` : `${previewURL}`}
          />
          <input
            type="file"
            accept="image/jpg,impge/png,image/jpeg,image/gif"
            onChange={handleFileOnChange}
            style={{ display: "none" }}
            id="input-file"
          />
          <label htmlFor="input-file">이미지 업로드</label>
          <div onClick={() => deleteImageHandle()}>기본 이미지 변경</div>
        </>
      )}
    </ProfileImageWrapper>
  );
};

export default ImageUploadWrapper;
