import React from "react";
import Layout from "../components/Layout";
import {
  JoinMainSection,
  JoinText,
  JoinForm,
  InputGroup,
  AccentText,
  Btn,
  JoinPageCircle1,
  JoinPageCircle2,
} from "../components/style/Join.styled";

const JoinPage = () => {
  return (
    <>
      <Layout>
        <JoinMainSection>
          <JoinText>
            Join the <AccentText> fun.</AccentText>
          </JoinText>

          <JoinForm>
            <InputGroup>
              <label>Name:</label>
              <input type="name" />
            </InputGroup>
            <InputGroup>
              <label>Email:</label>
              <input type="email" />
            </InputGroup>
            <InputGroup>
              <label>Password:</label>
              <input type="password" />
            </InputGroup>
            <InputGroup>
              <Btn type="submit">Join Now</Btn>
            </InputGroup>
          </JoinForm>
        </JoinMainSection>

        <JoinPageCircle1 />
        <JoinPageCircle2 />
      </Layout>
    </>
  );
};
export default JoinPage;
