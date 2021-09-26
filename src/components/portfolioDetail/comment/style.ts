import styled from "@emotion/styled";
import { mainColor } from "../../../util/css/color/color";

export const CommentWrapper = styled.div`
  width: 1200px;
  height: 850px;
  margin: 50px auto;
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
  width: 100%;
  margin: 40px 0;

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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #f0f0f0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;

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

    p {
      margin-top: 5px;
    }
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
