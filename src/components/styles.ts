import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 8px;
  box-shadow: 0 3rem 5rem rgb(0 0 0 / 25%);

  .player-1,
  .player-2 {
    padding: 9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 600px;

    h2 {
      font-size: 40px;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 1px;
      word-spacing: 2px;

      margin-bottom: 20px;
    }

    span {
      font-size: 80px;
      color: #c7365f;

      margin-bottom: 100px;
    }

    div {
      text-align: center;
      padding: 20px;
      width: 100%;

      background: #c7365f;
      border-radius: 8px;

      h3 {
        font-size: 17px;
        font-weight: 300;
        text-transform: uppercase;

        margin-bottom: 10px;

        color: #ddd;
      }

      span {
        color: #fff;
        font-size: 35px;
      }
    }
  }
  .dice {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 160px;

    box-shadow: 0 20px 50px rgb(0 0 0 / 20%);

    img {
      height: 100px;
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  .winner {
    background: #2f2f2f;
    color: #c7365f;
  }
`;
