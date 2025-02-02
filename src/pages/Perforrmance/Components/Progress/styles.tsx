import styled from "styled-components";

export const ProgressContainer = styled.div`
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
`;
