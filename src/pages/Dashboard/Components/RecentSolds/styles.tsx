import styled from "styled-components";

export const Recent = styled.div`
  margin: 2% 0;
  height: fit-content;
  border-radius: 12px;
  h3 {
    font-size: 1.2rem;
    margin-top: 5%;
  }

  .items {
    display: flex;
    gap: 5%;
  }

  .item1 {
    background-color: #fff;
    width: 50%;
    height: fit-content;

    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 1% 0;
    position: relative;

    img {
      border-radius: 8px;
      width: 100%;
      height: 190px;
    }

    h4,
    p {
      position: absolute;
      bottom: 10px;
      left: 10px;
      color: black;
      margin: 0;
    }

    h4 {
      font-size: 1rem;
      margin-bottom: 10%;
    }

    p {
      font-size: 0.9rem;
    }
  }
  .item2 {
    width: 50%;
    text-align: center;
    position: relative;
    height: fit-content;
    .div1 {
      display: flex;
      gap: 48%;
      .img {
        flex-direction: row;
        background-color: white;
        height: auto;
        padding: 6%;
        border-radius: 10%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    }
    .div2 {
      background-color: rgb(230, 110, 110);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      text-align: left;
      width: 100%;
      margin: 5% 0;
      color: white;
      h4 {
        padding: 0 2%;
      }
      p {
        display: flex;
        padding: 0 3%;
        width: 100%;
        gap: 10%;
      }

      p span {
        font-size: 1rem;
        width: 40%; 
      }
    }
  }
`;