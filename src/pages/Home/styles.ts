import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 100vw;

  > img {
    width: 100vh;
  }

  .bubble-left {
    position: absolute;
    width: 321px;
    height: 321px;

    bottom: 0%;
    left: -5rem;

    background: #996dff;
    filter: blur(400px);

    @media (max-width: 768px) {
      display: none;
    }
  }

  .bubble-right {
    position: absolute;

    width: 321px;
    height: 321px;

    top: 0%;
    right: -5rem;

    background: #996dff;
    filter: blur(400px);

    @media (max-width: 768px) {
      display: none;
    }
  }

  .bubble-mobile {
    display: none;
    position: absolute;

    width: 321px;
    height: 321px;

    bottom: 0%;
    left: 25%;

    background: #996dff;
    filter: blur(400px);

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export const MainHeadline= styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 5rem;

  > img {
    width: auto;
    height: auto;
  }

  .buttonContent {
    display: none;
  }

  @media (max-width: 768px) {
    .buttonContent {
      display: block;
      margin-top: 40px;
    }

    > img {
      width: 100%;
    }
  }
`;

export const Description = styled.h1`
  display: none;
  font-size: 1.875rem;
  font-weight: 600;

  text-align: center;
  line-height: 130%;
  color: var(--text-color);

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 40px;

  > h1 {
    font-size: 5rem;
    font-weight: bold;
    text-align: center;

    color: var(--text-color);
  }

  > strong {
    font-size: 5rem;
    font-weight: bold;
    text-align: center;
    text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button), -1px 1px 0 var(--button), 1px 1px 0 var(--button);
  }
`;
