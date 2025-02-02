import styled from "styled-components";

export const ClientItem = styled.div`
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40%;
    p {
      width: 50%;
    }
    .see-all {
      width: 50%;
      font-size: 0.7rem;
      margin-top: 2%;
      color: #555;
      text-align: center;
      cursor: pointer;
    }
  }

  .avatars {
    display: flex;
    gap: 10%;
    .img {
      flex-direction: column;
      img {
        display: block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 5px;
        border: 2px solid #fff;
      }
      p {
        text-align: center;
        margin: 3%;
      }
    }
  }
`;
