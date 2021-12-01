import React, { useState } from "react";
import { Document, Page } from "react-pdf";

interface Props {
  file: any;
}

const PdfFile = ({ file }: Props) => {
  const [numPages, setNumPages] = useState<any>(null);

  console.log(file);

  return (
    <>
      <Document
        file={{
          url: "http://portfolist-bucket.s3.ap-northeast-2.amazonaws.com/d4c979aa-ae23-4bc0-b6cd-1eb4cd80c5dd.pdf",
        }}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => (
            <Page pageNumber={page} />
          ))}
      </Document>
    </>
  );
};

export default PdfFile;
