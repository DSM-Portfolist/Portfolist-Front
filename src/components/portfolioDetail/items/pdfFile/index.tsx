import React, { useState } from "react";
import { Document, Page } from "react-pdf";

interface Props {
  file: string;
}

const PdfFile = ({ file }: Props) => {
  const [numPages, setNumPages] = useState<any>(null);

  return (
    <>
      <Document
        file={{
          url: `${file}`,
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
