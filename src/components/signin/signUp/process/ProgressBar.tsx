/** @jsxImportSource @emotion/react */

import {
  progressBar,
  progressWrapper,
} from "../../../../util/css/signin/ProgressBar";

const ProgressBar = () => {
  return (
    <div css={[progressWrapper]}>
      <div css={[progressBar]}></div>
    </div>
  );
};

export default ProgressBar;
