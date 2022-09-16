import styled from "styled-components";

export const JoinMainSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const JoinText = styled.h1`
  font-size: 3.5em;
  font-weight: bold;
  margin: 0;
  display: inline-flex;
`;
export const JoinForm = styled.form`
  background-color: #202027;
  width: 50vw;
  max-width: 50%;
  padding: 2rem 4rem;
  border-radius: 20px;

  @media (max-width: 900px) {
    width: 80vw;
    max-width: inherit;
    margin: 2rem 0;
  }
`;
export const InputGroup = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  //   background-color: red;
  :last-child {
    margin-bottom: 0;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  Button {
    padding: 1rem 1.2 rem;
  }

  input {
    outline: none;
    background: none;
    border: 1px solid #2e3852;
    font-size: 1em;
    padding: 0.5em;
    color: inherit;
    border-radios: 5px;
  }
  :focus {
    border-color: #596da0;
  }
`;
export const AccentText = styled.div`
  color: #bc3a80;
  margin-left: 1rem;
`;
export const Btn = styled.button`
  color: white;
  background-color: #1762a7;
  //   background-color: yellow;
  padding: 0.75rem 1.5 rem;
  //   border-radios: 20%;
  text-decoration: none;
  font-size: 0.9 rem;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  perspective: 1px;
  height: 3rem;
  border-collapse: separate;

  :hover {
    background-color: #2180d8;
  }

  :focus {
    background-color: #2796ff;
  }
`;
export const JoinPageCircle1 = styled.div`
  position: absolute;
  overflow: hidden;
  width: 35vw;
  height: 35vw;
  bottom: 0;
  left: 0;
  z-index: -1;

  ::before {
    content: "";
    transform: translateX(-20%);
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: rgb(188, 58, 128, 0.1);
  }
`;
export const JoinPageCircle2 = styled.div`
  position: absolute;
  overflow: hidden;
  width: 30vw;
  height: 30vw;
  top: 0;
  left: 22vw;
  z-index: -1;

  ::before {
    content: "";
    transform: translatey(-30%);
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: rgb(52, 87, 178, 0.1);
  }
`;
