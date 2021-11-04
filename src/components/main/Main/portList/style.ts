import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  margin: 60px auto;
  width: 1200px;
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const GoWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: "Prociono", serif;
    font-size: 35px;
    margin-bottom: 15px;
  }

  button {
    width: 150px;
    height: 40px;
    background: #ff7659;
    box-shadow: 0px 3px 4px rgba(151, 151, 151, 0.25);
    font-size: 25px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
      margin-left: 10px;
    }
  }
`;

export const ListItemWrapper = styled.div`
  width: 80%;
  height: 80%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  margin-left: 60px;
  display: flex;
  flex-direction: column;

  .folio-img {
    overflow: hidden;
    width: 170px;
    height: 275px;
  }
  span {
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;

    :hover {
      transform: scale(1.1);
    }
  }

  .more-explore {
    margin-top: 10px;
    color: #5e5e5e;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    height: 0;
    transition: all 0.5s;
    overflow: hidden;
  }

  :hover .more-explore {
    height: 60px;
  }

  :hover img {
    margin-bottom: 10px;
  }
`;
