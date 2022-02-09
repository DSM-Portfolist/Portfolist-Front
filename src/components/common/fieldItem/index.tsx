import styled from "@emotion/styled";

const FieldItemBox = () => {
  /*   return (
    <S.FieldItemContainer key={index}>
      <span>{fieldList[item - 1].content}</span>
      <img
        src={CloseIcon}
        alt="닫기 아이콘"
        onClick={() => {
          deleteFieldItem(index);
        }}
      />
    </S.FieldItemContainer>
  ); */
};

export const FieldItemContainer = styled.div`
  margin-left: 15px;
  width: fit-content;
  background: #ff7659;
  border-radius: 20px;
  padding: 8px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span {
    font-size: 14px;
    color: white;
  }
  img {
    margin: 0 0 0 10px;
    cursor: pointer;
  }
`;

export default FieldItemBox;
