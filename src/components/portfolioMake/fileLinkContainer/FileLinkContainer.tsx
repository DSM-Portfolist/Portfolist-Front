import { useState, useEffect } from "react";
import * as S from "./style";
import { Link, isInFile, File, isInLink } from "../../../util/assets/index";
import { imgFile, pdfFile } from "../../../util/api/portfolio/portfolioPost";
import { portfolioMakeList } from "../../../modules/atom/portfolioPost";
import { useRecoilState } from "recoil";

const FileLinkContainer = () => {
  const [portfolioMakeArr, setPortfolioMakeArr] =
    useRecoilState(portfolioMakeList);
  const [linkInputName, setLinkInputName] = useState<string>("");
  const [fileResponse, setFileResponse] = useState<string>("");
  const [fileInputName, setFileInputName] = useState<string>("");
  const [imageFile, setImageFile] = useState<any>([]);

  useEffect(() => {
    if (imageFile.length !== 0) {
      postFile(imageFile);
    }
  }, [imageFile]);

  useEffect(() => {
    setPortfolioMakeArr({
      ...portfolioMakeArr,
      link: linkInputName,
    });
  }, [linkInputName]);

  useEffect(() => {
    setPortfolioMakeArr({
      ...portfolioMakeArr,
      file: fileResponse,
    });
  }, [fileResponse]);

  const onChangeFileHanddler = (e: any) => {
    const { files } = e.target;
    setFileInputName(files[0].name); //file에 담긴 name useState로 저장
    let file = e.target.files[0];
    setImageFile(file);
  };

  const postFile = (file: any) => {
    pdfFile(file)
      .then((res) => {
        //recoil로 배너 이미지 경로 바꾸면 끝~
        console.log(res);
        setFileResponse(res.data.file);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeLinkValue = (e: any) => {
    setLinkInputName(e.target.value);
  };

  return (
    <S.MainWrapper className="make-container">
      <h1>
        포트폴리오를 따로 제작한 포트폴리오가 있으시다면 PDF 파일 혹은 링크로
        올려주세요.
      </h1>
      <S.LinkWrapper>
        {linkInputName ? (
          <img src={isInLink} alt="링크 있을때 이미지" />
        ) : (
          <img src={Link} alt="링크 없을때 이미지" />
        )}
        <input
          type="text"
          onChange={onChangeLinkValue}
          placeholder="링크를 입력해주세요."
        />
      </S.LinkWrapper>
      <S.FileWrapper>
        {fileInputName ? (
          <img src={isInFile} alt="파일이 있을때 아이콘" />
        ) : (
          <img src={File} alt="파일이 없을때 아이콘" />
        )}
        <label htmlFor="portfolio-file">
          <input
            id="portfolio-file"
            type="file"
            onChange={onChangeFileHanddler}
          />
          <p>{fileInputName ? fileInputName : "파일을 선택해 주세요."}</p>
        </label>
      </S.FileWrapper>
    </S.MainWrapper>
  );
};

export default FileLinkContainer;
