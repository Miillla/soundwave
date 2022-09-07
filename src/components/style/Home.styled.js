import styled from "styled-components";

export const HomeMainSection = styled.section`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-grow: 1;
  //   position: reletiv;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 3em;
  margin-botton: 1rem;
  margin-top: 0;
`;
export const SubTitle = styled.span`
  font-weight: 500;
  font-size: 1.2em;
  margin-bottom: 2rem;
`;
export const Btn = styled.a`
  color: white;
  background-color: #1762a7;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 0.9rem;
  outline: none;
  border: none;
  cursor: pointer;
  //   margin: 20px;

  &:hover {
    background-color: #2180d8;
  }

  &:focus {
    background-color: #2796ff;
  }
`;
export const ImgWrapper = styled.div`
  flex-grow: 1;
  flex-direction: column;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;

  @media (max-width: 900px) {
    display: none;
  }
`;
export const LadyImage = styled.div`
  background-image: url(/images/landing-page-girl.png);
  flex-grow: 1;
  height: 80vh;
  width: 30vw;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom left;
  position: absolute;
  z-index: 2;
  bottom: 0;
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem;
  align-self: center;
`;
export const HomePageCircle1 = styled.div`
  position: absolute;
  width: 17vw;
  height: 17vw;
  border-radius: 50%;
  background-color: rgb(188, 58, 128, 0.1);
  bottom: 2vw;
  left: 13vw;
  z-index: 1;
`;
export const HomePageCircle2 = styled.div`
  position: absolute;
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  background-color: rgb(52, 87, 178, 0.1);
  top: 20vh;
  right: 52vw;
`;
export const HomePageCircle3 = styled.div`
  position: absolute;
  overflow: hidden;
  width: 40vw;
  height: 40vw;
  bottom: 0;
  right: 0;

  &::before {
    content: "";
    transform: translate(40%, 40%);
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: rgb(52, 87, 178, 0.1);
  }
`;
