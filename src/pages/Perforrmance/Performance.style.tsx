import styled from "styled-components";

export const PerformancePanel = styled.div`
  background-color: #ffcc80;
  border-radius: 20px;
  padding: 20px;
  width: 93%;
  margin: 2% 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 92%;

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
  }

  .clients {
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    .top{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 40%;
      p{
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
        img{
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
  }

  .progress { 
    .line {
      background-color: wheat;
      margin: 2% 0;
      height: 8px;
    }
    .row {
      align-items: center;
      background: #fff;
      padding: 5%;
      border-radius: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      margin: 2% 2% 2% 2%;

      .details {
        display: flex;
        gap: 19rem;
        .title {
          width: 20%;
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 5px;
        }
        .value {
          font-size: 1.1rem;
          font-weight: bold;
          color: #333;
        }
      }
      .details2 {
        display: flex;
        gap: 20rem;
        .title {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 5px;
        }
        .badge {
          padding: 1% 5% 1% 2%;
          width: 3%;
          text-align: center;
          font-size: 0.8rem;
          font-weight: bold;
          border-radius: 8px;
          color: #fff;

          &.positive {
            background-color: #6fcf97; /* Green */
          }

          &.negative {
            background-color: #ff5959; /* Red */
          }

          &.neutral {
            background-color: #4ba4ff; /* Blue */
          }
        }
      }
    }
  }
`;
