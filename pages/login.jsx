import React, { Fragment } from "react";
import Image from "next/image";
import styled from "styled-components";
import OutwildPhotography from "../public/photographerRock.jpg";
import Logo from "../public/logo.svg";

const Login = () => {
  const BackgroundImage = styled.section`
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: -1;
  `;

  const Container = styled.div`
    @media (max-width: 1024px) {
      border: 1px solid red;
      display: grid;
      grid-template-columns: 1fr;
    }

    display: grid;
    grid-template-columns: 50% auto;
  `;

  const FormContainer = styled.section`
    display: grid;
    grid-template-rows: 1fr 0fr 1fr;
    height: 100vh;
    padding: 0 5rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      h3 {
        margin: 0rem 1.25rem;
      }
    }

    div {
      display: flex;
      justify-content: space-between;
    }

    form {
      display: flex;
      flex-direction: column;
    }
  `;

  return (
    <Fragment>
      <BackgroundImage>
        <Image
          alt=""
          src={OutwildPhotography}
          layout="fill"
          objectFit="cover"
        />
      </BackgroundImage>
      <Container>
        <FormContainer>
          <span>
            <Image src={Logo} width="70" height="70" layout="" />
            <h3>Fotolog</h3>
          </span>
          <div>
            <p>Sign up</p>
            <p>Log in</p>
          </div>
          <form action="">
            <label htmlFor="">Your email</label>
            <input type="text" placeholder="myemail@provider.com" />
            <label htmlFor="">Your password</label>
            <input type="text" placeholder="*******" />
            <button type="submit">Login</button>
            <hr />
            <button type="">Create account</button>
          </form>
        </FormContainer>
        <div></div>
      </Container>
    </Fragment>
  );
};

export default Login;
