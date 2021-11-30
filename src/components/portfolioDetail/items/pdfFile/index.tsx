import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import * as S from "./style";

const PdfFile = () => {
  const [numPages, setNumPages] = useState<any>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess(page: number) {
    setNumPages(page);
  }

  return (
    <>
      <Document
        file={{
          url: "https://42place.innovationacademy.kr/wp-content/uploads/2020/12/Resume_Dongjunkang_censored.pdf",
        }}
        onLoadSuccess={() => {
          onDocumentLoadSuccess(numPages);
        }}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </>
  );
};

export default PdfFile;
