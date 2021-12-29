import styled from "@emotion/styled";

interface Props {
  toggle?: boolean;
}

export const ReCommentWrap = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 1px solid red;
`;

export const CommentInputWrap = styled.form`
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
  padding-left: 4.7rem;
  box-sizing: border-box;

  button {
    display: none;
  }
`;

export const Input = styled.input<Props>`
  width: 100%;
  display: flex;
  background-color: #efefef;
  border-radius: 20px;
  padding: 10px 20px;
  box-sizing: border-box;
`;

export const Content = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;

  a {
    color: black;
  }

  img {
    margin: 0 10px;
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50px;
  }

  .content {
    padding: 5px;
    display: flex;
    flex-direction: column;

    .user-name {
      display: flex;
      flex-direction: row;

      .comment-date {
        margin-left: 5px;
        padding-left: 5px;
        border-left: 1px solid #f0f0f0;
        color: #757575;
      }
    }

    pre {
      margin-top: 5px;
    }
  }

  .more_text {
    margin-top: 10px;
    padding: 0 5px;
    width: fit-content;
    cursor: pointer;
  }
`;

export const Util = styled.div`
  display: flex;
  flex-direction: row;

  span {
    padding: 0 5px;
    color: #757575;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const ReComment = styled.div<Props>`
  width: 100%;
  border-top: 1px solid #f0f0f0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
