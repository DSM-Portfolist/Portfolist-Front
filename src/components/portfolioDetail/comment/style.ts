import styled from "@emotion/styled";
import { grayColor, mainColor } from "../../../util/css/color/color";

interface Props {
  toggle?: boolean;
}

export const CommentWrapper = styled.div`
  width: 100%;
  min-width: 760px;
  margin: 50px auto 200px 0;

  .no_comment {
    margin: 30px;
    text-align: center;
    color: ${grayColor};
    font-size: 18px;
    font-weight: 500;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;

  & textarea {
    height: 70%;
    border: 1px solid #efefef;
    border-radius: 3px;
    resize: none;
    padding: 15px;
    font-size: 16px;
    font-weight: 400;
  }

  & button {
    height: 25%;
    background: #ff7659;
    color: white;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }
`;

export const CommentList = styled.div`
  margin: 40px 0 0;

  .comment-info {
    padding-bottom: 12px;
    font-size: 18px;
    font-weight: 400;
    width: 100%;
    border-bottom: 2px solid ${mainColor};
  }
`;

export const CommentItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #f0f0f0;
  padding: 30px 0;
  box-sizing: border-box;

  .more_text {
    margin-top: 1%;
    margin-left: 4.7rem;
    padding: 7px 10px;
    width: fit-content;
    border-radius: 5px;
  }

  .comment {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ReCommentWrap = styled.div<Props>`
  width: 100%;
  display: ${({ toggle }) => (toggle ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-end;
`;

export const Content = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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

  .comment-delete {
    margin: 30px auto;
    color: ${grayColor};
    font-size: 20px;
    font-weight: 500;
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

export const Input = styled.input<Props>`
  display: ${({ toggle }) => (toggle ? "flex" : "none")};
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

export const MoreButton = styled.button`
  margin-top: 50px;
  height: 50px;
  width: 100%;
  color: #ababab;
  font-size: 16px;
  background: #fbfbfb;
  border: 1px solid #cbcbcb;
  cursor: pointer;
  transition: all 0.5s;

  :hover {
    background: ${mainColor};
    border: none;
    color: white;
  }
`;
