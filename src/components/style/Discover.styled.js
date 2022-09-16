import styled from "styled-components";

export const DiscoverMainSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const CallToAction = styled.div`
  // max-width: 1180px;
  // margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem;
  align-self: center;
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 3em;
  margin-bottom: 1rem;
  margin-top: 0;
`;
export const IconSection = styled.div`
  display: flex;
  // background-color: red;
  width: 350px;
  justify-content: space-between;
`;
export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0.5 rem;
  padding: 0.75rem;
  width: 100px;
  height: 100px;
  background-color: #202027;
  margin-bottom: 2rem;
`;
export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 1.2em;
  margin-bottom: 2rem;
`;
export const CoverImage = styled.img`
  width: 30vw;
  margin-left: 2rem;
  height: auto;
  max-width: 300px;

  @media (max-width: 800px) {
    margin-top: 2rem;
    height: 30vh;
    width: auto;
  }
`;
export const IconImage = styled.img`
  width: 40px;

  // @media (max-height: 100%) {
  //   flex-direction: column;
  //   justify-content: space-between;
  // }
`;
